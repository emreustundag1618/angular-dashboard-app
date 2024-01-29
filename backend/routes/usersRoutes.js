import express from 'express';
import * as usersController from '../controllers/usersController.js';

const router = express.Router();

router.get('/', usersController.getUsersController);
router.get('/:id', usersController.getUserByIdController);
router.post('/', usersController.addUserController);
router.delete('/:id', usersController.deleteUserByIdController);
// TODO: Update route will be added

export default router;