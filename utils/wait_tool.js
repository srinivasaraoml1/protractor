module.exports = function(){

  var EC = protractor.ExpectedConditions;
  var wait_time = 10000;
  var object;


  browser.wait(EC.presenceOf(object), wait_time);
  


}
