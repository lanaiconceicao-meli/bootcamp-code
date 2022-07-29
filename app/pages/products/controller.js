const React = require('react');
const ProductService = require('../../../services/ProductService');

const View = require('./view');

// exports.render = function render(req, res) {
//   const Products = props => <View {...props} />;
//   res.render(Products, {
//     title: 'Minha página com Nordic',
//   });
// };
// https://internal-api.mercadolibre.com/sites/MLB
// https://internal-api.mercadolibre.com/sites/MLB/search?q=cafe

exports.fetchProduct = function fetchProduct(req, res, next) {
  ProductService.getProducts(req.platform.siteId, req.query.q)
    .then((data) => {
      res.locals.site = data;
      next();
    })
    .catch(err => next(err));
};

exports.render = function render(req, res) {
  const Products = props => <View {...props} />;

  res.render(Products, {
    title: 'Minha página com Nordic',
    products: res.locals.site.result,
  });
};
