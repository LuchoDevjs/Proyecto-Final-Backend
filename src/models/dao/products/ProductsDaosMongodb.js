import ProductsModel from '../../model/products.js';
import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';
let productInstance = null;
class ProductsDaosMongoDb extends ContenedorMongoDb {
      constructor() {
            super(ProductsModel);
      }
      static getInstance() {
            if (!productInstance) {
                  productInstance = new ProductsDaosMongoDb();
            }
            return productInstance;
      }
}
export default ProductsDaosMongoDb;
