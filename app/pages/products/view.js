/* eslint-disable react/prop-types */
const React = require('react');

const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');

const ProductCard = require('../../components/ProductComponent/ProductCard');

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

      {/* {products.map((product) => (
        <ProductCard
          nome={product.title}
          srcImage={product.thumbnail}
          altImage={product.title}
          price={product.price}
        />
      ))} */}
      <ProductCard
        data={products}
      />
    </>
  );
}

module.exports = injectI18n(ProductView);
