import env from '../../config/config.js';

import ProductsDaosMongoDb from './products/ProductsDaosMongodb.js';

class ProductsDaosFactory {
      static getProductDao() {
            switch (env.TARGET) {
                  case 'file':
                        return console.log('File no found');
                  case 'mongo':
                        return ProductsDaosMongoDb.getInstance();
            }
      }
}
export default ProductsDaosFactory;
