/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();

const demo = require('./demo');
const message = require('./message');
const products = require('./products');
const currencies = require('./currencies');

/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/message', message);
router.use('/products', products);
router.use('/currencies', currencies);

/**
 * Expose API router
 */
module.exports = router;
