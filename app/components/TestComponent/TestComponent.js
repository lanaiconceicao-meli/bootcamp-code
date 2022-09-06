const React = require('react');

const ProfileComponent = ({ isArray, i18n }) => (
  <>
    {
      isArray.length > 0
        ? isArray.map((item) => (
          <h4>{item}</h4>
        ))
        : (<h1>{i18n.gettext('não ex')}</h1>)
    }
  </>
);
module.exports = ProfileComponent;
