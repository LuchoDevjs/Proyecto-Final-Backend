import env from '../../config/config.js';
import OrdersDaosMongoDb from './order/OrdersDaosMongodb.js';

class OrderDaosFactory {
      static getOrdertDao() {
            switch (env.TARGET) {
                  case 'file':
                        return console.log('File no found');
                  case 'mongo':
                        return OrdersDaosMongoDb.getInstance();
            }
      }
}
export default OrderDaosFactory;
