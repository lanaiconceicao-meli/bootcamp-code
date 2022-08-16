/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const config = require('nordic/config');
const { layoutMiddleware } = require('nordic/layout');
const i18nMiddleware = require('nordic/i18n/middleware');
const polyfillsMiddleware = require('nordic/script/polyfills-middleware');

/**
 * Set up mocks
 */
require('../../mocks');

/**
 * Routers
 */
const demoRoute = require('../pages/demo');
const productsRoute = require('../pages/products');
const profileRoute = require('../pages/profile');
const formRoute = require('../pages/forms');
const adaptativeRoute = require('../pages/adaptative');

/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

router.use((req, _res, next) => {
  console.log('path:', req.path);
  next();
});
/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect(`${config.ragnar.basePath}demo`));

/**
 * Mount routers
 */
router.use('/demo', demoRoute);
router.use('/products', productsRoute);
router.use('/profile', profileRoute);
router.use('/forms', formRoute);
router.use('/adaptative', adaptativeRoute);

/**
 * Expose router
 */
module.exports = router;
