/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const { fetchSiteData, render } = require('./controller');

/**
 * Routers
 */
router.get('/', fetchSiteData, render);

/**
 * Expose router
 */
module.exports = router;
