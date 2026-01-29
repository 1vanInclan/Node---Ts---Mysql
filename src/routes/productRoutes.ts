import { Router } from 'express'
import productController from '../controllers/productController';

const productRoutes = Router();

productRoutes.get('/', productController.getAllProducts);

export default productRoutes