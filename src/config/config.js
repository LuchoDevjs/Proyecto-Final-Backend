// Importamos las dependencias necesarias
import { config } from "dotenv"; // Librería para manejo de archivos .env
import path, { resolve } from "path"; // Librería para manejo de rutas de archivos
import { fileURLToPath } from "url"; // Librería para manejo de URLs

// Obtenemos la ruta y el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargamos variables de entorno desde el archivo .env
config({ path: resolve(__dirname, "../../.env") });

// Exportamos un objeto con variables de configuración
export default {
  PORT: process.env.PORT || 8080, // Puerto del servidor
  NODE_ENV: process.env.NODE_ENV || "development", // Entorno de ejecución
  MONGODB_URI: process.env.MONGO_URL || "mongodb://localhost/express-test", // URL de la base de datos
  TARGET: process.env.TARGET || "mongo", // Tipo de base de datos a utilizar
  EMAIL_DESTINATARIO: process.env.EMAIL_DESTINATARIO, // Correo del destinatario
  EMAIL: process.env.EMAIL, // Correo del remitente
  EMAIL_SERVICE: process.env.EMAIL_SERVICE, // Servicio de correo a utilizar
  EMAIL_PASS: process.env.EMAIL_PASS, // Contraseña del correo
  TOKEN_TIME: process.env.TOKEN_TIME || "24h", // Tiempo de vida del token
};
