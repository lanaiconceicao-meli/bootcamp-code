const router = require('nordic/ragnar').router();

const message = (req, res) => res.status(200).json({ message: 'Hello World!' });

router.get('/', message);

module.exports = router;

// https://dev.mercadolivre.com.br:8443/api/message
