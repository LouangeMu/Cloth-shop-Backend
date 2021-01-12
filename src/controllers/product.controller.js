import ProductService from '../services/product.service';
import ResponseService from '../services/response.service';




class ProductController {

	static async createnewProduct(req, res){
		const newProducts = await ProductService.createProduct(req.body);
		ResponseService.setSuccess(
			201,
			'New Product is successfully created',
		);
		return ResponseService.send(res);
	}
	
	static async updateNewProduct(req, res) {

		const newProducts = await ProductService.updateProductByAttribute(req.body);
		ResponseService.setSuccess(
			201,
			'New Product is successfully updated',
		);
		return ResponseService.send(res);
	}
	
	static async getAllProduct(req, res) {

		const newProducts = await ProductService.getAllProduct({StoreId:req.params.StoreId});
		ResponseService.setSuccess(
			200,'All products are being retrieved',
			newProducts
		);
		return ResponseService.send(res);
	}

}

export default ProductController;
