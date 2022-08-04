const React = require('react');
const ImageProvider = require('nordic/image/provider');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ProductService = require('../../../services/ProductService');

const View = require('./view');

exports.fetchProduct = function fetchProduct(req, res, next) {
  ProductService.getProducts(req.platform.siteId, req.query.q = 'cafe', req.query.limit = '10')
    .then((data) => {
      res.locals.products = data;
      next();
    })
    .catch(err => next(err));
};

exports.render = (req, res) => {
  const imagesPrefix = config.assets.prefix;

  const ProductView = props => (
    <I18nProvider i18n={req.i18n}>
      <ImageProvider prefix={imagesPrefix}>
        <View {...props} />
      </ImageProvider>
    </I18nProvider>
  );

  res.render(ProductView, {
    products: res.locals.products,
    imagesPrefix,
    translations: req.translations,
  }, {
    navigationOptions: {
      type: 'full',
    },
  });
};
