import env from '../../config/config.js';

import MessageDaosMongoDb from './messages/MenssgesDaosMongodb.js';

class MessageDaosFactory {
      static getMessageDao() {
            switch (env.TARGET) {
                  case 'file':
                        return console.log('File no found');
                  case 'mongo':
                        return MessageDaosMongoDb.getInstance();
            }
      }
}
export default MessageDaosFactory;
