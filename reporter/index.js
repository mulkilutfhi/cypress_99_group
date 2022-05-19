"use strict";

// Example run
// TESTRAIL_BASE_URL="https://99group.testrail.com" TESTRAIL_USERNAME="setyo@99.co" TESTRAIL_PASSWORD="KfBCRJNeNA62wZZYIcVj-rfBCx3Fj462OREwoS6Ad" npm run report-tekton -- -r 289 -f cypress/results/mochawesome.json

const {runId, cypressReportFile} = require("./yargs");
const {testrail, mochaawesome} = require("./config.js");

// Based on this spec
// https://www.gurock.com/testrail/docs/api/reference/results#addresultsforcases
function switchToTestrailStatus(status) {
  if (status == "passed") {
    return 1;
  }
  
  return 5;
}

function transformToTestRailResult(caseResult) {
  return {
    case_id: caseResult.caseId,
    status_id: switchToTestrailStatus(caseResult.status),
    comment: "Cypress code:\n" + caseResult.code
  };
}

async function run() {
  try {
    console.log('Running TestRail reporter');

    // Retrieve data from Testrail and Mochaawesome report
    // ======================================================
    const report = mochaawesome.getCaseResultFromReport(cypressReportFile);
    // console.log(report);
    const resp = await testrail.getTests(runId);
    const trCaseIds = testrail.getCaseIdsFromRunId(resp.data);
    console.log('Total caseIds on the Test Run: ' + trCaseIds.length);
    // console.log(trCaseIds);

    // Match report with testrail
    // ======================================================
    let existCaseIds = [];
    report.forEach(item => {
      // console.log(trCaseIds.find(el => item.caseId == el));
      if (trCaseIds.find(el => item.caseId == el) !== undefined) {
        existCaseIds = existCaseIds.concat([transformToTestRailResult(item)]);
      }
    });
    console.log('Total caseIds found in Cypress result: ' + existCaseIds.length);
    // console.log(existCaseIds);

    if (existCaseIds.length <= 0) {
      console.error('No CaseID(s) on Cypress result is matched with CaseIds on Testrail');
      console.error('Nothing to be reported');
      process.exit(2);
    }
    // Send report to testrail
    // ======================================================
    await testrail.addTestResultsByCaseIds(runId, existCaseIds);
  } catch (error) {
    console.error("Error: HTTP " + error.response.status + " " + error.response.statusText);
    process.exit(1);
  }
};

run()
