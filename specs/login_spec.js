var Login_Module = require('../pages/login.js');

describe('login test', function() {
  var page;
  var wait_tool;
  beforeEach(function() {
    wait_tool = protractor.ExpectedConditions;
    page = new Login_Module();
    browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
  });

  it('login_positive', function() {
    page.iptUsername.sendKeys('angular');
    page.iptPassword.sendKeys('password');
    page.iptDescription.sendKeys('This is a sample description for the user we are trying to login using protractor as a positive scenario');
    page.btnLogin.click();
    //browser.wait(wait_tool.presenceOf(page.hlLogout), 5000);
  });

  xit('login_negative', function() {
    page.iptUsername.sendKeys('username');
    page.iptPassword.sendKeys('passcode');
    page.iptDescription.sendKeys('This is a sample description for the user we are trying to login using protractor as a negative scenario');
    page.btnLogin.click();
    //browser.wait(wait_tool.presenceOf(page.hlLogout), 5000);
  });
});
