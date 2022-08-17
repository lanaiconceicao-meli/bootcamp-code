const React = require('react');

const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');

const AddFilter = require('../../components/ProductComponent/AddFilter');
const FilterList = require('../../components/ProductComponent/FilterList');

function ProductView(props) {
  const { products, i18n, imagesPrefix, translations } = props;
  const preloadedState = {
    products,
    i18n,
    imagesPrefix,
    translations,
  };

  return (
    <>
      <Style href="products.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Product page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="products.js" />
      <AddFilter i18n={i18n} products={products} />
      <FilterList i18n={i18n} />
    </>
  );
}

module.exports = injectI18n(ProductView);
