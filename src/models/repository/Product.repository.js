import ProductDaosFactory from "./../dao/productDaoFactory.js";
import ProductDto from "./../dto/Product.dto.js";
import Product from "./../Product.model.js";

export default class ProductRepository {
  constructor() {
    // Obtiene la instancia de ProductDao creada por el factory
    this.productDao = ProductDaosFactory.getProductDao();
  }

  async create(productData) {
    try {
      // Crea un objeto ProductDto a partir de los datos del producto y lo inserta en la base de datos
      const productDto = await this.productDao.create(
        new ProductDto(productData)
      );
      // Crea un objeto Product a partir del objeto ProductDto creado
      return new Product(productDto);
    } catch (error) {
      // Lanza un error si no se puede crear el producto
      throw new Error(error);
    }
  }

  async getAll(query) {
    try {
      // Obtiene todos los productos de la base de datos según el query especificado
      const productsDto = await this.productDao.getAll(query);
      // Convierte cada objeto ProductDto en un objeto Product y los devuelve en un array
      return productsDto.map((productDto) => new Product(productDto));
    } catch (error) {
      // Lanza un error si no se pueden obtener los productos
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      // Obtiene un producto de la base de datos según su ID
      const productDto = await this.productDao.getById(id);
      // Crea un objeto Product a partir del objeto ProductDto obtenido
      return new Product(productDto);
    } catch (error) {
      // Lanza un error si no se puede obtener el producto
      throw new Error(error);
    }
  }

  async getByParameter(value, parameter) {
    try {
      // Obtiene todos los productos de la base de datos que coinciden con el parámetro de búsqueda especificado
      const productsDto = await this.productDao.getByParameter(
        value,
        parameter
      );
      // Convierte cada objeto ProductDto en un objeto Product y los devuelve en un array
      return productsDto.map((productDto) => new Product(productDto));
    } catch (error) {
      // Lanza un error si no se pueden obtener los productos
      throw new Error(error);
    }
  }

  async update(id, newData) {
    try {
      // Actualiza un producto de la base de datos según su ID con los nuevos datos proporcionados
      await this.productDao.updateById(id, newData);
      return;
    } catch (error) {
      // Lanza un error si no se puede actualizar el producto
      throw new Error(error);
    }
  }

  async deleteById(id) {
    try {
      // Elimina un producto de la base de datos según su ID
      await this.productDao.deleteById(id);
      return;
    } catch (error) {
      // Lanza un error si no se puede eliminar el producto
      throw new Error(error);
    }
  }
}
