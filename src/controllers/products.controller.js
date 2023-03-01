import productsService from '../service/products.service.js';
class ProductController {
      constructor() {}
      async getAllProducts(req, res, next) {
            try {
                  if (!req.query.categoria) {
                        const data = await productsService.getAllProducts();
                        return res.status(200).json(data);
                  } else {
                        const data = await productsService.getByCategoria(
                              req.query.categoria
                        );
                        return res.status(200).json(data);
                  }
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }

      async getProductosById(req, res) {
            try {
                  const { id } = req.params;
                  const data = await productsService.getProductosById(id);
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }

      async createProduct(req, res) {
            try {
                  const { file, body } = req;
                  body.imagen = `../img/productos/${req.file.filename}`;
                  const data = await productsService.createProduct(body);
                  return res.status(201).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }

      async deleteProduct(req, res) {
            try {
                  const { id } = req.params;
                  await productsService.deleteProduct(id);
                  const data = await productsService.getAllProducts();
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async updateProduct(req, res) {
            try {
                  const { file, body } = req;
                  await productsService.updateProduct(body.id, body);
                  const data = await productsService.getAllProducts();
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
}
export default new ProductController();
