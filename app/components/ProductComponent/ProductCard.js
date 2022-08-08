const React = require('react');
const PropTypes = require('prop-types');

const { useState, useEffect } = React;
const Image = require('nordic/image');

const ProductCard = ({ nome, srcImage, altImage, price, permalink, i18n }) => {
  const [favorite, setFavorite] = useState('Produto não é favorito');
  const [textBtnFavorite, setTextBtnFavorite] = useState('Remover dos favoritos');

  // Exercício 1
  // Adicione um botão em cada card do produto com a legenda “Adicionar aos
  // favoritos”. Clicar nele adicionará o produto a uma lista de favoritos.
  const makeFavorite = () => (
    favorite === 'Produto não é favorito'
      ? setFavorite('Produto favoritado ⭐')
      : setFavorite('Produto não é favorito'));

  // Exercício 2
  // Assim que o produto for adicionado aos favoritos, o texto do botão deverá mudar
  // para “Remover dos favoritos” e deverá permitir a remoção do referido produto dos
  // favoritos. Ao fazer isso, o texto deve mudar novamente e o botão deve nos permitir
  // adicionar o produto novamente. Verifique se a lista de favoritos foi modificada
  // corretamente em cada ação do usuário por meio do console.
  useEffect(() => (
    textBtnFavorite === 'Remover dos favoritos'
      ? setTextBtnFavorite('Adicionar aos favoritos')
      : setTextBtnFavorite('Remover dos favoritos')
  ), [favorite]);
  return (
    <article tabIndex="0">
      <a href={permalink} ariaLabel="Abrir produto em nova aba">
        <h2>{nome}</h2>
        <Image src={srcImage} alt={`Imagem de ${altImage}`} />
        <p tabIndex="-1">R$ {price}</p>
      </a>
      <button onClick={makeFavorite}>{i18n.gettext(`${textBtnFavorite}`)}</button>
      <p>{favorite}</p>
    </article>
  );
};

ProductCard.propTypes = {
  altImage: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  srcImage: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
};

module.exports = ProductCard;
