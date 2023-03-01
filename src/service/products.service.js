// Importar las clases necesarias
import ProductRepository from "./../models/repository/Product.repository.js";
import Product from "./../models/Product.model.js";
import ProductDto from "./../models/dto/Product.dto.js";

// Crear una instancia del repositorio
const productRepository = new ProductRepository();

class ProductService {
  constructor() {}

  // Obtener todos los productos
  async getAllProducts(query) {
    try {
      const products = await productRepository.getAll(query);
      return products.map((product) => new ProductDto(product));
    } catch (error) {
      throw new Error(error);
    }
  }

  // Crear un nuevo producto
  async createProduct(data) {
    try {
      const product = await productRepository.create(new Product(data));
      return new ProductDto(product);
    } catch (error) {
      throw new Error(error);
    }
  }

  // Eliminar un producto por su id
  async deleteProduct(id) {
    try {
      await productRepository.deleteProduct(id);
      return id;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Obtener un producto por su id
  async getProductById(id) {
    try {
      const product = await productRepository.getById(id);
      return new ProductDto(product);
    } catch (error) {
      throw new Error(error);
    }
  }

  // Obtener todos los productos por categoría
  async getProductsByCategory(category) {
    try {
      const products = await productRepository.getByParameter(
        category,
        "category"
      );
      return products.map((product) => new ProductDto(product));
    } catch (error) {
      throw new Error(error);
    }
  }

  // Actualizar un producto por su id
  async updateProduct(id, data) {
    try {
      await productRepository.update(id, data);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}

// Exportar una instancia de ProductService
export default new ProductService();
