const supportedCurrencies = (req, res, next) => {
  res.locals.currencies = ['BRL', 'USD'];
  next();
};

// https://dev.mercadolivre.com.br:8443/api/currencies

module.exports = supportedCurrencies;
