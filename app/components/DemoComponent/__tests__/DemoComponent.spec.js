/**
 * @jest-environment jsdom
 */
const React = require('react');
const { render, cleanup, fireEvent } = require('@testing-library/react');
const DemoComponent = require('..');

describe('DemoComponent', () => {
  afterEach(cleanup);

  const i18n = { gettext: text => text };

  test('should render correctly', () => {
    const { asFragment } = render(<DemoComponent i18n={i18n} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should increment counter', () => {
    const { getByText } = render(<DemoComponent i18n={i18n} />);

    fireEvent.click(getByText('+'));

    expect(getByText(/counter/)).toHaveTextContent('Clicks counter: 1');
  });

  test('should decrement counter', () => {
    const { getByText } = render(<DemoComponent i18n={i18n} />);

    fireEvent.click(getByText('-'));

    expect(getByText(/counter/)).toHaveTextContent('Clicks counter: -1');
  });
});
