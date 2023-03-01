import ProductsModel from "../../model/products.js";
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

// Variable para mantener una única instancia de la clase ProductsDaosMongoDb
let productsInstance = null;

class ProductsDaosMongoDb extends ContenedorMongoDb {
  constructor() {
    super(ProductsModel);
  }

  // Método estático que retorna la única instancia de la clase ProductsDaosMongoDb
  static getInstance() {
    if (!productsInstance) {
      productsInstance = new ProductsDaosMongoDb();
    }
    return productsInstance;
  }
}

export default ProductsDaosMongoDb;
