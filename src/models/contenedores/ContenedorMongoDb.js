import logger from './../../utils/Loggers.js';
import MongoDao from './contenedorDao.js';

class ContenedorMongoDb extends MongoDao {
      constructor(schema) {
            super();
            this.schema = schema;
      }

      /*Metodo para obtener todos los Item */
      async getAll() {
            try {
                  const result = await this.schema.find({}, { __v: 0 });

                  return result;
            } catch (error) {
                  logger.error(`[getAll] ContenedorMongoDb, ${error.message}`);
                  throw new Error(error);
            }
      }
      /*Metodo para obtener Item por id*/
      async getById(id) {
            try {
                  const result = await this.schema.find(
                        { _id: id },
                        { __v: 0 }
                  );
                  return result[0];
            } catch (error) {
                  logger.error(`[getById] ContenedorMongoDb, ${error.message}`);
                  throw new Error(error);
            }
      }
      async getByParameter(value, parameter) {
            try {
                  const result = await this.schema.find(
                        { [parameter]: value },
                        { __v: 0 }
                  );

                  return result;
            } catch (error) {
                  logger.error(
                        `[getByParameter] ContenedorMongoDb, ${error.message}`
                  );
                  throw new Error(error);
            }
      }
      /*Metodo para Guardar */
      async create(data) {
            try {
                  const user = this.schema(data);
                  const result = await user.save();
                  return result;
            } catch (error) {
                  logger.error(
                        `[postItem] ContenedorMongoDb, ${error.message}`
                  );
                  throw new Error(error);
            }
      }
      /*Metodo para Modificar */
      async updateById(id, data) {
            try {
                  const result = await this.schema.updateOne(
                        { _id: id },
                        { $set: data }
                  );
            } catch (error) {
                  logger.error(`[putItem] ContenedorMongoDb, ${error.message}`);
                  throw new Error(error);
            }
      }
      /*Metodo para Eliminar */
      async deleteById(id) {
            try {
                  const data = await this.getAll();
                  if (data.find((item) => item._id.toString() === id)) {
                        await this.schema.deleteOne({ _id: id });
                        return id;
                  } else {
                        throw new Error(`no se encontro  el id ${id}`);
                  }
            } catch (error) {
                  logger.error(
                        `[deleteItem] ContenedorMongoDb, ${error.message}`
                  );
                  throw new Error(error);
            }
      }
}
export default ContenedorMongoDb;
