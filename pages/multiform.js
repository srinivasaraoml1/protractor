// module.exports = function(){
//
// this.iptName = element(by.model('formData.name'));
// this.iptEmail = element(by.model('formData.email'));
// this.btnNextSection = element(by.className('btn btn-block btn-info'));
// this.getElement = function (str) {
//   var xp = ".//label[text()[contains(.,'" + str + "')]]/input";
//   return element(by.xpath(xp));
// };
// }


module.exports = {
  iptName: element(by.model('formData.name')),
  iptEmail : element(by.model('formData.email')),
  btnNextSection : element(by.className('btn btn-block btn-info')),
  getElement : function (str) {
    var xp = ".//label[text()[contains(.,'" + str + "')]]/input";
    return element(by.xpath(xp));
  }
}
