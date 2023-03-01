// Importar los servicios necesarios
import cartsService from "../service/carts.service.js";
import UsersService from "../service/user.service.js";
import enviarMail from "../utils/EmailSender.js";
import { encrypt } from "./../utils/encrypt.js";

class UsersController {
  constructor() {}

  // Obtener todos los usuarios
  async getAllUsers(req, res) {
    const users = await UsersService.getAllUsers();
    return res.status(200).json(users);
  }

  // Obtener un usuario por su ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UsersService.getUserById(id);
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Crear un usuario
  async createUser(req, res) {
    try {
      const { body } = req;
      const encryptedPassword = encrypt(body.password);
      const userType = "user";
      const newUser = await UsersService.createUser({
        ...body,
        password: encryptedPassword,
        type: userType,
      });
      const cartData = {
        user: newUser.id,
        email: newUser.email,
        direccion: newUser.direccion,
      };
      await cartsService.createCart(cartData);
      enviarMail(
        "Nuevo registro",
        `<div>
                                       <h1>Datos Nuevo Registro</h1>
                            <ul>
                            <li>Email:${req.body.email}</li>
                            <li>Nombre:${req.body.nombre}</li>
                            <li>Direccion:${req.body.direccion}</li>
                            </ul> 
                                        </div>`
      );
      return res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Eliminar un usuario por su ID
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await UsersService.deleteUser(id);
      const remainingUsers = await UsersService.getAllUsers();
      return res.status(200).json(remainingUsers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Actualizar un usuario
  async updateUser(req, res) {
    try {
      const { body } = req;
      await UsersService.updateUser(body.id, body);
      const updatedUsers = await UsersService.getAllUsers();
      return res.status(200).json(updatedUsers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new UsersController();
