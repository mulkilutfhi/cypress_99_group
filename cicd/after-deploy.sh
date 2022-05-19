#!/bin/bash

C='\033[1;33m'
NC='\033[0m' # No Color
echo -e "Deployed to:"
echo -e "${C}https://s3-ap-southeast-1.amazonaws.com/cypress.99iddev.net/${TRAVIS_REPO_SLUG}/${TRAVIS_COMMIT}-${TRAVIS_BUILD_NUMBER}/cypress-mochawesome.html\n${NC}"
