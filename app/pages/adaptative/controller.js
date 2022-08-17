const React = require('react');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const View = require('./view');
const ProductService = require('../../../services/ProductService');

exports.fetchProduct = function fetchProduct(req, res, next) {
  ProductService.getProducts(req.platform.siteId, req.query.q = 'cafe', req.query.limit = '10')
    .then((data) => {
      res.locals.products = data;
      next();
    })
    .catch(err => next(err));
};

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
    products: res.locals.products,
    site: res.locals.site,
    siteId: req.platform.siteId,
    lowEnd: req.device.lowEnd,
    deviceType: req.device,
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
