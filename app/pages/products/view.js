/* eslint-disable react/prop-types */
const React = require('react');

const { useState } = React;
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');

const ProductForm = require('../../components/ProductComponent/ProductForm');

function ProductView(props) {
  const { products, i18n, imagesPrefix, translations } = props;
  const preloadedState = {
    products,
    i18n,
    imagesPrefix,
    translations,
  };
  const [productList, setProductList] = useState(products);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const addProducts = (e) => {
    e.preventDefault();
    const newProduct = {
      id,
      name,
      price,
      description,
    };
    const newList = [...productList, newProduct];
    setProductList(newList);
    setId('');
    setName('');
    setPrice(0);
    setDescription('');
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

      <form>
        <Style href="products.css" />
        <p>{i18n.gettext('Todos os campos são de preenchimento obrigatório!')}</p>
        <label htmlFor="productId">{i18n.gettext('Id do produto:')}
          <input
            name="productId"
            id="productId"
            type="text"
            required
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        </label>
        <br />
        <label htmlFor="name">{i18n.gettext('Nome do produto:')}
          <input
            name="productName"
            id="name"
            type="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <br />
        <label htmlFor="price">{i18n.gettext('Preço do produto:')}
          <input
            name="productPrice"
            id="price"
            type="number"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
        <br />
        <label htmlFor="description">{i18n.gettext('Breve descrição:')}
          <input
            name="productDescription"
            id="description"
            type="textarea"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <button type="submit" onClick={addProducts}>{i18n.gettext('Enviar')}</button>
      </form>
      <br />
      <ul>
        {productList.map((product) => (
          <ProductForm
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </>
  );
}

module.exports = injectI18n(ProductView);
