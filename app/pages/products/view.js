const React = require('react');

function View(props) {
  // eslint-disable-next-line react/prop-types
  const { title, products } = props;
  console.log(products);
  return (
    <div>
      <h1>{ title }</h1>
      {products?.results?.map((product) => <li>{product.name}</li>)}
    </div>
  );
}

module.exports = View;
