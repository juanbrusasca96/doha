import express from 'express';
import daysController from '../controllers/days.controller.js';
const router = express.Router();

router.get('/', daysController.getAllDays);
router.get('/activeDay', daysController.getActiveDay);
router.post('/', daysController.saveDay);
router.post('/:pid', daysController.updateDay);
router.put('/:pid', daysController.deleteDay);
router.get('/:pid', daysController.getDayById);

export default router;