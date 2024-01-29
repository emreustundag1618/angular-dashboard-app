import express from 'express';
import * as productsController from '../controllers/productsController.js';

const router = express.Router();

router.get('/', productsController.getProductsController);
router.get('/:id', productsController.getProductByIdController);
router.post('/', productsController.addProductController);
router.delete('/:id', productsController.deleteProductByIdController);
// TODO: Update route will be added

export default router;