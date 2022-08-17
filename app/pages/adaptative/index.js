const router = require('nordic/ragnar').router();
const { fetchProduct, render } = require('./controller');

router.get('/', fetchProduct, render);

module.exports = router;
