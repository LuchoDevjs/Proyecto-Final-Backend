import MessageModel from "../../model/messages.js";
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

let messageInstance = null;

class MessageDaosMongoDb extends ContenedorMongoDb {
  constructor() {
    super(MessageModel);
  }

  // Obtiene una instancia única de la clase MessageDaosMongoDb
  static getInstance() {
    if (!messageInstance) {
      messageInstance = new MessageDaosMongoDb();
    }
    return messageInstance;
  }

  // Busca un mensaje por email
  async findByEmail(email) {
    try {
      // Busca todos los documentos en la colección donde el valor del campo email sea igual al valor de la variable email
      const result = await this.schema.find({ email: email }, { __v: 0 });

      return result;
    } catch (error) {
      // Registra un error si algo sale mal
      logger.error(`[findByEmail] MessageDaosMongoDb, ${error.message}`);
      throw new Error(error);
    }
  }
}

export default MessageDaosMongoDb;
