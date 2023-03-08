export default class Product {
  // Variables privadas que se pueden acceder mediante getters y setters
  #id;
  #codigo;
  #nombre;
  #precio;
  #stock;
  #imagen;
  #descripcion;
  #categoria;
  #timestamp;

  // Constructor que inicializa todas las variables a partir de un objeto DTO
  constructor(productoDTO) {
    this.id = productoDTO.id;
    this.codigo = productoDTO.codigo;
    this.nombre = productoDTO.nombre;
    this.precio = productoDTO.precio;
    this.stock = productoDTO.stock;
    this.imagen = productoDTO.imagen;
    this.descripcion = productoDTO.descripcion;
    this.categoria = productoDTO.categoria;
    this.timestamp = productoDTO.timestamp;
  }

  // Getters y setters para cada variable privada
  set id(id) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }

  set codigo(codigo) {
    this.#codigo = codigo;
  }
  get codigo() {
    return this.#codigo;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }
  get nombre() {
    return this.#nombre;
  }

  set precio(precio) {
    this.#precio = precio;
  }
  get precio() {
    return this.#precio;
  }

  set stock(stock) {
    this.#stock = stock;
  }
  get stock() {
    return this.#stock;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }
  get imagen() {
    return this.#imagen;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }
  get descripcion() {
    return this.#descripcion;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }
  get categoria() {
    return this.#categoria;
  }

  set timestamp(timestamp) {
    this.#timestamp = timestamp;
  }
  get timestamp() {
    return this.#timestamp;
  }
}
