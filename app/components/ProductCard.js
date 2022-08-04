const React = require('react');
const Image = require('nordic/image');

const ProductCard = ({ nome, srcImage, altImage, price }) => (
  <>
    <p>{nome}</p>
    <Image src={srcImage} alt={altImage} />
    <p>R$ {price}</p>
  </>
);

module.exports = ProductCard;
