import env from "../../config/config.js";
import OrdersDaosMongoDb from "./order/OrdersDaosMongodb.js";

class OrderDaosFactory {
  static getOrderDao() {
    // Obtener el target del archivo de configuración
    const target = env.TARGET;

    switch (target) {
      case "file":
        // Si el target es un archivo, mostrar un mensaje de error
        console.log("File target not found");
        break;
      case "mongo":
        // Si el target es MongoDB, obtener la instancia de la clase OrdersDaosMongoDb
        return OrdersDaosMongoDb.getInstance();
        break;
      default:
        // Si el target no es reconocido, mostrar un mensaje de error
        console.log("Target not recognized");
        break;
    }
  }
}

// Exportar la clase OrderDaosFactory
export default OrderDaosFactory;
