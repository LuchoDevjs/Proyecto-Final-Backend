import Messages from './../Message.model.js';
import MessageDto from './../dto/message.dto.js';
import MessageDaosFactory from './../dao/messageFactory.js';

export default class MessageRepository {
      constructor() {
            this.dao = MessageDaosFactory.getMessageDao();
      }
      async create(message) {
            try {
                  const messageDto = await this.dao.create(
                        new MessageDto(message)
                  );
                  return new Messages(messageDto);
            } catch (error) {
                  throw new Error(error.message);
            }
      }
      async getAll(query) {
            try {
                  const messagesDto = await this.dao.getAll(query);
                  return messagesDto.map(
                        (messageDto) => new Messages(messageDto)
                  );
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      async findByEmail(email) {
            try {
                  const messagesDto = await this.dao.findByEmail(email);
                  return messagesDto.map(
                        (messageDto) => new Messages(messageDto)
                  );
            } catch (error) {
                  throw new Error(error.message);
            }
      }
}
