![Cypress Logo](img/Cypress_logo2.png "Cypress Logo")
# 99 Automation Cypress

This repo is created to provide automated E2E testing for the testing environment of 99.co app.

The end goal of this repo is to run automated end-to-end testing on critical flows within 99.co.

## Requirements

- [NodeJs](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)


## Directory Structure

We follow the standard Cypress structure to build this repo. If anyone feels the current structure could be better, feel free to suggest improvements to the 99.co QA team.

```
├── cypress/
│   ├── config/
│   |   └── ... < market folder >
│   |        └── ... < environtment config *.json >
│   ├── fixtures/
│   ├── integration/
│   |   |    └── ... < market folder >
│   |   |        └── ... < Test cases *.js >
│   ├── plugins/
│   │   └── index.js
│   └── support/
│       ├── commands.js
│       └── index.js
├── img
├── .gitignore
├── cypress.json
├── Makefile
├── package-lock.json
├── package.json
└── README.md
```

## How to start the installation

1. Install [NodeJs](https://nodejs.org/en/download/) & [npm](https://www.npmjs.com/get-npm) if you do not have them.
2. Clone the repo into your intended directory.
3. From within the `99-automation-cypress` directory, run the command
   ```
   npm install
   ```

## How to use the Cypress test runner

All of the following information is documented in [Cypress/Core Concepts - The Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview).

1. Cypress runs tests in a unique interactive runner that allows you to see commands as they execute while also viewing the application under test.
![Cypress Test Runner](img/Cypress_test_runner.png "Test Runner GUI")

2. To open the test runner, run the following command in your directory:
   ```
   C:\GitHub\99-automation-cypress> npx cypress open
   ```
## How to run in different environments

1. In 99.co, we have 3 different types of environments: 
   * Prod: www.99.co
   * Staging: dw.99.co & staging.99.co 
   * Dev: atdw.99.co, badw.99.co, kekw.99.co, lulw.99.co, mpdw.99.co

2. Use the one of the commands below if you want to run the Cypress files in the environment of your choosing:
   ```
   npx cypress run --env configFile=badw
   ```
   ```
   npx cypress open --env configFile=atdw 
   ```
   where configFile should be the name of the env you are targeting. Refer to `cypress\config\99sg` folder for the possible choices. 

3. Running 
   ```
   npx cypress (run|open)
   ```
   will default to `dw.99.co`.

## How to run test cases headlessly with Cypress

By default, Cypress will run tests in Electron headlessly, i.e. it will run in the command line. All of the following information is documented in [Cypress/Guides - Command Line](https://docs.cypress.io/guides/guides/command-line.html#Installation).

`(Note: Using double quotes is strongly recommended)`

1. Run tests specifying a single test file to run instead of all tests.
   ```
   C:\GitHub\99-automation-cypress> npx cypress run --spec "cypress\integration\99sg\Home\C106_TextOnHomePageLoadsSuccessfully.js"
   ```
   ![Single spec run](img/Cypress_single_spec.png "Single spec")

2. Run tests within the folder matching the glob.
   ```
   C:\GitHub\99-automation-cypress> npx cypress run --spec "cypress/integration/99sg/**"
   ```
   ![Folder spec run](img/Cypress_folder_spec.png "Folder spec")

## How to run the test cases with Makefile

1. For Linux and MacOS, run the following command format in the directory:
`make {run|open}-{prod|stg}-{99sg|99id|rumah123}`
   ```
   ~ GitHub\99-automation-cypress$ make run stg 99sg
   ```

2. For Windows, install the [make command](https://stat545.com/make-windows.html) first. Likewise, you can execute the following command:
   ```
   C:\GitHub\99-automation-cypress> node_modules\.bin\cypress open --config-file cypress/config/99sg/staging.json
   ```

3. To run a specific test case, we can use `grep` through env, similar to this :
   ```
   C:\GitHub\99-automation-cypress> node_modules\.bin\cypress open --config-file cypress/config/99sg/staging.json --env grep=@seo
   ```
   * The command above will only run the test case with `@seo`

## How to run the test cases with Docker & Docker Compose

1. Ensure you have installed `Docker` and `docker-compose`

2. Run below:
   ```
   docker-compose run --rm automation run --config-file cypress/config/99id/staging.json
   ```

## Test case spec naming conventions

![TestRail repo](img/TestRail_repo.png "TestRail repo")

Cypress integration test should be based on TestRail, so the test case directory structure and file naming convention inside Cypress should mimic TestRail structure as close as possible.

TestRail's test case is grouped inside directories (folders) and sub-directories. This should translate to directories and files inside the `/cypress/integration/{entity}` directory. While the file and directory name format on TestRail are open, the one on Cypress should be using PascalCase. Opt for the most simple option in complexity. On a test case with both sub test case and test, reuse the directory name as the file name.

``` .js
// Naming convention example
// "Web/Search Result Page (SRP)" → "cypress/integration/rumah123/SearchResultPage/SearchResultPage.js"
// "Web/Search Result Page (SRP)/SEO" → "cypress/integration/rumah123/SearchResultPage/SEO.js"
```

A single integration file should have one root `describe` statement which "describe" the test case. The `it` statement should represent a single test e.g "C770 H2 contain list of agent card". Similar to the implementation on TestRail, a single `describe` statement may have multiple `it` statement.

Following the DRY principle, test steps that are repeated on the test should be extracted and used as a`Cypress Commands`. To make things clear and more readable, include the steps on TestRail as an inline comments.

Although the goal is to mimic the test on TestRail, integration test on Cypress can be modified as needed, especially on the test preconditions and the assertions.


``` .js
// on cypress/integration/rumah123/SearchResultPage/SEO.js

describe ('Web - Search Result Page - SEO', ()=>{ // Describe one test case per file

  it ('C37481 As a Consumer (Buyer), I want to click Download Brochure button (Unregistered Buyer)', function () {
    // Given I am on Search Page
    // And I click New Property Listing
    // And I should see Detail Property New Launch Page
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/bondowoso/house-hills/nps1566/')
    
    // When I click the Download Brochure button
    cy.clickDownloadBrochureR123()
    
    // Then I should see The Enquiry form
    cy.isDialogInquiryFormExist()
  })
  
  it ('C37482 As a Consumer (Buyer), I want to click Download Brochure button (Registered Buyer)', function () {
    // Given I am on Search Page
    // And I click New Property Listing
    // And I should see Detail Property New Launch Page
    cy.viewport('macbook-15').visit('/perumahan-baru/properti/bondowoso/house-hills/nps1566/')
    
    // Registerd buyer
    cy.doLoginR123()
    
    // When I click the Download Brochure button
    cy.clickDownloadBrochureR123()
    
    // Then I should see The Enquiry form
    cy.isDialogInquiryFormExist()
  })
  })

```

Refer to Cypress Documentation at https://docs.cypress.io/api/table-of-contents for more details on Cypress. 

## Cypress Commands

Cypress comes with its own API for creating custom commands and overwriting existing commands. These commands are separated for each entity and located in the `/cypress/support/{entity}` directory. Inside the `{entity}` directory, they will be divided into directories (one-level) based on the feature.


Just like on test, use PascalCase for the directory name e.g `Inquiry/`. Use Commands_<FeatureName>.js as the file name e.g `Login/Commands_Login.js`.
Append <_SubFeature> to the file name for sub features e.g `Inquiry/Commands_Inquiry_Dialog.js`.

As for the command name itself, use camelCase and end it with the entitiy code in uppercase e.g `isDialogInquiryExistR123`.

``` .js
Cypress.Commands.add("isDialogInquiryFormExistR123", () => {
  /**
   * Check Inquiry Dialog Is Exist
   */
  cy.isInquiryBottomPageExist();

  const dialog = cy.get(".ui-property-page__listing-inquiry");
  const messageElement = dialog.get(".ui-atomic-textarea__input");
  const nameElement = dialog.get(".ui-atomic-edit-text__input").eq(0);
  const emailElement = dialog.get(".ui-atomic-edit-text__input").eq(1);
  const phoneElement = dialog.get(".ui-atomic-edit-text__input").eq(2);

  messageElement.should("exist");
  nameElement.should("exist");
  emailElement.should("exist");
  phoneElement.should("exist");
});

```

## How to summarize failed tests with readFile:

1. after npx cypress run in terminal, many mochawesome test results will be created

    ```
    npx cypress run --spec "cypress/integration/99sg/\*_/_.js" --env grepTags=-@testFail
    ```

2. combine all the test results into 1, with mochawesome-merge

    ```
    npx mochawesome-merge cypress/results/\*.json > cypress/script/failTestSummary/output.json
    ```

3. navigate to `cypress/script/failTestSummary directory`

4. use node to run the file `-- node readFile`


## How to use tags to test cases:

1. adding tags to test cases

``` .js
// Adding tags example
// describe('Chat Enquiry', { tags: '@Enquiry' }, () => {
// describe('Main Filter', { tags: ['@SRP', '@Filter'] }, () => {
```
eg.`@Enquiry`, Enquiry is the Feature field inside TestRail. Currently, use below tags in test cases

@Authentication
@HomePage
@LandSales
@Enquiry
@LDP
@MustSeeConversion
@ListingCreation
@NewLaunch
@PDP
@SEO
@SRP
@Filter
@Sort
@Shortlist
@Purchase

2. Run below:
   ```
   npx cypress run --env grepTags=@Enquiry
   npx cypress run --env grepTags=@SRP+@Filter
   ```

Refer to https://github.com/cypress-io/cypress-grep for more details. 



## How to generate HTML report file:

1. combine multiple mochawesome.json to one mochawesome.json, with mochawesome-merge

    ```
    npx mochawesome-merge "cypress/results/*.json" > cypress/mochareports/report.json
    ```

2. generate a combined HTML report 

    ```
    npx marge cypress\mochareports\report.json -f report -o mochareports	
    ```

