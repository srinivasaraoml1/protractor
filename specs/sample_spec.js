var calculator = require('../pages/calc.js');

describe('sample test', function() {

  var page = new calculator();

  it('test_1', function() {
    //browser.driver.get('https://www.tesla.com/findus');
    browser.get('http://juliemr.github.io/protractor-demo/');
    page.iptFirst.sendKeys('3');
    page.iptSecond.sendKeys('4');
    page.btnGo.click();



    var n = element(by.xpath('/html/body/div/table/tbody/tr/td[3]'));
    n.getText();

    expect(n.getText()).toEqual('4');
  });
  });
