import Cart from './../Cart.model.js';
import CartDto from './../dto/Cart.dto.js';
import CartsDaosFactory from './../dao/cartDaoFactory.js';

export default class CartRepository {
      constructor() {
            this.dao = CartsDaosFactory.getCartDao();
      }
      async create(carts) {
            try {
                  const cartDto = await this.dao.create(new CartDto(carts));
                  return new Cart(cartDto);
            } catch (error) {
                  throw new Error(error);
            }
      }

      async getAll(query) {
            try {
                  const cartsDto = await this.dao.getAll(query);
                  return cartsDto.map((cartDto) => new Cart(cartDto));
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getById(id) {
            try {
                  const cartDto = await this.dao.getById(id);
                  return new Cart(cartDto);
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getByParameter(value, parameter) {
            try {
                  const cart = await this.dao.getByParameter(value, parameter);
                  return new Cart(cart[0]);
            } catch (error) {
                  throw new Error(error);
            }
      }
      async updateById(id, dato) {
            try {
                  await this.dao.updateById(id, dato);
                  return;
            } catch (error) {
                  throw new Error(error);
            }
      }
      async deleteById(id) {
            try {
                  await this.dao.deleteById(id);
                  return;
            } catch (error) {
                  throw new Error(error);
            }
      }
}
