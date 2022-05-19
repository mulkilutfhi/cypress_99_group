"use strict";

const yargs = require('yargs');

const argv = yargs
    .option('run-id', {
        alias: 'r',
        description: 'Testrail Run ID',
        type: 'number',
    })
    .option('cypress-report', {
        alias: 'f',
        description: 'Mochaawesome JSON report file',
        type: 'string',
    })
    .demandOption(['run-id', 'cypress-report'])
    .help()
    .alias('help', 'h')
    .argv;

module.exports = {
    runId: argv.runId,
    cypressReportFile: argv['cypress-report']
};