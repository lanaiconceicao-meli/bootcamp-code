const React = require('react');

const { useState } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const ProductCard = require('../../components/ProductCard');

function ProductView(props) {
  // eslint-disable-next-line react/prop-types
  const { products, i18n, imagesPrefix, translations } = props;
  const preloadedState = {
    products,
    i18n,
    imagesPrefix,
    translations,
  };
  const [prod, setProd] = useState(products);

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

      <label htmlFor="search">{i18n.gettext('Search here ')}
        <input id="search" type="text" />
      </label>

      <main>
        {prod ? prod.map(({ title, price, thumbnail, permalink }) => (
          <>
            <ProductCard nome={title} srcImage={thumbnail} altImage={title} price={price} permalink={permalink} />
          </>
        ))
          : ''}
      </main>

    </>
  );
}

module.exports = injectI18n(ProductView);
