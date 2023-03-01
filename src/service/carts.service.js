import CartsModel from "../models/Cart.model.js";
import CartDto from "../models/dto/Cart.dto.js";
import CartRepository from "../models/repository/Cart.repository.js";

// Crear una instancia de la clase CartRepository para acceder a la base de datos
const repository = new CartRepository();

class CartService {
  constructor() {}

  // Obtener todos los carritos
  async getAllCarts(query) {
    try {
      // No se está haciendo nada aquí
    } catch (error) {
      // Lanzar un error
      throw new Error(error);
    }
    // Recuperar todos los carritos del repositorio y mapearlos a DTOs
    const carts = await repository.getAll(query);
    return carts.map((cart) => new CartDto(cart));
  }

  // Crear un nuevo carrito
  async createCart(data) {
    try {
      // Crear un nuevo carrito en el repositorio y devolver un DTO
      const cart = await repository.create(new CartsModel(data));
      return new CartDto(cart);
    } catch (error) {
      // Lanzar un error si ocurre algún problema
      throw new Error(error);
    }
  }

  // Eliminar un carrito
  async deleteCart(id) {
    try {
      // Eliminar el carrito con el ID especificado
      await repository.deleteById(id);
      return id;
    } catch (error) {
      // Lanzar un error si ocurre algún problema
      throw new Error(error);
    }
  }

  // Obtener un carrito por ID
  async getCartById(id) {
    try {
      // Recuperar el carrito con el ID especificado del repositorio y devolver un DTO
      const cart = await repository.getById(id);
      return new CartDto(cart);
    } catch (error) {
      // Lanzar un error si ocurre algún problema
      throw new Error(error);
    }
  }

  // Obtener un carrito por ID de usuario
  async getCartByIdUser(idUser) {
    try {
      // Recuperar el carrito con el ID de usuario especificado del repositorio y devolver un DTO
      const cart = await repository.getByParameter(idUser, "user");
      return new CartDto(cart);
    } catch (error) {
      // Lanzar un error si ocurre algún problema
      throw new Error(error);
    }
  }

  // Actualizar un carrito por ID
  async updateCart(id, data) {
    try {
      // Actualizar el carrito con el ID especificado en el repositorio
      await repository.updateById(id, data);
      return;
    } catch (error) {
      // Lanzar un error si ocurre algún problema
      throw new Error(error);
    }
  }
}

export default new CartService();
