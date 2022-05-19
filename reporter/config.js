"use strict";

const fs = require('fs');
const axios = require("axios");
const basePath = '/api/v2/';
const env = process.env;
const instance = axios.create({
    baseURL: env.TESTRAIL_BASE_URL || 'https://example.testrail.com',
    auth: {
        username: env.TESTRAIL_USERNAME || "",
        password: env.TESTRAIL_PASSWORD || ""
    },
});

// Read this API spec
// https://www.gurock.com/testrail/docs/api/reference/reports
const testrail = {
  getTest: function(testId) {
    const path = basePath + "get_test/" + testId;
    var options = {};
    
    return instance.get('index.php?' + path, options);
  },
  getTests: function(runId) {
    const path = basePath + "get_tests/" + runId;
    var options = {};
    
    return instance.get('index.php?' + path, options);
  },
  getCaseIdsFromRunId: function(data) {
    let caseIds = [];

    data.tests.forEach((test) => {
      caseIds = caseIds.concat(test.case_id);
    });

    return caseIds;
  },
  addTestResult: function(testId, result) {
    const path = basePath + "add_result/" + testId;
    
    return instance.post('index.php?' + path, result);
  },
  addTestResultByCaseId: function(runId, caseId, result) {
    const path = basePath + "add_result_for_case/" + runId + "/" + caseId;
    
    return instance.post('index.php?' + path, result);
  },
  addTestResultsByCaseIds: function(runId, results) {
    const path = basePath + "add_results_for_cases/" + runId;
    
    return instance.post('index.php?' + path, {
      results
    });
  }
};
const mochaawesome = {
  __pattern: /^C(\d+)\s+.*/,
  getJsonFile: function(filename) {
    let rawdata = fs.readFileSync(filename);
    return JSON.parse(rawdata);
  },
  getCaseResultFromReport: function(filename) {
    const results = this.getJsonFile(filename).results;
    let caseIds = [];

    results.forEach((spec) => {
      caseIds = caseIds.concat(this.__specReport(spec));
    });
    
    return caseIds;
  },
  __specReport: function(spec) {
    let caseIds = [];

    spec.suites.forEach((suite) => {
      caseIds = caseIds.concat(this.__suiteReport(suite));
    });

    return caseIds;
  },
  __suiteReport: function(suite) {
    let caseIds = [];

    suite.tests.forEach((_test) => {
      caseIds = caseIds.concat(this.__testReport(_test));
    });

    return caseIds;
  },
  __testReport: function(_test) {
    const match = _test.title.match(this.__pattern);
    if (match == null) {
      return [];
    }

    return [{
      caseId: parseInt(match[1]),
      status: _test.state,
      code: _test.code
    }];
  }
};

module.exports = {
    axios: instance,
    testrail,
    mochaawesome
};
