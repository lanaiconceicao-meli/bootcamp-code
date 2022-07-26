/**
 * Modules dependencies
 */
const restclient = require('nordic/restclient')({
  timeout: 5000,
});

/**
 * Service interface
 */
class Service {
  static getSite(siteId) {
    return restclient.get(`/sites/${siteId}`)
      .then(response => response.data);
  };
}

/**
 * Expose Service
 */
module.exports = Service;
