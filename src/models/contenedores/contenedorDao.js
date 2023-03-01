import { CustomError } from "../dao/errors/customError.js";

// Clase abstracta para definir los métodos básicos de acceso a una base de datos MongoDB
class MongoDao {
  // Obtener todos los documentos de la colección
  async getAll() {
    throw new CustomError(500, "El método no ha sido implementado");
  }

  // Obtener un documento por su ID
  async getById(id) {
    throw new CustomError(500, "El método no ha sido implementado");
  }

  // Crear un nuevo documento
  async create(data) {
    throw new CustomError(500, "El método no ha sido implementado");
  }

  // Actualizar un documento por su ID
  async updateById(id, data) {
    throw new CustomError(500, "El método no ha sido implementado");
  }

  // Eliminar un documento por su ID
  async deleteById(id) {
    throw new CustomError(500, "El método no ha sido implementado");
  }
}

export default MongoDao;
