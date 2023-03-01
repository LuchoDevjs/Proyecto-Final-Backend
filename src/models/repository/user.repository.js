import UserDto from "./../dto/user.dto.js";
import User from "./../User.model.js";
import UsersDaoFactory from "./../dao/userDaoFactory.js";

export default class UserRepository {
  constructor() {
    // Obtener la instancia del DAO de usuario
    this.dao = UsersDaoFactory.getUserDao();
  }

  async create(userData) {
    try {
      // Crear un nuevo usuario usando el DAO y los datos del usuario DTO
      const userDto = await this.dao.create(new UserDto(userData));
      return new User(userDto);
    } catch (error) {
      // Lanzar un error con el mensaje de error si algo sale mal
      throw new Error(error.message);
    }
  }

  async getAll(query) {
    try {
      // Obtener todos los usuarios usando el DAO y el objeto de consulta
      const usersDto = await this.dao.getAll(query);
      return usersDto.map((userDto) => new User(userDto));
    } catch (error) {
      // Lanzar un error con el mensaje de error si algo sale mal
      throw new Error(error.message);
    }
  }

  async getById(id) {
    try {
      // Obtener un usuario por ID usando el DAO
      const userDto = await this.dao.getById(id);
      return new User(userDto);
    } catch (error) {
      // Lanzar un error con el mensaje de error si algo sale mal
      throw new Error(error.message);
    }
  }

  async findByEmail(email) {
    try {
      // Encontrar un usuario por correo electrónico usando el DAO
      const userDto = await this.dao.findByEmail(email);
      if (!userDto) {
        // Si no se encuentra un usuario, devolver undefined
        return;
      }
      return new User(userDto);
    } catch (error) {
      // Lanzar un error con el mensaje de error si algo sale mal
      throw new Error(error.message);
    }
  }

  async upDate(id, updateData) {
    try {
      // Actualizar un usuario por ID usando el DAO y los datos de actualización
      await this.dao.updateById(id, updateData);
      return;
    } catch (error) {
      // Lanzar un error con el mensaje de error si algo sale mal
      throw new Error(error.message);
    }
  }

  async deleteById(id) {
    try {
      // Eliminar un usuario por ID usando el DAO
      await this.dao.deleteById(id);
      return;
    } catch (error) {
      // Lanzar un error con el mensaje de error si algo sale mal
      throw new Error(error.message);
    }
  }
}
