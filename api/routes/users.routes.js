import express from 'express';
import usersController from '../controllers/users.controller.js';
const router = express.Router();

router.get('/', usersController.getAllUsers);
router.post('/', usersController.saveUser);
router.post('/:pid', usersController.updateUser);
router.put('/:pid', usersController.deleteUser);
router.get('/:pid', usersController.getUserById);

export default router;