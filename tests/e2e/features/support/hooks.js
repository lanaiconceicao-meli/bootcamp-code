/**
 * Centralized place for Cucumber hooks, a pieces of code that can run at various points in tests execution cycle
 * @see https://cucumber.io/docs/cucumber/api/#hooks for more info
 */

const { Before } = require('@cucumber/cucumber');

/**
 * A hook that make possible to skip scenario in browsers different to Chrome by marking it with @OnlyChrome tag
 */
Before({ tags: '@OnlyChrome' }, () => {
  if (browser.capabilities.browserName !== 'chrome') {
    return 'skipped';
  }

  return undefined;
});
