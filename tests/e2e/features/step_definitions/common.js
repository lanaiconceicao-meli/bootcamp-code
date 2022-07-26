const expect = require('expect');
const { Given, When, Then } = require('@cucumber/cucumber');
const { setCookie } = require('./utils');

Given('A page with URL {string}', function(url) {
  browser.url(url);

  /**
   * Since frontend-script is loading scripts only after onload event there is a necessity of waiting for this event
   * after every navigation.
   */
  browser.waitUntil(
    async () => {
      const state = await browser.execute(() => document.readyState);
      return state === 'complete';
    },
    {
      timeout: 5000,
      timeoutMsg: 'Page load timeout',
      interval: 100,
    },
  );
});

Given('A logged user which session names is {string} on a page with URL {string}', function(sessionName, url) {
  browser.url('/ping');
  setCookie('ssid', sessionName);
  browser.url(url);
});

Given('Page structure is loaded', function() {
  $('#root-app').waitForExist(2000);
});

When('Click on {string}', function(selector) {
  $(selector).click();
});

Then('Page should have a {string} title', function(title) {
  expect(browser.getTitle()).toBe(title);
});

Then('Ensure that {string} contains the text {string}', function(selector, expectedText) {
  expect($(selector).getText()).toBe(expectedText);
});
