var sample_nam = require(protractor.basePath + '/pages/phptravels/phplogin.js');

describe('blah', function() {
  var EC;
  var time_out = 1000;
  EC = protractor.ExpectedConditions;

  beforeEach(function() {
    browser.get('');
    page = sample_name;

  });

  it('should blah', function() {
      browser.get('http://www.phptravels.net/');
  });
});
