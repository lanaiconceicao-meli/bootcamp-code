const React = require('react');

const Image = require('nordic/image');

const ProductCard = ({ products, i18n }) => (
  <>
    <div id="product-card">
      <h2>{products?.title}</h2>
      <Image src={products?.thumbnail} alt={`Imagem de ${products?.title}`} className="product_img" lazyload="off" />
      <p>R$ {products?.price}</p>
      {/* <label htmlFor="addCart">
        <input htmlFor="addCart" type="number" />
      </label>
      <button type="button" onClick={console.log('click')}>
        {i18n.gettext('Adicionar ao carrinho')}
      </button> */}
    </div>
  </>
);

module.exports = ProductCard;
