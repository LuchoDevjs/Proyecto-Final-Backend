import OrderModel from '../../model/orders.js';
import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

let orderInstance = null;
class OrdersDaosMongoDb extends ContenedorMongoDb {
      constructor() {
            super(OrderModel);
      }
      static getInstance() {
            if (!orderInstance) {
                  orderInstance = new OrdersDaosMongoDb();
            }
            return orderInstance;
      }
}
export default OrdersDaosMongoDb;
