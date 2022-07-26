const merge = require ('deepmerge');
const wdioConfig = require('./wdio.conf.js');

const chromeArgs = [
  '--no-sandbox',
  '--disable-gpu',
  '--ignore-certificate-errors',
  '--window-size=1280,800',
];

exports.config = merge(wdioConfig.config, {
  specs: ['./tests/e2e/features/**/*.feature'],
  cucumberOpts: {
    tagExpression: '@desktop',
  },
  capabilities: [{
    maxInstances: 8,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: chromeArgs,
      w3c: true,
    },
  }],
});
