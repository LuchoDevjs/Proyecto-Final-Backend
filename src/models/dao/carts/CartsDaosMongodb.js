import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';
import CartsModel from '../../model/carts.js';
let cartInstance = null;
class CartsDaosMongoDb extends ContenedorMongoDb {
      constructor() {
            super(CartsModel);
      }
      static getInstance() {
            if (!cartInstance) {
                  cartInstance = new CartsDaosMongoDb();
            }
            return cartInstance;
      }
}
export default CartsDaosMongoDb;
