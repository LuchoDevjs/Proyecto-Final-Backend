import cartsService from "../service/carts.service.js";
import UsersService from "../service/user.service.js";
import enviarMail from "../utils/EmailSender.js";
import { encrypt } from "./../utils/encrypt.js";

class UsersController {
  constructor() {}

  // Obtener todos los usuarios
  async getAllUsers(req, res) {
    const data = await UsersService.getAllUsers();
    return res.status(200).json(data);
  }

  // Obtener un usuario por ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const data = await UsersService.getUserById(id);
      return res.status(200).json(data);
    } catch (error) {
      res
        .status(404)
        .json(
          `No se encontró el usuario con el ID especificado: ${error.message}`
        );
    }
  }

  // Crear un nuevo usuario
  async createUser(req, res) {
    try {
      const { body } = req;
      body.password = encrypt(body.password); // Encriptar la contraseña antes de almacenarla en la base de datos
      body.type = "user"; // Establecer el tipo de usuario como 'user'
      const data = await UsersService.createUser(body); // Crear el usuario en la base de datos
      const bodyCart = {
        user: data.id, // ID del usuario recién creado
        email: data.email,
        direccion: data.direccion,
      };
      await cartsService.createCart(bodyCart); // Crear un carrito de compras para el nuevo usuario
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
      ); // Enviar un correo electrónico de confirmación al usuario
      return res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Eliminar un usuario por ID
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await UsersService.deleteUser(id);
      const data = await UsersService.getAllUsers();
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Actualizar un usuario por ID
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      await UsersService.updateUser(id, body);
      const data = await UsersService.getAllUsers();
      return res.status(200).json(data);
    } catch (error) {
      res
        .status(404)
        .json(
          `No se encontró el usuario con el ID especificado: ${error.message}`
        );
    }
  }
}

export default new UsersController();
