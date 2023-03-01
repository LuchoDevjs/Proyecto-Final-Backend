import userService from '../service/user.service.js';
import { decrypt, encrypt } from '../utils/encrypt.js';
import { generateToken } from './../utils/jwt.js';

class LoginController {
      constructor() {}
      async login(req, res, next) {
            try {
                  const user = await userService.findByEmail(req.body.email);
                  if (!user) {
                        return res.status(401).json({
                              message: 'Username or password is invalid.',
                        });
                  }
                  if (!decrypt(req.body.password, user.password)) {
                        return res.status(401).json({
                              message: 'Username or password is invalid.',
                        });
                  }
                  const token = {
                        email: user.email,
                        id: user.id,
                  };
                  const userToken = {
                        direccion: user.direccion,
                        email: user.email,
                        id: user.id,
                        nombre: user.nombre,
                        type: user.type,
                  };
                  res.status(200).json({
                        access_token: generateToken(token),
                        user: userToken,
                  });
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async register(req, res) {
            try {
                  const { body } = req;
                  body.password = encrypt(body.password);
                  body.type = 'user';
                  userService.createUser(body);
                  res.status(201).json(body);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
}
export default new LoginController();
