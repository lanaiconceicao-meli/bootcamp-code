const React = require('react');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const config = require('nordic/config');
const View = require('./view');


exports.render = function render(req, res) {
  const imagesPrefix = config.assets.prefix;
  const Profile = props => (
    <I18nProvider i18n={req.i18n}>
      <ImageProvider prefix={imagesPrefix}>
        <View {...props} />
      </ImageProvider>
    </I18nProvider>
  );
  res.render(Profile, {
    translations: req.translations,
    imagesPrefix,
  });
};
