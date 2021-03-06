'use strict';

var expect = require('chai').expect,
    path = require('path'),
    cucumber_junit_vsts = require('../lib/cucumber_junit_vsts');

function loadFile(filename) {
    return cucumber_junit_vsts.loadFile(path.join(__dirname, '/mocks/' + filename));
}

describe('#cucumber_junit_vsts', function() {
    it('generated XML match with expectation', function() {
        var jsonFileRaw = loadFile('normal/input.json'),
            outputXml = loadFile('normal/output.xml');
        var options = {
        };
        var generatedxml = cucumber_junit_vsts.jsonToXml(jsonFileRaw,options);
        expect(generatedxml).to.equal(outputXml, "compare generated XML with expected XML");
    });

    it('generated XML with <option.strict> match with expectation', function() {
        var jsonFileRaw = loadFile('strict/input.json'),
            outputXml = loadFile('strict/output.xml');
        var options = {
            strict: true,
        };
        var generatedxml = cucumber_junit_vsts.jsonToXml(jsonFileRaw,options);
        expect(generatedxml).to.equal(outputXml, "compare generated XML <option.strict> with expected XML");
    });

    it('empty Steps', function() {
        var jsonFileRaw = loadFile('empty_steps/input.json'),
            outputXml = loadFile('empty_steps/output.xml');
        var options = {
            strict: true,
        };
        var generatedxml = cucumber_junit_vsts.jsonToXml(jsonFileRaw,options);
        expect(generatedxml).to.equal(outputXml, "compare empty Steps");
    });

    it('empty result', function() {
        var jsonFileRaw = loadFile('empty_result/input.json'),
            outputXml = loadFile('empty_result/output.xml');
        var options = {
            strict: true,
        };
        var generatedxml = cucumber_junit_vsts.jsonToXml(jsonFileRaw,options);
        expect(generatedxml).to.equal(outputXml, "compare empty result");
    });

});