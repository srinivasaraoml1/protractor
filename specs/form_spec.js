var multi_form = require('../pages/multiform.js');

describe('form', function() {

  var EC;
  var page = multi_form;
  var time_out = 10000;

  beforeEach(function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile')
    EC = protractor.ExpectedConditions;
    //page = new multi_form();
  });

  it('test1', function() {
      browser.wait(EC.visibilityOf(page.iptName), time_out);
      page.iptName.sendKeys('Sandy');
      page.iptEmail.sendKeys('Sandy@gmail.com');
      page.btnNextSection.click();
      browser.wait(EC.visibilityOf(page.btnNextSection), time_out);
      page.getElement('I like PS4').click();
  });
});
