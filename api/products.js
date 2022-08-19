const router = require('nordic/ragnar').router();
const ProductService = require('../services/ProductService');

router.get('/', async (req, res, next) => {
  try {
    const data = await ProductService.getProducts(req.platform.siteId, req.query.q, req.query.limit, req.query.offset);
    res.status(200).json(data);
  } catch {
    next();
  }
});

module.exports = router;
