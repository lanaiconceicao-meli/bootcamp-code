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

/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

// Exercício 1 - Criar um middleware que - cada vez que acessamos uma rota- nos mostre pelo console o path de cada rota.
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

/**
 * Expose router
 */
module.exports = router;
