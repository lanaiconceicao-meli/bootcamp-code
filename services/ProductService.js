const restclient = require('nordic/restclient')({
  timeout: 5000,
  baseURL: 'https://api.mercadolibre.com',
});

const productsJSON = require('./products');

class ProductService {
  static getProducts(siteId, product, limit) {
    // console.log(siteId, product, limit);
    return restclient.get(`/sites/${siteId}/search?q=${product}&limit=${limit}`)
      .then(response => response.data.results)
      .catch(() => productsJSON);
  }
}

// https://dev.mercadolivre.com.br:8443/products?q=cafe&limit=10

module.exports = ProductService;
