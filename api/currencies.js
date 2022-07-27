const router = require('nordic/ragnar').router();
const supportedCurrencies = require('../app/middlewares/supportedCurrencies');

const getSupportedCurrencies = (req, res) => res.status(200).json(res.locals.currencies);

router.get('/', supportedCurrencies, getSupportedCurrencies);

module.exports = router;
