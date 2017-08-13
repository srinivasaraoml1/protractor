//var sample = require(protractor.basePath + '/TestBed/phplogin.js');
var sample = require(protractor.basePath + '/Pages/phptravels/phplogin.js');

describe('main', function() {

var EC;
var page = sample;
var time_out = 1000;

beforeEach(function() {
    page = sample;
    EC = protractor.ExpectedConditions;
});

it('login1', function() {
    browser.get(browser.params.phptravels.baseurl);
    page.btnMyAccount.click();
    page.btnLogin.click();
});

});
