// Importar los servicios de carritos y productos
import cartService from "../service/carts.service.js";
import productService from "../service/products.service.js";

class CartController {
  constructor() {}

  // Obtener todos los carritos
  async getAllCarts(req, res) {
    try {
      const carts = await cartService.getAllCarts();
      return res.status(200).json(carts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Obtener un carrito por ID
  async getCartById(req, res) {
    try {
      const { id } = req.params;
      const cart = await cartService.getCartById(id);
      return res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Obtener un carrito por ID de usuario
  async getCartByUserId(req, res) {
    try {
      const { userId } = req.params;
      const cart = await cartService.getCartByUserId(userId);
      return res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Crear un nuevo carrito
  async createCart(req, res) {
    try {
      const { body } = req;
      const newCart = await cartService.createCart(body);
      return res.status(201).json(newCart);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // Eliminar un carrito por ID
  async deleteCart(req, res) {
    try {
      const { id } = req.params;
      await cartService.deleteCart(id);
      const carts = await cartService.getAllCarts();
      return res.status(200).json(carts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateCart(req, res) {
    try {
      const { body } = req; // Obtiene el cuerpo de la solicitud HTTP
      await cartsService.updateCart(body.cartId, body); // Actualiza el carrito con el ID especificado
      const updatedCarts = await cartsService.getAllCarts(); // Obtiene todos los carritos actualizados
      return res.status(200).json(updatedCarts); // Envía la respuesta HTTP con los carritos actualizados en formato JSON
    } catch (error) {
      res.status(500).json(error.message); // Maneja errores de servidor
    }
  }

  async addNewProductToCart(req, res) {
    try {
      const { cartId } = req.params; // Obtiene el ID del carrito de la solicitud HTTP
      const { body } = req; // Obtiene el cuerpo de la solicitud HTTP
      const newProduct = {
        id: body.productId,
        cantidad: body.quantity,
      }; // Crea un objeto nuevo producto con la información del cuerpo de la solicitud HTTP
      const cart = await cartsService.getCartById(cartId); // Obtiene el carrito con el ID especificado

      if (cart.productos.some((product) => product.id === newProduct.id)) {
        // Comprueba si el producto ya existe en el carrito
        let productDetails = await productsService.getProductById(
          newProduct.id
        ); // Obtiene los detalles del producto desde el servicio de productos
        cart.productos.map((product) => {
          // Itera sobre los productos en el carrito
          if (product.id === newProduct.id) {
            // Comprueba si el producto actual es el mismo que el nuevo producto
            product.cantidad += newProduct.cantidad; // Aumenta la cantidad del producto actual
            if (product.cantidad > productDetails.stock) {
              // Comprueba si la cantidad del producto en el carrito es mayor que el stock disponible
              let message = `No hay suficiente stock para ${newProduct.cantidad} productos.`;
              return res.status(400).json(message); // Envía una respuesta HTTP de error si no hay suficiente stock
            }
          }
        });
      } else {
        cart.productos = [...cart.productos, newProduct]; // Agrega el nuevo producto al carrito si no existe
      }

      await cartsService.updateCart(cartId, cart); // Actualiza el carrito con los productos nuevos o actualizados
      return res.status(200).json(cartId); // Envía una respuesta HTTP con el ID del carrito actualizado
    } catch (error) {
      res.status(500).json(error.message); // Maneja errores de servidor
    }
  }

  async getProductosInCart(req, res) {
    try {
      const { id } = req.params;
      const cartData = await cartsService.getCartById(id); // Obtener datos del carrito por ID
      const productos = [];
      for (const item of cartData.productos) {
        // Recorrer cada producto en el carrito
        let prod = await productsService.getProductById(item.id); // Obtener detalles del producto por ID
        prod = {
          id: prod.id,
          nombre: prod.nombre,
          precio: prod.precio,
          imagen: prod.imagen,
          descripcion: prod.descripcion,
          cantidad: item.cantidad,
          precioTotal: prod.precio * item.cantidad,
        };
        productos.push(prod); // Agregar producto modificado al array de productos
      }
      return res.status(200).json(productos); // Devolver la lista de productos en el carrito
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async removeProductFromCart(req, res) {
    try {
      const { idCart, idProduct } = req.params;
      let cartData = await cartsService.getCartById(idCart); // Obtener datos del carrito por ID
      cartData.productos = cartData.productos.filter(
        // Filtrar productos para eliminar el producto con el ID especificado
        (product) => product.id !== idProduct
      );
      await cartsService.updateCart(idCart, cartData); // Actualizar el carrito con los nuevos datos
      return res.status(200).json(cartData); // Devolver los datos actualizados del carrito
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new CartController();
