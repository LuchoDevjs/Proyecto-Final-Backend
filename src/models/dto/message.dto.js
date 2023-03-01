export default class MessageDto {
      constructor(message) {
            this.id = message.id;
            this.type = message.type;
            this.email = message.email;
            this.message = message.message;
            this.date = message.date;
      }
}
