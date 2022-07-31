// require('../pages/products/styles.scss');

const React = require('react');
const hydrate = require('nordic/hydrate');
const ProductView = require('../pages/products/view');

const {
  products,
} = window.__PRELOADED_STATE__;

hydrate(<ProductView products={products} />, document.getElementById('root-app'));
