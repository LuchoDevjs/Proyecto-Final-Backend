import env from '../../config/config.js';

import UsersDaosMongoDb from './users/UserDaosMongodb.js';

class UsersDaosFactory {
      static getUserDao() {
            switch (env.TARGET) {
                  case 'file':
                        return console.log('File no found');
                  case 'mongo':
                        return UsersDaosMongoDb.getInstance();
            }
      }
}
export default UsersDaosFactory;
