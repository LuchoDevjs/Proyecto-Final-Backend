export default class Ordenes {
  #id;
  #productos;
  #email;
  #timestamp;
  #estado;
  #orden;

  constructor(ordenDto) {
    this.id = ordenDto.id;
    this.productos = ordenDto.productos;
    this.email = ordenDto.email;
    this.estado = ordenDto.estado;
    this.timestamp = ordenDto.timestamp;
    this.orden = ordenDto.orden;
  }

  // Define los setters y getters para cada propiedad privada

  set id(value) {
    this.#id = value;
  }

  get id() {
    return this.#id;
  }

  set productos(value) {
    this.#productos = value;
  }

  get productos() {
    return this.#productos;
  }

  set email(value) {
    this.#email = value;
  }

  get email() {
    return this.#email;
  }

  set estado(value) {
    this.#estado = value;
  }

  get estado() {
    return this.#estado;
  }

  set orden(value) {
    this.#orden = value;
  }

  get orden() {
    return this.#orden;
  }

  set timestamp(value) {
    this.#timestamp = value;
  }

  get timestamp() {
    return this.#timestamp;
  }
}
