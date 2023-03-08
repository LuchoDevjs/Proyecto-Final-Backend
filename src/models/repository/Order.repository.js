import OrderDto from "./../dto/Order.dto.js";
import Orders from "./../Order.model.js";
import OrderDaosFactory from "./../dao/orderDaoFactory.js";

export default class OrderRepository {
  constructor() {
    this.dao = OrderDaosFactory.getOrderDao();
  }

  // Crea una nueva orden en la base de datos.
  async create(newOrder) {
    try {
      const orderDto = await this.dao.create(new OrderDto(newOrder));
      return new Orders(orderDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Obtiene todas las órdenes de la base de datos.
  async getAll(query) {
    try {
      const ordersDtos = await this.dao.getAll(query);
      return ordersDtos.map((orderDto) => new Orders(orderDto));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Obtiene las órdenes de la base de datos que coinciden con un parámetro específico.
  async getByParameter(value, parameter) {
    try {
      const ordersDtos = await this.dao.getByParameter(value, parameter);
      return ordersDtos.map((orderDto) => new Orders(orderDto));
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
