const { SELENOID_IP } = process.env;
const hostname = SELENOID_IP || 'localhost';
const seleniumPath = SELENOID_IP ? '/wd/hub' : '/';
const services = SELENOID_IP ? [] : ['chromedriver'];

console.log(`[WDIO] SELENOID HOST ${hostname}`);

// @see https://webdriver.io/docs/options.html for available webdriver configuration options
exports.config = {
  runner: 'local',
  deprecationWarnings: true,
  screenshotPath: './tests/e2e/errorshots/',
  baseUrl: 'https://localhost.com.ar:8443',
  waitforTimeout: 5000,
  connectionRetryTimeout: 30000,
  connectionRetryCount: 3,
  hostname,
  port: 4444,
  path: seleniumPath,
  services,
  chromeDriverArgs: [
    '--port=4444',
  ],
  reporters: ['spec'],
  reporterOptions: {
    outputDir: './tests/e2e/reports/',
  },
  logLevel: 'silent', // trace | debug | info | warn | error | silent
  bail: 0,

  framework: 'cucumber',
  // @see https://github.com/webdriverio-boneyard/wdio-cucumber-framework#cucumberopts-options for all available options
  cucumberOpts: {
    require: ['./tests/e2e/features/support/**/*.js', './tests/e2e/features/step_definitions/**/*.js'],
    failAmbiguousDefinitions: true,
    failFast: false,
    snippets: true,
    source: true,
    strict: true,
    tagsInTitle: true,
    timeout: 20000,
    ignoreUndefinedDefinitions: false,
  },
};
