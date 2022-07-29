const restclient = require('nordic/restclient')({
  timeout: 5000,
});

class ProductService {
  static getProducts(siteId, product, limit) {
    return restclient.get(`/sites/${siteId}/?q=${product}&limit=${limit}`)
      .then(response => response.data);
  }
}

module.exports = ProductService;
