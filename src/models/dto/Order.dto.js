export default class OrderDto {
      constructor(order) {
            this.id = order.id;
            this.productos = order.productos;
            this.estado = order.estado;
            this.email = order.email;
            this.order = order.order;
            this.timestamp = order.timestamp;
      }
}
