var Login_Module = require('../pages/login.js');

describe('login test', function() {

  # mandatory objects for usage of snippets
  var time_out = 10000;
  var EC;
  var page;



  beforeEach(function() {
    page = new Login_Module();
    # mandatory to initiate for usage of snippets
    EC = protractor.ExpectedConditions;
    browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
  });

  it('login_positive', function() {
    page.iptUsername.sendKeys('angular');
    page.iptPassword.sendKeys('password');
    page.iptDescription.sendKeys('This is a positive scenario');
    page.btnLogin.click();
    browser.wait(EC.presenceOf(page.hlLogout), time_out);
    page.hlLogout.click();
  });

  it('login_negative', function() {
    page.iptUsername.sendKeys('username');
    page.iptPassword.sendKeys('passcode');
    page.iptDescription.sendKeys('This is a negative scenario');
    page.btnLogin.click();
    browser.sleep(5000);
    page.hlLogout.click();
  });
});
