require('../pages/products/styles.scss');

const React = require('react');
const hydrate = require('nordic/hydrate');
const I18n = require('nordic/i18n');
const I18nProvider = require('nordic/i18n/I18nProvider');
const ImageProvider = require('nordic/image/provider');
const ProductView = require('../pages/products/view');

const {
  products,
  translations,
  imagesPrefix,
} = window.__PRELOADED_STATE__;

const i18n = new I18n({ translations });

hydrate(
  <I18nProvider i18n={i18n}>
    <ImageProvider prefix={imagesPrefix}>
      <ProductView products={products} />
    </ImageProvider>
  </I18nProvider>,
  document.getElementById('root-app'),
);
