const React = require('react');

const View = require('./view');

exports.render = function render(req, res) {
  const Products = props => <View {...props} />;
  res.render(Products, {
    title: 'Minha página com Nordic',
  });
};
