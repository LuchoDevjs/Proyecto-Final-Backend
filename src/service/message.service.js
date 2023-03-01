// Importamos los módulos necesarios
import MessageRepository from "./../models/repository/Message.repository.js";
import Message from "./../models/Message.model.js";
import MessageDto from "./../models/dto/message.dto.js";

// Creamos una instancia del repositorio de mensajes
const messageRepository = new MessageRepository();

// Definimos la clase MessageService
class MessageService {
  constructor() {}

  // Obtiene todos los mensajes de la base de datos
  async getAllMessages(query) {
    try {
      // Obtenemos los mensajes del repositorio y los mapeamos a objetos DTO
      const messages = await messageRepository.getAll(query);
      return messages.map((message) => new MessageDto(message));
    } catch (error) {
      // Si ocurre un error, lo lanzamos con un mensaje descriptivo
      throw new Error(`Error en getAllMessages: ${error.message}`);
    }
  }

  // Busca mensajes por correo electrónico del destinatario
  async findByEmail(email) {
    try {
      // Buscamos los mensajes del repositorio y los mapeamos a objetos DTO
      const messages = await messageRepository.findByEmail(email);
      return messages.map((message) => new MessageDto(message));
    } catch (error) {
      // Si ocurre un error, lo lanzamos con un mensaje descriptivo
      throw new Error(`Error en findByEmail: ${error.message}`);
    }
  }

  // Crea un nuevo mensaje en la base de datos
  async createMessage(data) {
    try {
      // Creamos un nuevo objeto Message a partir de los datos recibidos y lo guardamos en el repositorio
      const newMessage = await messageRepository.create(new Message(data));
      // Devolvemos el objeto DTO del mensaje creado
      return new MessageDto(newMessage);
    } catch (error) {
      // Si ocurre un error, lo lanzamos con un mensaje descriptivo
      throw new Error(`Error en createMessage: ${error.message}`);
    }
  }
}

// Exportamos una instancia de la clase MessageService
export default new MessageService();
