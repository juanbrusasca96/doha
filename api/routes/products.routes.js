import express from 'express';
import productsController from '../controllers/products.controller.js';
const router=express.Router();

router.get('/',productsController.getAllProducts);
router.post('/',productsController.saveProduct);
router.post('/:pid',productsController.updateProduct);
router.put('/:pid',productsController.deleteProduct);
router.get('/:pid',productsController.getProductById);

export default router;