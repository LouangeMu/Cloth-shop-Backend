import models from '../database/models';

const { Products } = models;


class ProductService {
	
	static updateProductByAttribute(attribute, property) {
		return Products.update(property, { where: attribute });
	}

	static createProduct(newProduct){
		return Products.create(newProduct)
	}

	static getAllProduct(newProduct){
		return Products.findAll({where: newProduct})
	}
	}


export default ProductService;
