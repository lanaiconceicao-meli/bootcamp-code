const React = require('react');

const { useState } = React;
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
  const [addFilterList, setAddFilterList] = useState([]);

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
      <AddFilter
        i18n={i18n}
        addFilterList={addFilterList}
        setAddFilterList={setAddFilterList}
      />
      <FilterList i18n={i18n} />
      {
        addFilterList.length > 0
          ? addFilterList.map((filter) => (
            <p>{`Preço mínimo: ${filter.priceRangeMin} e preço máximo: ${filter.priceRangeMax}`}</p>
          ))
          : <p>{i18n.gettext('Nenhum filtro criado')}</p>
      }
    </>
  );
}

module.exports = injectI18n(ProductView);
