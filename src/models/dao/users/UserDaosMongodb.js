import UserModel from "../../model/users.js";
import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";

let userInstance = null;

class UsersDaosMongoDb extends ContenedorMongoDb {
  constructor() {
    super(UserModel);
  }

  /**
   * Returns an instance of UsersDaosMongoDb.
   * @returns {UsersDaosMongoDb} An instance of UsersDaosMongoDb.
   */
  static getInstance() {
    if (!userInstance) {
      userInstance = new UsersDaosMongoDb();
    }
    return userInstance;
  }

  /**
   * Finds a user by email.
   * @param {string} email - The email of the user to find.
   * @returns {Promise<object|null>} The found user or null if not found.
   */
  async findByEmail(email) {
    try {
      const result = await this.schema.findOne({ email }, { __v: 0 });
      return result;
    } catch (error) {
      logger.error(`[findByEmail] ContenedorMongoDb, ${error.message}`);
      throw new Error(error);
    }
  }
}

export default UsersDaosMongoDb;
