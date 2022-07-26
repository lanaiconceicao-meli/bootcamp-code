/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');

/**
 * Demo router
 */
router.use('/demo', demo);

/**
 * Expose API router
 */
module.exports = router;
