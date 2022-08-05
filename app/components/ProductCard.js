const PropTypes = require('prop-types');
const React = require('react');
const Image = require('nordic/image');

const ProductCard = ({ nome, srcImage, altImage, price, permalink }) => (
  <article tabIndex="0">
    <a href={permalink} ariaLabel="Abrir produto em nova aba">
      <h2>{nome}</h2>
      <Image src={srcImage} alt={`Imagem de ${altImage}`} />
      <p tabIndex="-1">R$ {price}</p>
    </a>
  </article>
);

ProductCard.propTypes = {
  altImage: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  srcImage: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
};

module.exports = ProductCard;
