import messageService from "../service/message.service.js";

class MessageController {
  constructor() {}

  // Obtiene todos los mensajes
  async getAllMessages(req, res) {
    const messages = await messageService.getAllMessages();
    return res.status(200).json(messages);
  }

  // Busca mensajes por correo electrónico
  async findMessagesByEmail(req, res) {
    try {
      const { email } = req.params;
      const messages = await messageService.findByEmail(email);
      return res.status(200).json(messages);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Crea un mensaje
  async createMessage(req, res) {
    try {
      const { body } = req;
      const date = new Date().toDateString();
      const newMessage = {
        sender: body.sender,
        receiver: body.receiver,
        subject: body.subject,
        content: body.content,
        date: date,
      };
      const message = await messageService.createMessage(newMessage);
      return res.status(201).json(message);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new MessageController();
