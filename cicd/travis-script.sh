#!/bin/bash

set -e

gcloud_auth(){
    # This function is to authenticate to the GCS (Google Cloud Storage) for the report upload

    # GCS_KEYFILE and GCS_SERVICE_ACCOUNT are set in the Travis repo settings as variables
    # available to all branches. Values are encoded using base64

    printf "\n*** Authenticating the service account for GCS access"

    echo "$GCS_KEYFILE" | base64 --decode > keyfile.json
    CFILE=keyfile.json
    if gcloud auth activate-service-account $GCS_SERVICE_ACCOUNT --key-file=$CFILE; then
	    echo "Account $GCS_SERVICE_ACCOUNT activated!"
    else
	    echo "Couldn't activate the account, Exiting.."
	    exit
    fi
}

notify(){

    printf "\n*** Preparing the overall test report"

    # Extract the job# from the path set in .travis.yml
    JOB_NUMBER=${TESTFOLDER##*/}

    # File to contain the overall test stats for the number of tests, passes and failures
    TEST_OVERVIEW_FILE="$TRAVIS_BUILD_NUMBER-$JOB_NUMBER-mochstats.txt"

    # Extract the information on number of tests, passes and failures from all mochawesome*.json files
    find cypress/results/ -type f -name '*.json' | while read paths;
    do
        jq -r '"\(.results[].file) | tests: \(.stats.tests) | passes: \(.stats.passes) | failures: \(.stats.failures)"' $paths >> $TEST_OVERVIEW_FILE
    done

    # Keeping only the filenames, sorted
    sed 's|cypress/integration/job1/||g' $TEST_OVERVIEW_FILE | sort -o $TEST_OVERVIEW_FILE
    sed 's|cypress/integration/job2/||g' $TEST_OVERVIEW_FILE | sort -o $TEST_OVERVIEW_FILE

    REPORT_FOLDER="/home/travis/build/team99/99-automation-cypress/mochawesome-report"
    # GCS_BUCKET is set in the Travis repo settings as variable
    FULL_BUCKET="https://console.cloud.google.com/storage/browser/$GCS_BUCKET"

    cp -r $REPORT_FOLDER $JOB_NUMBER
    mv $JOB_NUMBER/cypress-mochawesome.html $JOB_NUMBER/$TRAVIS_BUILD_NUMBER-$JOB_NUMBER-cypress-mocha.html

    printf "\n*** Uploading to GCS.. "

    FILE_NAME="$JOB_NUMBER.tar.gz"
    # mochawesome creates a html file with required assets to render the page properly
    # so, bundling them together to easier handling in naming and uploading
    tar -zcf $FILE_NAME $JOB_NUMBER

    # Folders to be created in below format. e.g. 2021-05-06/99sg/576
    GCS_FOLDER_NAME=$(date +"%F")/$TEST_LOCATION/$TRAVIS_BUILD_NUMBER
    # Path to be sent to Slack
    GCS_FULL_PATH="$FULL_BUCKET/$GCS_FOLDER_NAME"

    # CYPRESS_SLACK_AUTH and SLACK_CHANNEL are set in the Travis repo settings as variables
    # available to all branches. Values are encoded using base64
    CYPRESS_SLACK_AUTH=$(echo $CYPRESS_SLACK_AUTH | base64 --decode)
    CHANNEL=$(echo $SLACK_CHANNEL | base64 --decode)

    gsutil cp $FILE_NAME gs://$GCS_BUCKET/$GCS_FOLDER_NAME/

    printf "\n*** Sending to Slack "

    curl \
    -F channels=$CHANNEL \
    -F file=@$TEST_OVERVIEW_FILE \
    -F initial_comment="Build $TRAVIS_BUILD_NUMBER: $REMOTE_COMMIT_MSG
    Job: $JOB_NUMBER
    Cypress Report: $GCS_FULL_PATH
    Build Log: $TRAVIS_BUILD_WEB_URL" \
    -H "Authorization: Bearer $CYPRESS_SLACK_AUTH" https://slack.com/api/files.upload
}

cypress_run(){
   printf "\n*** Running cypress tests"

   set +e

   # Either of below can be used. make may be further optimized modifying the "Makefile"
   # to accomodate more jobs e.g. make -j 2 (haven't checked or tested this)
   # keeping the make requires to maintain a makefile though and place holders to update spec path

   npm run cy:run -- --spec "$TESTFOLDER/*"
   #make -j 2 run-stg-$TEST_LOCATION;

   TEST_CODE=$?
   set -e

   # Generating the mocahawesome reports
   MOCHAWESOM_FILE=$(mktemp /tmp/cypress-mochawesome.XXXXXX.json)
   ./node_modules/.bin/mochawesome-merge "cypress/results/*.json" > $MOCHAWESOM_FILE
   ./node_modules/.bin/marge $MOCHAWESOM_FILE
   kill $(jobs -p) || true

   printf "\nCypress runs completed ***"

   notify
   exit $TEST_CODE
}

add_symlinks(){
    PATHCOUNTER=1

    # was thinking of removing the handling for below commit messages since they seem unnecessary
    # however, keeping until everybody's on the same page
    # - test_prod_rumah123
    # - test_prod_99id
    # - test_prod_99sg
    # - test_prod_all
    # - test_stg_all

    # Only following commit messages will be staisfied
    # _stg_ can be also removed, but keeping for folks who use still
    # test_stg_rumah123 | test_stg_99id | test_stg_99sg | test_custom
    if [[ $REMOTE_COMMIT_MSG == *"test_stg_99sg"* ]]; then
        TEST_LOCATION="99sg"
        CONFIG_FILE=staging.json
    elif [[ $REMOTE_COMMIT_MSG == *"test_stg_99id"* ]]; then
        TEST_LOCATION="99id"
        CONFIG_FILE=staging.json
    elif [[ $REMOTE_COMMIT_MSG == *"test_stg_rumah123"* ]]; then
        TEST_LOCATION="rumah123"
        CONFIG_FILE=staging.json
    elif [[ $REMOTE_COMMIT_MSG == *"test_prod_99sg"* ]]; then
        TEST_LOCATION="99sg"
        CONFIG_FILE=production.json
    elif [[ $REMOTE_COMMIT_MSG == *"test_prod_99id"* ]]; then
        TEST_LOCATION="99id"
        CONFIG_FILE=production.json
    elif [[ $REMOTE_COMMIT_MSG == *"test_prod_rumah123"* ]]; then
        TEST_LOCATION="rumah123"
        CONFIG_FILE=production.json
    else
        printf "***\nThe commit message is not set properly to initiate testing.. \nIt should be in the format 'test_stg_<location>' \ne.g.   test_stg_99sg\nexiting...\n***"
        exit
    fi

    # If the above to be removed, below should get enabled
    # Going to remove the commit message based location setting
    # - there will always be a branch dedicated to a location
    # - commit_message coming from the api call from the remote repo
    #   is not accessible in the build env, except for the .travis.yml conditions
    #   and, is not overwriting the TRAVIS_COMMIT_MESSAGE env variables

    # instead the location is set by as per the branch. kiss

    #if [[ $TRAVIS_BRANCH == *"runtest-sg"* ]]; then
    #    TEST_LOCATION="99sg"
    #elif [[ $TRAVIS_BRANCH == *"runtest-id"* ]]; then
    #    TEST_LOCATION="99id"
    #elif [[ $TRAVIS_BRANCH == *"runtest-rumah123"* ]]; then
    #    TEST_LOCATION="rumah123"
    #else
    #    printf "***\n$TRAVIS_BRANCH is not the branch to initiate testing.. \nIt should be in the format 'runtest-<location>' \ne.g.   runtest-sg\nexiting...\n***"
    #    exit
    #fi

    printf "***\nThe test location is set as $TEST_LOCATION"

    # set cypress config
    CONFIG_FILE=cypress/config/$TEST_LOCATION/$CONFIG_FILE
    jq -s '.[0] * .[1]' "$CONFIG_FILE" "cicd/mochawesome-reporter.json" > cypress.json
    sed -i "s|cypress/integration/$TEST_LOCATION|$TESTFOLDER|g" cypress.json

    printf "\nCypress config file cypress.json created from: $CONFIG_FILE\n"

    # create folders if not exists
    mkdir -p cypress/integration/job1 cypress/integration/job2

    # Enable below if you choose to go with "make" above in the testing initialization
    # this replaces the place holders in the Makefile and you have to make sure all needed
    # paths are avaible there for the testing

    #sed -i "s|SPEC_FILE|"\"$TESTFOLDER/*\""|" Makefile

    # setting symlinks per file in job1/2 folders
    # folders are not used here for few reasons
    # 1. setting the env for will go back to the base repo who calls the automation
    # 2. would need to use job1/job2 folders as integration directories in cypress.json
    # 3. can't devide folders evenly to job1/2. so, the timing will be way different

    # going to exclude the failed jobs for 99sg for testing
    # exclude_<test_location>.txt has cases failed completely and it is manually created from a previous run
    # testers will have to remove a case from there to enable testing
    # only for 99sg now, would need to create the files for other locations if there's a need.
    # otherwise, the testing will be for all the files

    # enable below if all cases are good to be tested

    # find cypress/integration/$TEST_LOCATION/ -type f -name *.js | while read paths;
    find cypress/integration/$TEST_LOCATION/ -type f -name *.js > include_$TEST_LOCATION.txt

    # and disable next few lines till "do"
    if [ -f "exclude_$TEST_LOCATION.txt" ]; then
        grep -F -x -v -f exclude_$TEST_LOCATION.txt include_$TEST_LOCATION.txt > diff_$TEST_LOCATION.txt
    else
        cat include_$TEST_LOCATION.txt > diff_$TEST_LOCATION.txt
    fi

    cat diff_$TEST_LOCATION.txt | while read paths;
    do
        FILE_NAME=${paths##*/}
        DIRTY_DIR="$(dirname "${paths}")"
        DIR="$(echo "${DIRTY_DIR#cypress/integration/$TEST_LOCATION/}" | sed -e "s|[/ ]|_|g")"

        # limiting the testing to number of cases set in Travis env, to make cycle time faster
        # LIMIT_TESTS is set in the Travis repo settings as variables available to all branches
        # however, setting this to a values except the default 0 will affect all test branches using
        # this travis script for testing

        # YOU HAVE BEEN WARNED!

        if [ -z $LIMIT_TESTS ]; then
            LIMIT_TESTS=0
        fi

        if [ $LIMIT_TESTS -eq 0 ] || [ $((PATHCOUNTER)) -lt $LIMIT_TESTS ]; then
            if [ $((PATHCOUNTER % 2 )) -eq 0 ]; then
              echo "ln -s $(pwd)/\"$paths\" \"cypress/integration/job1/${DIR}_${FILE_NAME}\"" | bash
            else
              echo "ln -s $(pwd)/\"$paths\" \"cypress/integration/job2/${DIR}_${FILE_NAME}\"" | bash
            fi
        fi

        PATHCOUNTER=$((PATHCOUNTER + 1))
    done

    printf "\nSymlinks created ***"
}

if [[ -z $REMOTE_COMMIT_MSG ]]; then
    REMOTE_COMMIT_MSG=$TRAVIS_COMMIT_MESSAGE
fi

if [[ $TRAVIS_COMMIT_MESSAGE == *"test_custom"* ]]; then
    printf "***\nCalling for a custom test\n***"
    COMMAND=`git log -1 --pretty=%B | grep -E '^COMMAND: ' | sed 's/COMMAND: //g'`
    ./node_modules/.bin/cypress $COMMAND
else
    gcloud_auth
    add_symlinks
    cypress_run
fi
