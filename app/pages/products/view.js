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
  const { products, i18n, imagesPrefix, translations } = props;
  const preloadedState = {
    products,
    i18n,
    imagesPrefix,
    translations,
  };

  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const apiResponse = await restclient.get('/products?q=chinelo&limit=5');
    setData((prevState) => [...prevState, ...apiResponse.data]);
  };


  useEffect(() => {
    fetchProducts();
  }, []);

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
      <ShoppingCart product={data} />
    </>
  );
}

ProductView.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  translations: PropTypes.shape({}),
  imagesPrefix: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

module.exports = injectI18n(ProductView);
