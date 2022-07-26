const React = require('react');
const PropTypes = require('prop-types');

const DemoComponent = ({ i18n }) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1>
        {i18n.gettext('This is a Demo component')}
      </h1>
      <p>
        <span className="demo-counter">{i18n.gettext('Clicks counter')}: { counter }</span>
        <button className="demo-button demo-button__add" onClick={() => setCounter(counter + 1)}>
          {i18n.gettext('+')}
        </button>
        <button className="demo-button demo-button__subtract" onClick={() => setCounter(counter - 1)}>
          {i18n.gettext('-')}
        </button>
      </p>
    </>
  );
};

DemoComponent.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
};

/**
 * Expose Something with i18n injection
 */
module.exports = DemoComponent;
