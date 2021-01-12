import jwt from 'jsonwebtoken';


class TokenService {
	
	static generateToken(payload) {
		return jwt.sign(payload, process.env.SECRET, {
			expiresIn: process.env.EXPIRE_TIME,
		});
	}

	
	static verifyToken(token) {
		return jwt.verify(token, process.env.SECRET, (err, decoded) => {
			if (err) {
				return err;
			}
			return decoded;
		});
	}
}

export default TokenService;
