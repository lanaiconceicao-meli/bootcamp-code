const React = require('react');

const Image = require('nordic/image');

const ProductCard = ({ nome, srcImage, altImage, price }) => (
  <>
    <article>
      <h2>{nome}</h2>
      <Image src={srcImage} alt={`Imagem de ${altImage}`} className="product_img" />
      <p>R$ {price}</p>
    </article>
  </>
);

module.exports = ProductCard;
