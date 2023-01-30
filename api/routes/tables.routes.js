import express from 'express';
import tablesController from '../controllers/tables.controller.js';
const router = express.Router();

router.get('/', tablesController.getAllTables);
router.post('/', tablesController.saveTable);
router.post('/:pid', tablesController.updateTable);
router.put('/:pid', tablesController.deleteTable);
router.get('/:pid', tablesController.getTableById);

export default router;