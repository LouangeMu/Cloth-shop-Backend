import { Router } from 'express';
import ProductController from '../controllers/product.controller';






const router = Router();

router.post(
	'/products',
	ProductController.createnewProduct
);

router.get(
	'/products/:StoreId',
	ProductController.getAllProduct
);





export default router;
