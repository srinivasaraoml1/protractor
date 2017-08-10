var page = require(protractor.basePath + '/pages/phptravels/phplogin.js');

describe('blah', function() {
var EC;
var time_out = 1000;
EC = protractor.ExpectedConditions;

beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get(browser.params.phptravels.baseurl);
});

it('load', function() {
    
});
});