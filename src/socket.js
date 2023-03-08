import { Server } from "socket.io";
import messageService from "./service/message.service.js";
import logger from "./utils/Loggers.js";

/* Declaramos la variable io */
let io;

/* Función para inicializar el socket.io */
function initializeSocketIO(httpServer) {
  /* Creamos una nueva instancia del servidor socket.io */
  io = new Server(httpServer);
  /* Configuramos los eventos del socket.io */
  configureSocketIOEvents(io);
}

/* Función para configurar los eventos del socket.io */
async function configureSocketIOEvents(io) {
  /* Configuramos el evento de conexión del cliente */
  io.on("connect", async (socketClient) => {
    /* Obtenemos todos los mensajes de la base de datos */
    const messages = await messageService.getAllMessages();
    /* Enviamos el historial de mensajes al cliente recién conectado */
    io.emit("history-message", messages);
    /* Registramos en el log la conexión del cliente */
    logger.info(`Cliente conectado con el ID: ${socketClient.id}`);
    /* Configuramos el evento para recibir un nuevo mensaje del cliente */
    socketClient.on("new-message", async (messageData) => {
      /* Guardamos el nuevo mensaje en la base de datos */
      await messageService.createMessage(messageData);
      /* Enviamos el historial de mensajes actualizado a todos los clientes */
      io.emit("history-message", messages);
      /* Enviamos una notificación del nuevo mensaje a todos los clientes */
      io.emit("notification-message", messageData);
    });
    /* Configuramos el evento para recibir el correo electrónico del cliente que está escribiendo un mensaje */
    socketClient.on("new-isWriting", (email) => {
      /* Enviamos el correo electrónico del cliente que está escribiendo a todos los clientes */
      io.emit("IsWriting", email);
    });
    /* Configuramos el evento para detectar cuando el cliente se desconecta */
    socketClient.on("disconnect", () => {
      /* Registramos en el log la desconexión del cliente */
      logger.info(`Cliente desconectado con el ID: ${socketClient.id}`);
    });
  });
}

/* Función para enviar un evento y datos a todos los clientes */
function emit(event, data) {
  io.emit(event, data);
}

export { initializeSocketIO, emit };
