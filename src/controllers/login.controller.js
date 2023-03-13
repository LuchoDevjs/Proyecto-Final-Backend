import userService from "../service/user.service.js";
import { decrypt, encrypt } from "../utils/encrypt.js";
import { generateToken } from "./../utils/jwt.js";

class LoginController {
  constructor() {}
  async login(req, res, next) {
    try {
      const user = await userService.findByEmail(req.body.email); // Buscar el usuario por correo electrónico
      if (!user) {
        // Si el usuario no existe, devolver un error de autenticación

        return res.status(401).json({
          message: "Username or password is invalid.",
        });
      }
      if (!decrypt(req.body.password, user.password)) {
        // Si la contraseña es incorrecta, devolver un error de autenticación

        return res.status(401).json({
          message: "Username or password is invalid.",
        });
      }
      const token = {
        // Crear un payload para el token JWT

        email: user.email,
        id: user.id,
      };
      const userToken = {
        // Crear un objeto con información del usuario para incluir en la respuesta

        direccion: user.direccion,
        email: user.email,
        id: user.id,
        nombre: user.nombre,
        type: user.type,
      };
      res.status(200).json({
        // Devolver una respuesta con un token de acceso y la información del usuario

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
      body.password = encrypt(body.password); // Encriptar la contraseña antes de guardarla
      body.type = "user"; // Establecer el tipo de usuario por defecto
      userService.createUser(body); // Crear un nuevo usuario en la base de datos
      res.status(201).json(body); // Devolver una respuesta con el nuevo usuario creado
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
export default new LoginController(); // Exportar una instancia de la clase LoginController
