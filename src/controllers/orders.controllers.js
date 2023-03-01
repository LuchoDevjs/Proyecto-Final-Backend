import products from '../models/model/products.js';
import cartsService from '../service/carts.service.js';
import productsService from '../service/products.service.js';
import orderService from '../service/orders.service.js';
import enviarMail from '../utils/EmailSender.js';

class OrdersController {
      constructor() {}
      async getAllOrders(req, res) {
            const data = await orderService.getAllOrders();
            return res.status(200).json(data);
      }

      async getOrderByEmail(req, res) {
            try {
                  const { email } = req.params;
                  const data = await orderService.getOrderByEmail(email);
                  return res.status(200).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
      async createOrders(req, res) {
            try {
                  const { body } = req;
                  const cart = await cartsService.getCartById(body.idCart);
                  let total = 0;
                  const products = [];
                  for (const producto of cart.productos) {
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
                        products.push(prod);
                        total += prod.precioTotal;
                  }
                  const orders = await orderService.getAllOrders();
                  let order = {
                        productos: products,
                        email: cart.email,
                        estado: 'generado',
                        order: orders.length + 1,
                  };
                  let producList = '';
                  const data = await orderService.createOrders(order);
                  order.productos.map((producto) => {
                        producList += `<li>Nombre: ${producto.nombre}</li>
            <li>Precio: ${producto.precio}</li>
            <li>Cantidad: ${producto.cantidad}</li><li>Precio Total: ${producto.precioTotal}</>`;
                  });
                  enviarMail(
                        `Nueva Orden N°${order.order}`,
                        `<div>
                                       <h1>Datos Nuevo Registro</h1>
                            <ul>
                            <li>Email:${order.email}</li>
                            <li>estado:${order.estado}</li>
                             <ul>
                             ${producList}
                            </ul> 
                            <li>Total: ${total}</li>
                            </ul> 
                                        </div>`
                  );
                  cart.productos = [];
                  await cartsService.updateCart(body.idCart, cart);
                  return res.status(201).json(data);
            } catch (error) {
                  res.status(500).json(error.message);
            }
      }
}
export default new OrdersController();
