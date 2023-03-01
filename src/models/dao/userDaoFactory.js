import env from "../../config/config.js";
import UsersDaosMongoDb from "./users/UserDaosMongodb.js";

/**
 * Factoría de Data Access Objects (DAOs) para usuarios
 */
class UsersDaosFactory {
  /**
   * Obtiene una instancia del DAO de usuario adecuado según el entorno de ejecución
   * @returns {Object} Instancia del DAO de usuario
   */
  static getUserDao() {
    switch (env.TARGET) {
      case "file":
        console.log("No se encontró el DAO de usuarios para archivos");
        break;
      case "mongo":
        return UsersDaosMongoDb.getInstance();
      default:
        console.log("No se encontró el DAO de usuarios para el entorno actual");
        break;
    }
  }
}

export default UsersDaosFactory;
