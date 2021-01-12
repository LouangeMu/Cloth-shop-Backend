import BcryptService from '../services/bcrypt.service';
import ResponseService from '../services/response.service';
import UserService from '../services/user.service';

export const checkIfEmailExist = async (req, res, next) => {
    const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (user) {
		ResponseService.setError(409, 'email is already exist');
		return ResponseService.send(res);
	}
	next();
};

export const checkUserCredentials = async (req, res, next) => {
	const user = await UserService.findUserByAttribute({ email: req.body.email });
	if (!user) {
		ResponseService.setError(400, 'email not registered');
		return ResponseService.send(res);
	}


	if (!BcryptService.comparePassword(req.body.password, user.password)) {
		ResponseService.setError(401, 'Invalid email or password');
		return ResponseService.send(res);
	}
	next();
};


