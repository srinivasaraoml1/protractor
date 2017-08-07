module.exports = function(){
  this.iptUsername = element(by.model('Auth.user.name'));
  this.iptPassword = element(by.model('Auth.user.password'));
  this.iptDescription = element(by.model('model[options.key]'));
  this.btnLogin = element(by.className('btn btn-danger'));

  this.hlLogout = element(by.xpath('/html/body/div[3]/div/div/div/form/div[3]/button'));
}
