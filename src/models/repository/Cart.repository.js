import Cart from "../Cart.model.js";
import CartDto from "../dto/Cart.dto.js";
import CartsDaosFactory from "../dao/cartDaoFactory.js";

export default class CartRepository {
  constructor() {
    // Obtener el DAO de Carts
    this.cartDao = CartsDaosFactory.getCartDao();
  }

  async create(carts) {
    try {
      // Crear un nuevo CartDto con los datos de los carritos
      const newCartDto = await this.cartDao.create(new CartDto(carts));
      // Crear un nuevo Cart utilizando el nuevo CartDto
      return new Cart(newCartDto);
    } catch (error) {
      // Si hay un error, lanzar una nueva excepción
      throw new Error(error);
    }
  }

  async getAll(query) {
    try {
      // Obtener todos los CartDto utilizando el DAO de Carts
      const cartsDto = await this.cartDao.getAll(query);
      // Mapear cada CartDto a un nuevo Cart
      return cartsDto.map((cartDto) => new Cart(cartDto));
    } catch (error) {
      // Si hay un error, lanzar una nueva excepción
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      // Obtener un CartDto por su ID utilizando el DAO de Carts
      const cartDto = await this.cartDao.getById(id);
      // Crear un nuevo Cart utilizando el CartDto obtenido
      return new Cart(cartDto);
    } catch (error) {
      // Si hay un error, lanzar una nueva excepción
      throw new Error(error);
    }
  }

  async getByParameter(value, parameter) {
    try {
      // Obtener un Cart por un parámetro específico utilizando el DAO de Carts
      const cartDto = await this.cartDao.getByParameter(value, parameter);
      // Crear un nuevo Cart utilizando el CartDto obtenido
      return new Cart(cartDto[0]);
    } catch (error) {
      // Si hay un error, lanzar una nueva excepción
      throw new Error(error);
    }
  }

  async updateById(id, data) {
    try {
      // Actualizar un Cart por su ID utilizando el DAO de Carts
      await this.cartDao.updateById(id, data);
      // No es necesario devolver nada en este caso
    } catch (error) {
      // Si hay un error, lanzar una nueva excepción
      throw new Error(error);
    }
  }

  async deleteById(id) {
    try {
      // Eliminar un Cart por su ID utilizando el DAO de Carts
      await this.cartDao.deleteById(id);
      // No es necesario devolver nada en este caso
    } catch (error) {
      // Si hay un error, lanzar una nueva excepción
      throw new Error(error);
    }
  }
}
