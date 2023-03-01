import env from '../../config/config.js';

import CartsDaosMongoDb from './carts/CartsDaosMongodb.js';

class CartsDaosFactory {
      static getCartDao() {
            switch (env.TARGET) {
                  case 'file':
                        return console.log('File no found');
                  case 'mongo':
                        return CartsDaosMongoDb.getInstance();
            }
      }
}
export default CartsDaosFactory;
