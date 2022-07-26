const merge = require('deepmerge');
const wdioConfig = require('./wdio.conf.js');

const chromeArgs = [
  '--no-sandbox',
  '--disable-gpu',
  '--ignore-certificate-errors',
];

exports.config = merge(wdioConfig.config, {
  specs: ['./tests/e2e/features/**/*.feature'],
  cucumberOpts: {
    tagExpression: '@mobile',
  },
  capabilities: [{
    maxInstances: 8,
    browserName: 'chrome',
    'goog:chromeOptions': {
      mobileEmulation: {
        deviceName: 'Galaxy S5',
      },
      args: chromeArgs,
      w3c: true,
    },
  }],
}, { clone: false });
