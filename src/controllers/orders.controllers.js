import productsModel from "../models/model/products.js";
import cartsService from "../service/carts.service.js";
import productsService from "../service/products.service.js";
import orderService from "../service/orders.service.js";
import enviarMail from "../utils/EmailSender.js";

class OrdersController {
  constructor() {}

  // Obtener todas las órdenes
  async getAllOrders(req, res) {
    try {
      const orders = await orderService.getAllOrders();
      return res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error al obtener todas las órdenes." });
    }
  }

  // Obtener una orden por correo electrónico
  async getOrderByEmail(req, res) {
    try {
      const { email } = req.params;
      const order = await orderService.getOrderByEmail(email);
      if (!order) {
        return res.status(404).json({ message: "Orden no encontrada." });
      }
      return res.status(200).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error al obtener la orden." });
    }
  }

  // Crear una nueva orden
  async createOrder(req, res) {
    try {
      const { body } = req;
      const cart = await cartsService.getCartById(body.cartId);
      const productsList = [];
      let total = 0;
      for (const cartProduct of cart.productos) {
        const product = await productsService.getProductById(cartProduct.id);
        const productData = {
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          imagen: product.imagen,
          descripcion: product.descripcion,
          cantidad: cartProduct.cantidad,
          precioTotal: product.precio * cartProduct.cantidad,
        };
        productsList.push(productData);
        total += productData.precioTotal;
      }
      const orders = await orderService.getAllOrders();
      const order = {
        productos: productsList,
        email: cart.email,
        estado: "generado",
        order: orders.length + 1,
      };
      let productsHtml = "";
      order.productos.forEach((producto) => {
        productsHtml += `<li>Nombre: ${producto.nombre}</li>
                                  <li>Precio: ${producto.precio}</li>
                                  <li>Cantidad: ${producto.cantidad}</li>
                                  <li>Precio Total: ${producto.precioTotal}</li>`;
      });
      enviarMail(
        `Nueva Orden N°${order.order}`,
        `<div>
                    <h1>Datos Nuevo Registro</h1>
                    <ul>
                        <li>Email: ${order.email}</li>
                        <li>Estado: ${order.estado}</li>
                        <ul>
                            ${productsHtml}
                        </ul> 
                        <li>Total: ${total}</li>
                    </ul> 
                </div>`
      );
      cart.productos = [];
      await cartsService.updateCart(body.cartId, cart);
      return res.status(201).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error al crear la orden." });
    }
  }
}

export default new OrdersController();
