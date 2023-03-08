export default class ProductDto {
  constructor(producto) {
    this.id = producto.id;
    this.codigo = producto.codigo;
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.stock = producto.stock;
    this.imagen = producto.imagen;
    this.descripcion = producto.descripcion;
    this.categoria = producto.categoria;
    this.timestamp = producto.timestamp;
  }
}
