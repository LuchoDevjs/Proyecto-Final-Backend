import ProductDaosFactory from './../dao/productDaoFactory.js';
import ProductDto from './../dto/Product.dto.js';
import Producto from './../Product.model.js';

export default class ProdutRepository {
      constructor() {
            this.dao = ProductDaosFactory.getProductDao();
      }
      async create(producto) {
            try {
                  const productDto = await this.dao.create(
                        new ProductDto(producto)
                  );
                  return new Producto(productDto);
            } catch (error) {
                  throw new Error(error);
            }
      }

      async getAll(query) {
            try {
                  const productsDto = await this.dao.getAll(query);
                  return productsDto.map(
                        (productDto) => new Producto(productDto)
                  );
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getById(id) {
            try {
                  const productDto = await this.dao.getById(id);
                  return new Producto(productDto);
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getByParameter(value, parameter) {
            try {
                  const productsDto = await this.dao.getByParameter(
                        value,
                        parameter
                  );
                  return productsDto.map(
                        (productDto) => new Producto(productDto)
                  );
            } catch (error) {
                  throw new Error(error);
            }
      }
      async upDate(id, dato) {
            try {
                  await this.dao.updateById(id, dato);
                  return;
            } catch (error) {
                  throw new Error(error);
            }
      }
      async deleteProduct(id) {
            try {
                  await this.dao.deleteById(id);
                  return;
            } catch (error) {
                  throw new Error(error);
            }
      }
}
