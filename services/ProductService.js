const restclient = require('nordic/restclient')({
  timeout: 10000,
});

const productsJSON = require('./products');

class ProductService {
  static getProducts(siteId, product, limit) {
    return restclient.get(`/sites/${siteId}/search?q=${product}&limit=${limit}`)
      .then(response => response.data.results)
      .catch(() => productsJSON);
  }
}

// https://dev.mercadolivre.com.br:8443/products?q=cafe&limit=10

module.exports = ProductService;
