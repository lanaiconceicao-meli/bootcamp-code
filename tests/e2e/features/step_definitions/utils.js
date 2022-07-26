const expect = require('expect');

/**
 * Check for the existence of an element
 *
 * @param {string} selector CSS selector
 * @param {number} exactly Exact number of occurrences, optional
 */
function checkIfElementExists(selector, exactly) {
  const elements = $$(selector);
  if (exactly) {
    expect(elements.length).toBe(exactly);
  } else {
    expect(elements.length).toBeGreaterThan(0);
  }
}

/**
 * Create a new cookie with a given name and value, or update cookie's value if it is already exist
 *
 * @param {string} cookieName The name of the cookie
 * @param {string} cookieValue The value of the cookie
 */
function setCookie(cookieName, cookieValue) {
  browser.setCookies({
    name: cookieName,
    value: cookieValue,
    path: '/',
    secure: true,
  });
}

module.exports = {
  checkIfElementExists,
  setCookie,
};
