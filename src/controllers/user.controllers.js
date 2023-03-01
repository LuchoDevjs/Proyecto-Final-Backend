import cartsService from '../service/carts.service.js';
import UsersService from '../service/user.service.js';
import enviarMail from '../utils/EmailSender.js';
import { encrypt } from './../utils/encrypt.js';

class UsersController {
      constructor() {}
      async getAllUsers(req, res) {
            const data = await UsersService.getAllUsers();
            return res.status(200).json(data);
      }

      async getUserById(req, res) {
            try {
                  const { id } = req.params;
                  const data = await UsersService.getUserById(id);
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async createUser(req, res) {
            try {
                  const { body } = req;
                  body.password = encrypt(body.password);
                  body.type = 'user';
                  const data = await UsersService.createUser(body);
                  const bodyCart = {
                        user: data.id,
                        email: data.email,
                        direccion: data.direccion,
                  };
                  await cartsService.createCart(bodyCart);
                  enviarMail(
                        'Nuevo registro',
                        `<div>
                                       <h1>Datos Nuevo Registro</h1>
                            <ul>
                            <li>Email:${req.body.email}</li>
                            <li>Nombre:${req.body.nombre}</li>
                            <li>Direccion:${req.body.direccion}</li>
                            </ul> 
                                        </div>`
                  );
                  return res.status(201).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }

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
      async updateUser(req, res) {
            try {
                  const { body } = req;
                  await UsersService.updateUser(body.id, body);
                  const data = await UsersService.getAllUsers();
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
}
export default new UsersController();
