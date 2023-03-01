import env from "../../config/config.js";
import ProductsDaosMongoDb from "./products/ProductsDaosMongodb.js";

// Factoría de DAOs de productos
class ProductsDaosFactory {
  static getProductDao() {
    // Seleccionar el DAO adecuado según la configuración de TARGET
    switch (env.TARGET) {
      case "file":
        // No se encontró el DAO de archivos, enviar mensaje de error
        console.log("File DAO not found");
        break;
      case "mongo":
        // Devolver el DAO de MongoDB para productos
        return ProductsDaosMongoDb.getInstance();
      default:
        // TARGET no configurado adecuadamente, enviar mensaje de error
        console.log("Invalid TARGET configuration");
        break;
    }
  }
}

export default ProductsDaosFactory;
