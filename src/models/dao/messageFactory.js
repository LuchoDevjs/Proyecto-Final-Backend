import env from "../../config/config.js";

import MessagesDaosMongoDb from "./messages/MessagesDaosMongoDb.js";

class MessageDaosFactory {
  static getMessageDao() {
    switch (env.TARGET) {
      case "file":
        return console.log("File not found");
      case "mongo":
        return MessagesDaosMongoDb.getInstance();
    }
  }
}
export default MessageDaosFactory;
