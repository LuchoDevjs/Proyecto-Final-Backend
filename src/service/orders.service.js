import OrderRepository from "./../models/repository/Order.repository.js";
import OrderDto from "./../models/dto/Order.dto.js";
import Orders from "./../models/Order.model.js";

const orderRepository = new OrderRepository();

class OrderService {
  constructor() {}

  /**
   * Obtiene todas las órdenes en la base de datos.
   * @param {object} query - Objeto con parámetros de búsqueda.
   * @returns {array} - Un array de órdenes.
   */
  async getAllOrders(query) {
    try {
      const orders = await orderRepository.getAll(query);
      return orders.map((order) => new OrderDto(order));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Obtiene una orden específica de la base de datos según el correo electrónico.
   * @param {string} email - El correo electrónico asociado a la orden.
   * @returns {array} - Un array de órdenes.
   */
  async getOrderByEmail(email) {
    try {
      const orders = await orderRepository.getByParameter(email, "email");
      return orders.map((order) => new OrderDto(order));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Crea una nueva orden en la base de datos.
   * @param {object} orderData - Los datos de la orden.
   * @returns {object} - La orden creada.
   */
  async createOrder(orderData) {
    try {
      const order = await orderRepository.create(new Orders(orderData));
      return new OrderDto(order);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new OrderService();
