const React = require('react');
const I18nProvider = require('nordic/i18n/I18nProvider');
const View = require('./view');

exports.render = function render(req, res) {
  const Forms = props => (
    <I18nProvider i18n={req.i18n}>
      <View {...props} />
    </I18nProvider>
  );
  res.render(Forms, { translations: req.translations });
};
