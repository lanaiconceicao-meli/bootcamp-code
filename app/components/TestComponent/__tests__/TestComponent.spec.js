const React = require('react');
const { render } = require('@testing-library/react');
const TestComponent = require('../TestComponent');

describe('snapshot test', () => {
  const i18n = { gettext: text => text };
  test('TestComponent snapshot', () => {
    const { asFragment } = render(<TestComponent isArray={[]} i18n={i18n} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('TestComponent with array snapshot', () => {
    const { asFragment } = render(<TestComponent isArray={['agua', 'terra', 'ar', 'fogo']} i18n={i18n} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
