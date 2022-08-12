const React = require('react');
const PropTypes = require('prop-types');

const ProductForm = ({ product }) => {
  const { id, title, price, description } = product;
  return (
    <li key={id}>
      <p>{`Id: ${id}`}</p>
      <p>{`Nome: ${title}`}</p>
      <p>{`Preço: ${price}`}</p>
      <p>{description ? `Descrição: ${description}` : 'Produto sem descrição'}</p>
    </li>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};


module.exports = ProductForm;
