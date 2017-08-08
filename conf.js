 // An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['specs/sample_spec.js'],
  specs: ['specs/*_spec.js'],
  helpers: ["../node_modules/jasmine-expect/index.js"],
  stopSpecOnExpectationFailure: false,
  random: false,

  suites: {
    test: 'specs/sample_spec.js',
    login: 'specs/login_spec.js',
    form: 'specs/form_spec.js',
    reg: 'specs/*_spec.js',
  },

  onPrepare: function() {

    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({
      // setup the output path for the junit reports
      savePath: 'test-output/xml',
      consolidateAll: true,
    });
    jasmine.getEnv().addReporter(junitReporter);

    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    jasmine.getEnv().addReporter( new Jasmine2HtmlReporter({
         savePath: 'test-output/html',
         screenshotsFolder: 'screenshots',
         takeScreenshots: true,
         takeScreenshotsOnlyOnFailures: true,
         fixedScreenshotName: false,
       })
     );

    setTimeout(function() {
       browser.driver.executeScript(function() {
           return {
               width: window.screen.availWidth,
               height: window.screen.availHeight
           };
       }).then(function(result) {
           browser.driver.manage().window().setSize(result.width, result.height);
       });
   });
},

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
