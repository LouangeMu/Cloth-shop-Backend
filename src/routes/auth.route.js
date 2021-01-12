import {Router} from 'express'
import AuthController from '../controllers/auth.controller';
import { checkUserCredentials } from '../middlewares/user.middleware';


const router = Router();

router.post(
	'/signup',
	AuthController.signup
);

router.post(
	'/login',
	checkUserCredentials,
	AuthController.login
)









export default router;
