const router = require('express').Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/', productController.saveProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;