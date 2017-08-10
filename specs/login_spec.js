var Login_Module = require('../pages/login.js');

describe('login test', function() {
  // mandatory objects for usage of snippets
  var time_out = 10000;
  var EC;
  var page;

  beforeEach(function() {
    browser.get(browser.params.login.baseurl);
    page = new Login_Module();
    // mandatory to initiate for usage of snippets
    EC = protractor.ExpectedConditions;
  });

  it('login_positive', function() {
    page.iptUsername.sendKeys('angular');
    page.iptPassword.sendKeys('password');
    page.iptDescription.sendKeys('This is a positive scenario');
    page.btnLogin.click();
    browser.wait(EC.urlIs('http://www.way2automation.com/angularjs-protractor/registeration/#/'), time_out);
    browser.wait(EC.visibilityOf(page.hlLogout), time_out);
    expect(page.hlLogout.isPresent()).toBe(true);
    page.hlLogout.click();
  });

  it('login_negative', function() {
    page.iptUsername.sendKeys('username');
    page.iptPassword.sendKeys('passcode');
    page.iptDescription.sendKeys('This is a negative scenario');
    page.btnLogin.click();
    expect(page.hlLogout.isPresent()).toBe(false);
  });
});
