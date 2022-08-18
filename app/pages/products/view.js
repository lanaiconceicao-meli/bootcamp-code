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
  const [addFilterPriceList, setAddFilterPriceList] = useState([]);
  const [addFilterCategoryList, setAddFilterCategoryList] = useState([]);

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
        setAddFilterPriceList={setAddFilterPriceList}
        setAddFilterCategoryList={setAddFilterCategoryList}
      />
      <FilterList i18n={i18n} />
      {
        addFilterPriceList.length > 0
          ? addFilterPriceList.map((filter) => (
            <p>{`Preço mínimo: ${filter.priceRangeMin} e preço máximo: ${filter.priceRangeMax}`}</p>
          ))
          : <p>{i18n.gettext('Nenhum filtro de preço criado')}</p>
      }
      {
        addFilterCategoryList.length > 0
          ? addFilterCategoryList.map((filter) => (
            <p>{`Categorias: ${filter.category}`}</p>
          ))
          : <p>{i18n.gettext('Nenhum filtro de categoria criado')}</p>
      }
    </>
  );
}

module.exports = injectI18n(ProductView);
