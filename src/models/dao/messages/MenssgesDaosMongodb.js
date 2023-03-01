import MessageModel from '../../model/messages.js';
import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

let messageInstance = null;
class MessageDaosMongoDb extends ContenedorMongoDb {
      constructor() {
            super(MessageModel);
      }
      static getInstance() {
            if (!messageInstance) {
                  messageInstance = new MessageDaosMongoDb();
            }
            return messageInstance;
      }
      async findByEmail(email) {
            try {
                  const result = await this.schema.find(
                        { email: email },
                        { __v: 0 }
                  );

                  return result;
            } catch (error) {
                  logger.error(
                        `[getByParameter] ContenedorMongoDb, ${error.message}`
                  );
                  throw new Error(error);
            }
      }
}
export default MessageDaosMongoDb;
