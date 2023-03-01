import messageService from '../service/message.service.js';

class MessageController {
      constructor() {}
      async getAllMessages(req, res) {
            const data = await messageService.getAllMessages();
            return res.status(200).json(data);
      }

      async findByEmail(req, res) {
            try {
                  const { email } = req.params;
                  const data = await messageService.findByEmail(email);
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async createMessage(req, res) {
            try {
                  const { body } = req;
                  body.date = new Date().toDateString();
                  const data = await messageService.createMessage(body);
                  return res.status(201).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
}
export default new MessageController();
