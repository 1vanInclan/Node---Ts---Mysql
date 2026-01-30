import { Router } from 'express'
import productController from '../controllers/productController';

const productRoutes = Router();

productRoutes.get('/', productController.getAllProducts);
productRoutes.get('/:id', productController.getProductById);
productRoutes.post('/', productController.postProduct);
productRoutes.put('/:id', productController.putProduct);
productRoutes.delete('/:id', productController.deleteProduct);

export default productRoutes