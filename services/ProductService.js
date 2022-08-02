const restclient = require('nordic/restclient')({
  timeout: 10000,
});

class ProductService {
  static getProducts(siteId, product, limit) {
    return restclient.get(`/sites/${siteId}/search?q=${product}&limit=${limit}`)
      .then(response => response.data.results);
  }
}

module.exports = ProductService;
