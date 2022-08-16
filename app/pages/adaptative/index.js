const router = require('nordic/ragnar').router();
const { render } = require('./controller');

router.get('/', render);

module.exports = router;
