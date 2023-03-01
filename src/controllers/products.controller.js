import productsService from "../service/products.service.js";

class ProductController {
  constructor() {}

  // Devuelve todos los productos o los productos de una categoría específica
  async getAllProducts(req, res, next) {
    try {
      if (!req.query.categoria) {
        const allProducts = await productsService.getAllProducts();
        return res.status(200).json(allProducts);
      } else {
        const productsByCategory = await productsService.getByCategoria(
          req.query.categoria
        );
        return res.status(200).json(productsByCategory);
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Devuelve un producto por su ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await productsService.getProductById(id);
      return res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Crea un nuevo producto
  async createProduct(req, res) {
    try {
      const { file, body } = req;
      body.imagen = `../img/productos/${req.file.filename}`;
      const newProduct = await productsService.createProduct(body);
      return res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Elimina un producto
  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await productsService.deleteProduct(id);
      const remainingProducts = await productsService.getAllProducts();
      return res.status(200).json(remainingProducts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Actualiza un producto
  async updateProduct(req, res) {
    try {
      const { file, body } = req;
      await productsService.updateProduct(body.id, body);
      const updatedProducts = await productsService.getAllProducts();
      return res.status(200).json(updatedProducts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new ProductController();
