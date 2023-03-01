import winston, { format } from "winston"; // Importamos la librería Winston para el registro de logs y la librería Format para dar formato a los logs

const logger = winston.createLogger({
  level: "info", // Nivel mínimo de logs que se registrarán
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Añadimos una marca de tiempo con formato a los logs
    format.json() // Especificamos que los logs se escriban en formato JSON
  ),
  transports: [
    new winston.transports.Console({ level: "info" }), // Registramos los logs en la consola con nivel de logs de información o superior
    new winston.transports.File({
      filename: "./logs/warn.log", // Especificamos el nombre del archivo de logs de advertencia
      level: "warn", // Registramos los logs de advertencia o superior en el archivo
    }),
    new winston.transports.File({
      filename: "./logs/error.log", // Especificamos el nombre del archivo de logs de error
      level: "error", // Registramos los logs de error o superior en el archivo
    }),
  ],
});

export default logger; // Exportamos el objeto logger para que se pueda utilizar en otros módulos
