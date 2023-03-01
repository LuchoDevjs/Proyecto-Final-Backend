export default class CarritoDeCompras {
  #id;
  #productos;
  #usuario;
  #direccionEnvio;
  #email;
  #fechaCreacion;

  constructor(carrito) {
    this.id = carrito.id;
    this.productos = carrito.productos;
    this.usuario = carrito.usuario;
    this.email = carrito.email;
    this.direccionEnvio = carrito.direccionEnvio;
    this.fechaCreacion = carrito.fechaCreacion;
  }

  // Getter y setter para id
  set id(value) {
    this.#id = value;
  }
  get id() {
    return this.#id;
  }

  // Getter y setter para productos
  set productos(value) {
    this.#productos = value;
  }
  get productos() {
    return this.#productos;
  }

  // Getter y setter para usuario
  set usuario(value) {
    this.#usuario = value;
  }
  get usuario() {
    return this.#usuario;
  }

  // Getter y setter para email
  set email(value) {
    this.#email = value;
  }
  get email() {
    return this.#email;
  }

  // Getter y setter para direccionEnvio
  set direccionEnvio(value) {
    this.#direccionEnvio = value;
  }
  get direccionEnvio() {
    return this.#direccionEnvio;
  }

  // Getter y setter para fechaCreacion
  set fechaCreacion(value) {
    this.#fechaCreacion = value;
  }
  get fechaCreacion() {
    return this.#fechaCreacion;
  }
}
