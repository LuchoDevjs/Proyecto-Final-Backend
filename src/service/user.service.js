import User from "./../models/User.model.js";
import UserDto from "./../models/dto/user.dto.js";
import UserRepository from "./../models/repository/user.repository.js";

// Crear una nueva instancia de UserRepository
const userRepository = new UserRepository();

class UsersService {
  constructor() {}

  // Obtener todos los usuarios según una consulta dada
  async getAllUsers(query) {
    try {
      const users = await userRepository.getAll(query);
      // Mapear los usuarios a objetos UserDto para su representación
      return users.map((user) => new UserDto(user));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Crear un nuevo usuario
  async createUser(userData) {
    try {
      const user = await userRepository.create(new User(userData));
      // Representar al usuario como un objeto UserDto
      return new UserDto(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Eliminar un usuario según su id
  async deleteUserById(userId) {
    try {
      await userRepository.deleteById(userId);
      // Retornar el id del usuario eliminado
      return userId;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Encontrar un usuario según su correo electrónico
  async findUserByEmail(userEmail) {
    try {
      const user = await userRepository.findByEmail(userEmail);
      if (!user) {
        // Retornar null si el usuario no existe
        return null;
      }
      // Representar al usuario como un objeto UserDto
      return new UserDto(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Obtener un usuario según su id
  async getUserById(userId) {
    try {
      const user = await userRepository.getById(userId);
      // Representar al usuario como un objeto UserDto
      return new UserDto(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Actualizar un usuario según su id y los datos proporcionados
  async updateUserById(userId, userData) {
    try {
      await userRepository.updateById(userId, userData);
      // Retornar null si la actualización se realizó con éxito
      return null;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

// Exportar una instancia de UsersService
export default new UsersService();
