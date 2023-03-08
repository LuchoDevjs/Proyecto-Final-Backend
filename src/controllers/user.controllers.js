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

  // Obtener un usuario por id
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UsersService.getUserById(id);
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Crear un nuevo usuario
  async createUser(req, res) {
    try {
      const { body } = req;
      body.password = encrypt(body.password);
      body.type = "user";
      const user = await UsersService.createUser(body);
      const cartData = {
        user: user.id,
        email: user.email,
        address: user.address,
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
      return res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Eliminar un usuario por id
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await UsersService.deleteUser(id);
      const users = await UsersService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Actualizar un usuario por id
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      await UsersService.updateUser(id, body);
      const users = await UsersService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
export default new UsersController();
