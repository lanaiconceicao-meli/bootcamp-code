const React = require('react');

function View(props) {
  // eslint-disable-next-line react/prop-types
  const { products } = props;
  return (
    <div>
      {/* <h1>{ title }</h1> */}
      <ul>
        {products?.results?.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
}

module.exports = View;
