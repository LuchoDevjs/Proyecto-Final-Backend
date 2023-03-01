import { Server } from 'socket.io';
import messageService from './service/message.service.js';
import logger from './utils/Loggers.js';

/* se define la varible io*/
let io;

/* funcion para iniciar el socket.io*/
function initSocket(httpServer) {
      io = new Server(httpServer);
      setEvents(io);
}
/* funcion para los eventos de  el socket.io*/
async function setEvents(io) {
      /* conencion del cliente*/
      io.on('connect', async (socketClient) => {
            /*  lee los mensajes de la Base de datos*/

            const mensajes = await messageService.getAllMessages();

            io.emit('history-message', mensajes);

            logger.info(`Se conecto el cliente con el id ${socketClient.id}`);
            /* se recibe nuevo mensaje*/
            socketClient.on('new-message', async (data) => {
                  /* se guarda el mensaje*/

                  await messageService.createMessage(data);

                  /* y se emite al cliente*/

                  io.emit('history-message', mensajes);
                  io.emit('notification-message', data);
            });

            /* se recibe el mail del cliente que escribe*/
            socketClient.on('new-isWriting', (data) => {
                  /* se emite el mail del cliente que escribe*/
                  io.emit('IsWriting', data);
            });

            /* se avisa si se desconecto el cliente*/
            socketClient.on('disconnect', () => {
                  logger.info(
                        `Se desconecto el cliente con el id
                        ${socketClient.id}`
                  );
            });
      });
}
/*funcion para emitir*/
function emit(event, data) {
      io.emit(event, data);
}

export { initSocket, emit };
