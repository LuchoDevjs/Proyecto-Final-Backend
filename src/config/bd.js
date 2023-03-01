// Importamos las dependencias necesarias
import config from "./config.js"; // Archivo de configuración
import mongoose from "mongoose"; // Librería de base de datos
import logger from "../utils/Loggers.js"; // Librería para manejo de logs

// Función para conectar a la base de datos
export const connectToDatabase = () => {
  try {
    // Configuramos opciones de mongoose
    mongoose.set("strictQuery", false);

    // Obtenemos la URL de conexión desde el archivo de configuración
    const mongoURI = config.MONGODB_URI;

    // Realizamos la conexión con mongoose
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Enviamos mensaje de éxito al conectar
    logger.info("Conexión exitosa con la base de datos MongoDB.");
  } catch (error) {
    // En caso de error, logueamos el mensaje de error
    logger.error(`[connectToDatabase] Ha ocurrido un error: ${error.message}`);
  }
};
