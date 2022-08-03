const React = require('react');

const { useState } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const restclient = require('nordic/restclient')({
  baseURL: '/api',
  timeout: 5000,
});
const Image = require('nordic/image');
const { injectI18n } = require('nordic/i18n');

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

  const fetchNewProduct = () => {
    // aqui chamo a minha API e não a API do Meli
    restclient.get('/products?q=caneta&limit=10')
      .then(response => (setProd(response.data)));
  };

  const Dog = () => {
    const [latir, setLatir] = useState('');
    return (
      <div>
        <p>{latir}</p>
        <button
          onClick={() => { setLatir(latir+' auau'); }}
        >
          {i18n.gettext('Sou cachorrona')}
        </button>
      </div>
    );
  };
  return (
    <div>
      {/* <h1>{ title }</h1> */}
      <Style href="products.css" />
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Product page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="products.js" />

      <Image className="demo-images__img" src="demo-image.jpg" alt="Mural painting" />

      <h2>
        {i18n.gettext('Product details:')}
      </h2>

      <ul>
        {prod ? prod.map(({ id, title }) => <li key={id}>{title}</li>) : ''}
      </ul>
      <button onClick={fetchNewProduct}>{i18n.gettext('Alterar produto')}</button>
      <Dog />
    </div>
  );
}

// testar button: apertar e fazer nova requisição

module.exports = injectI18n(ProductView);
