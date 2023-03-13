// Importamos el servicio de productos
import productsService from "../service/products.service.js";

// Creamos la clase ProductController
class ProductController {
  constructor() {}

  // Obtiene todos los productos según la categoría especificada en la consulta de la solicitud o todos los productos
  async getAllProducts(req, res, next) {
    try {
      // Si la consulta no tiene una categoría, obtenemos todos los productos
      if (!req.query.categoria) {
        const data = await productsService.getAllProducts();
        return res.status(200).json(data);
      } else {
        // Si la consulta tiene una categoría, obtenemos los productos según la categoría
        const data = await productsService.getByCategoria(req.query.categoria);
        return res.status(200).json(data);
      }
    } catch (error) {
      // Si hay un error, enviamos una respuesta con un código de estado 500 y un mensaje de error
      res.status(500).json(error.message);
    }
  }

  // Obtiene un producto según el id especificado en la solicitud
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const data = await productsService.getProductById(id);
      return res.status(200).json(data);
    } catch (error) {
      // Si hay un error, enviamos una respuesta con un código de estado 500 y un mensaje de error
      res.status(500).json(error.message);
    }
  }

  // Crea un nuevo producto
  async createProduct(req, res) {
    try {
      const { file, body } = req;
      // Agregamos la ruta de la imagen al cuerpo de la solicitud
      body.imagen = `../img/productos/${req.file.filename}`;
      const data = await productsService.createProduct(body);
      return res.status(201).json(data);
    } catch (error) {
      // Si hay un error, enviamos una respuesta con un código de estado 500 y un mensaje de error
      res.status(500).json(error.message);
    }
  }

  // Elimina un producto según el id especificado en la solicitud
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await productsService.deleteProduct(id);
      const data = await productsService.getAllProducts();
      return res.status(200).json(data);
    } catch (error) {
      // Si hay un error, enviamos una respuesta con un código de estado 500 y un mensaje de error
      res.status(500).json(error.message);
    }
  }

  // Actualiza un producto según el id especificado en la solicitud
  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { file, body } = req;
      await productsService.updateProduct(id, body);
      const data = await productsService.getAllProducts();
      return res.status(200).json(data);
    } catch (error) {
      // Si hay un error, enviamos una respuesta con un código de estado 500 y un mensaje de error
      res.status(500).json(error.message);
    }
  }
}

// Exportamos una instancia de la clase ProductController
export default new ProductController();
