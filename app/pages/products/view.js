const React = require('react');

const PropTypes = require('prop-types');

const restclient = require('nordic/restclient')({
  baseURL: '/api',
});

const { useEffect, useState } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const ProductCard = require('../../components/ProductComponent/ProductCard');
const ShoppingCart = require('../../components/ProductComponent/ShoppingCart');


function ProductView(props) {
  const { products, i18n, imagesPrefix, translations, limit, offset, q } = props;
  const preloadedState = {
    products,
    i18n,
    imagesPrefix,
    translations,
    limit,
    offset,
    q,
  };

  const [data, setData] = useState([]);
  const [offsetQuery, setOffsetQuery] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const fetchProducts = async () => {
    const apiResponse = await restclient.get(`/products?q=${q}&limit=${limit}&offset=${offsetQuery}`);
    setData(apiResponse.data);
    if (offsetQuery > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const nextPage = () => {
    setOffsetQuery((prevState) => Number(prevState) + 2);
    setIsDisabled(false);
  };

  const previousPage = () => {
    if (offsetQuery > 0) {
      setOffsetQuery(Number(offsetQuery) - 2);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [offsetQuery]);

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
      {/* {data?.map((item) => <p key={item.id}>{item.title}</p>)} */}
      {/* {console.log(data)} */}
      {
        data.map((product) => (<ProductCard
          products={product}
          i18n={i18n}
        />))
      }
      <button type="button" onClick={previousPage} disabled={isDisabled}>
        {i18n.gettext('Anterior')}
      </button>
      <button type="button" onClick={nextPage}>
        {i18n.gettext('Próxima')}
      </button>
    </>
  );
}

module.exports = injectI18n(ProductView);
