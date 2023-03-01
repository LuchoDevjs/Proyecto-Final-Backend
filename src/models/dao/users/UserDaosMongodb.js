import UserModel from '../../model/users.js';
import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';
let userInstance = null;
class UsersDaosMongoDb extends ContenedorMongoDb {
      constructor() {
            super(UserModel);
      }
      static getInstance() {
            if (!userInstance) {
                  userInstance = new UsersDaosMongoDb();
            }
            return userInstance;
      }
      async findByEmail(email) {
            try {
                  const result = await this.schema.find(
                        { email: email },
                        { __v: 0 }
                  );

                  return result[0];
            } catch (error) {
                  logger.error(
                        `[getByParameter] ContenedorMongoDb, ${error.message}`
                  );
                  throw new Error(error);
            }
      }
}
export default UsersDaosMongoDb;
