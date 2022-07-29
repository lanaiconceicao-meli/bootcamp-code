const router = require('nordic/ragnar').router();
const { render, fetchProduct } = require('./controller');

router.get('/', fetchProduct, render);
module.exports = router;
