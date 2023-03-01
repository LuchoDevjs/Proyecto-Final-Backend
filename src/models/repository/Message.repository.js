import Message from "./../Message.model.js";
import MessageDto from "./../dto/message.dto.js";
import MessageDaosFactory from "./../dao/messageFactory.js";

export default class MessageRepository {
  constructor() {
    // Obtener el DAO de mensajes al instanciar la clase
    this.dao = MessageDaosFactory.getMessageDao();
  }

  async create(message) {
    try {
      // Crear un DTO a partir del mensaje y guardarlo
      const messageDto = await this.dao.create(new MessageDto(message));
      // Devolver el mensaje creado a partir del DTO
      return new Message(messageDto);
    } catch (error) {
      // En caso de error, lanzar una excepción con el mensaje de error
      throw new Error(error.message);
    }
  }

  async getAll(query) {
    try {
      // Obtener todos los mensajes de la base de datos con la consulta especificada en "query"
      const messagesDto = await this.dao.getAll(query);
      // Convertir todos los DTOs en instancias de Mensaje y devolverlos en un arreglo
      return messagesDto.map((messageDto) => new Message(messageDto));
    } catch (error) {
      // En caso de error, lanzar una excepción con el mensaje de error
      throw new Error(error.message);
    }
  }

  async findByEmail(email) {
    try {
      // Buscar los mensajes en la base de datos que tengan la dirección de correo electrónico especificada
      const messagesDto = await this.dao.findByEmail(email);
      // Convertir todos los DTOs en instancias de Mensaje y devolverlos en un arreglo
      return messagesDto.map((messageDto) => new Message(messageDto));
    } catch (error) {
      // En caso de error, lanzar una excepción con el mensaje de error
      throw new Error(error.message);
    }
  }
}
