import OrderModel from "../../model/orders.js";
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

// Clase singleton que se encarga de manejar el acceso a la base de datos de órdenes
let ordersDaoInstance = null;

class OrdersDaosMongoDb extends ContenedorMongoDb {
  constructor() {
    super(OrderModel);
  }

  static getInstance() {
    if (!ordersDaoInstance) {
      ordersDaoInstance = new OrdersDaosMongoDb();
    }
    return ordersDaoInstance;
  }
}

export default OrdersDaosMongoDb;
