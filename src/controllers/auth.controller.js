import BcryptService from "../services/bcrypt.service";
import ResponseService from "../services/response.service";
import TokenService from "../services/token.service";
import UserService from "../services/user.service";


class AuthController {
	
	static async signup(req, res) {
		const newUser = await UserService.createUser({
			fullname: req.body.fullname,
			email: req.body.email,
			password: BcryptService.hashPassword(req.body.password),
			gender: req.body.gender,
            location: req.body.location,
            paymentform:req.body.paymentform,
			
		});

		const userData = { ...newUser.dataValues };
		delete userData.password;

		ResponseService.setSuccess(201, 'User Successfully Created', {
			user: userData,
			token: TokenService.generateToken(userData),
		});
		return ResponseService.send(res);
    }

    
	static async login(req, res) {
		const user = await UserService.findUserByAttribute({
			email: req.body.email,
		});
		const userData = { ...user.dataValues };
		delete userData.password;
		ResponseService.setSuccess(200, 'successfully logged in', {
			token: TokenService.generateToken(userData),
		});
		return ResponseService.send(res);
	}

	
	
}
    export default AuthController;
