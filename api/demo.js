/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();

/**
 * /demo/platform endpoint
 */
router.get('/platform', (req, res) => {
  res.status(200).json({
    platform: req.platform,
  });
});

/**
 * /demo/user endpoint
 */
router.get('/user', (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

/**
 * /demo/device endpoint
 */
router.get('/device', (req, res) => {
  res.status(200).json({
    device: req.device,
  });
});

/**
 * /demo/browser endpoint
 */
router.get('/browser', (req, res) => {
  res.status(200).json({
    browser: req.browser,
  });
});

/**
 * Expose router
 */
module.exports = router;
