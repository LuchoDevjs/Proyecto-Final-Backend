import OrderDto from './../dto/Order.dto.js';
import Orders from './../Order.model.js';
import OrderDaosFactory from './../dao/orderDaoFactory.js';

export default class OrderRepository {
      constructor() {
            this.dao = OrderDaosFactory.getOrdertDao();
      }
      async create(order) {
            try {
                  const orderDto = await this.dao.create(new OrderDto(order));
                  return new Orders(orderDto);
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      async getAll(query) {
            try {
                  const ordersDto = await this.dao.getAll(query);
                  return ordersDto.map((orderDto) => new Orders(orderDto));
            } catch (error) {
                  throw new Error(error.message);
            }
      }
      async getByParameter(value, parameter) {
            try {
                  const ordersDto = await this.dao.getByParameter(
                        value,
                        parameter
                  );
                  return ordersDto.map((orderDto) => new Orders(orderDto));
            } catch (error) {
                  throw new Error(error.message);
            }
      }
}
