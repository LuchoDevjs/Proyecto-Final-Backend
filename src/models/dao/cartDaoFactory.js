import env from "../../config/config.js";
import CartsDaosMongoDb from "./carts/CartsDaosMongodb.js";

// Esta clase es una factoría que devuelve un objeto de tipo CartsDaosMongoDb
// si se está utilizando el target 'mongo' definido en el archivo de configuración
class CartsDaosFactory {
  static getCartDao() {
    switch (env.TARGET) {
      case "file":
        // Si se utiliza el target 'file' se muestra un mensaje de error
        console.log("File not found");
        break;
      case "mongo":
        // Si se utiliza el target 'mongo' se devuelve una instancia de CartsDaosMongoDb
        return CartsDaosMongoDb.getInstance();
    }
  }
}

export default CartsDaosFactory;
