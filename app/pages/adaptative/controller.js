const React = require('react');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const View = require('./view');

// const { basePath } = config.ragnar;

exports.render = function render(req, res) {
  const imagesPrefix = config.assets.prefix;

  const Adaptative = props => (
    <I18nProvider i18n={req.i18n}>
      <ImageProvider prefix={imagesPrefix}>
        <View {...props} />
      </ImageProvider>
    </I18nProvider>
  );

  res.render(Adaptative, {
    // baseURL: `${basePath}demo`,
    site: res.locals.site,
    siteId: req.platform.siteId,
    lowEnd: req.device.lowEnd,
    deviceType: req.device.type,
    translations: req.translations,
    company: config.get('companyName', req.platform.id, req.platform.siteId),
    imagesPrefix,
  }, {
    layoutOptions: {
      staticMarkup: false,
    },
    navigationOptions: {
      type: 'full',
    },
  });
};
