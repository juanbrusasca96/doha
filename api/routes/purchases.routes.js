import express from 'express';
import purchasesController from '../controllers/purchases.controller.js';
const router = express.Router();

router.get('/', purchasesController.getAllPurchases);
router.post('/', purchasesController.savePurchase);
router.post('/:pid', purchasesController.updatePurchase);
router.put('/:pid', purchasesController.deletePurchase);
router.get('/:pid', purchasesController.getPurchaseById);

export default router;