import cartsService from '../service/carts.service.js';
import productsService from '../service/products.service.js';
class CartController {
      constructor() {}
      async getAllCarts(req, res) {
            try {
                  const data = await cartsService.getAllCarts();
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }

      async getCartById(req, res) {
            try {
                  const { id } = req.params;
                  const data = await cartsService.getCartById(id);
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async getCartByIdUser(req, res) {
            try {
                  const { idUser } = req.params;
                  const data = await cartsService.getCartByIdUser(idUser);
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async createCart(req, res) {
            try {
                  const { body } = req;
                  const data = await cartsService.createCart(body);
                  return res.status(201).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }

      async deleteCart(req, res) {
            try {
                  const { id } = req.params;
                  await cartsService.deleteCart(id);
                  const data = await cartsService.getAllCarts();
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async updateCart(req, res) {
            try {
                  const { body } = req;
                  await cartsService.updateCart(body.id, body);
                  const data = await cartsService.getAllCarts();
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async newProduct(req, res) {
            try {
                  const { id } = req.params;
                  const { body } = req;
                  const newProduct = {
                        id: body.productId,
                        cantidad: body.cantidad,
                  };
                  const data = await cartsService.getCartById(id);
                  if (
                        data.productos.some(
                              (product) => product.id === newProduct.id
                        )
                  ) {
                        let prod = await productsService.getProductosById(
                              newProduct.id
                        );
                        data.productos.map((product) => {
                              if (product.id === newProduct.id) {
                                    product.cantidad += newProduct.cantidad;
                                    if (product.cantidad > prod.stock) {
                                          let message = `No hay en stock ${newProduct.cantidad}`;
                                  
                                           res.status(400).json(message);
                                          
                                    }
                              }
                        });
                  } else {
                   
                        data.productos = [...data.productos, newProduct];
                  }
                  await cartsService.updateCart(id, data);
                  return res.status(200).json(req.body.id);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }

      async cartProduct(req, res) {
            try {
                  const { id } = req.params;
                  const data = await cartsService.getCartById(id);
                  const productos = [];
                  for (const producto of data.productos) {
                        let prod = await productsService.getProductosById(
                              producto.id
                        );
                        prod = {
                              id: prod.id,
                              nombre: prod.nombre,
                              precio: prod.precio,
                              imagen: prod.imagen,
                              descripcion: prod.descripcion,
                              cantidad: producto.cantidad,
                              precioTotal: prod.precio * producto.cantidad,
                        };
                        productos.push(prod);
                  }
                  return res.status(200).json(productos);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async deleteProductCart(req, res) {
            try {
                  const { idCart, idProduct } = req.params;
                  let data = await cartsService.getCartById(idCart);
                  data.productos = data.productos.filter(
                        (product) => product.id !== idProduct
                  );
                  await cartsService.updateCart(idCart, data);
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
}
export default new CartController();
