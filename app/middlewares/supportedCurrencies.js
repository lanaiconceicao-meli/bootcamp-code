const supportedCurrencies = (req, res, next) => {
  res.locals.currencies = ['BRL', 'USD'];
  next();
};

module.exports = supportedCurrencies;
