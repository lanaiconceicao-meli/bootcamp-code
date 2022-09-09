const restclient = require('nordic/restclient')({
  timeout: 5000,
  baseURL: 'https://internal-api.mercadolibre.com/currencies',
});

class Service {
  static getCurrencies() {
    return restclient.get('/')
      .then(response => response.data);
  }

  static getCurrencyById(currencyId) {
    return restclient.get(`/${currencyId}`)
      .then(response => response.data);
  }
}

module.exports = Service;
