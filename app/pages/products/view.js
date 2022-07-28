const React = require('react');

function View(props) {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  return <h1>{ title }</h1>;
}

module.exports = View;
