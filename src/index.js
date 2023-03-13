import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import env from "./config/config.js";
import logger from "./utils/Loggers.js";
import apiRouters from "./routers/api/index.js";
import { connectToDatabase } from "./config/bd.js";
import { initializeSocketIO } from "./socket.js";

// Crear una nueva instancia de la aplicación Express
const app = express();

// Conectar con la base de datos
connectToDatabase();

// Definir el directorio raíz de la aplicación
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar la aplicación
app.use(cors()); // Permitir solicitudes CORS
app.use("/", express.static(path.join(__dirname, "public/"))); // Definir el directorio de archivos estáticos
app.use(express.json()); // Configurar el middleware para el análisis de solicitudes con formato JSON
app.use(express.urlencoded({ extended: true })); // Configurar el middleware para el análisis de solicitudes con formato URL encoded
app.use((req, res, next) => {
  // Registrar todas las solicitudes que se reciben en la aplicación
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Rutas de la API
app.use("/api", apiRouters);

// Manejador de rutas no definidas
app.use("*", (req, res) => {
  const data = {
    error: `Ruta: ${req.originalUrl} - Metodo: ${req.method} - Ruta inexistente. -Status Code 404`,
  };
  logger.warn(data);

  res.status(404).json(data);
});

// Iniciar el servidor
const server = app.listen(env.PORT, () => {
  logger.info(
    `Servidor http esta escuchando en el puerto ${server.address().port}`
  );
  logger.info(`http://localhost:${server.address().port}`);
  logger.info(`Environment: ${env.NODE_ENV}`);
});

// Iniciar el servidor de WebSocket
initializeSocketIO(server);

// Manejador de errores del servidor
server.on("error", (error) => {
  logger.error(`Error en servidor ${error}`);
});
