export default class CartDto {
      constructor(cart) {
            this.id = cart.id;
            this.productos = cart.productos;
            this.user = cart.user;
            this.email = cart.email;
            this.direccion = cart.direccion;
            this.timestamp = cart.timestamp;
      }
}
