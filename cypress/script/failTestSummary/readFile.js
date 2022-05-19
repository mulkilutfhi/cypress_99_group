'use strict';
var fs = require('fs');

const readFiles = (dirname, onFileContent, onError) => {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function (filename) {
            if (filename.indexOf('json') === -1) {
                return;
            }
            ++filesRead;
            fs.readFile(dirname + filename, 'utf-8', function (err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                onFileContent(filename, JSON.parse(content));
            });
        });
    });
};

const stats = {};
let filesRead = 0;

readFiles(
    './',
    function (filename, obj) {
        let id = 0;
        obj.results.forEach((r) =>
            r.suites[0].tests.forEach(
                (t) =>
                    t.fail && console.log(`failed test #${id++}: `, t.fullTitle)
            )
        );
    },
    function (err) {
        throw err;
    }
);
