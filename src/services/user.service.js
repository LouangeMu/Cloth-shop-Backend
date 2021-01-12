import models from '../database/models';

const { User } = models;


class UserService {
	
	static createUser(user) {
		return User.create(user);
	}

	
	static async updateUserByAttribute(attribute, property) {
		return User.update(property, { where: attribute });
	}

	
	static findUserByAttribute(attribute) {
		return User.findOne({ where: attribute });
	}

	
	static updateProperty(instance, property) {
		return User.update(property, { where: instance });
	}

	
	static findUserByProperty(property) {
		return User.findOne({ where: property });
	}

	
}
export default UserService;
