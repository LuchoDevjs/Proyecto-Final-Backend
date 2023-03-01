/**
 * Clase que representa el carrito de compras de un usuario.
 */
export default class Carrito {
  #id; // Identificador del carrito
  #password; // Contraseña del usuario
  #nombre; // Nombre completo del usuario
  #email; // Correo electrónico del usuario
  #direccion; // Dirección del usuario
  #telefono; // Número de teléfono del usuario
  #type; // Tipo de usuario (admin, customer, etc.)
  #timestamps; // Fechas y horas importantes relacionadas con el carrito

  /**
   * Constructor de la clase.
   * @param {Object} userDto - Objeto que contiene los datos del usuario.
   */
  constructor(userDto) {
    this.id = userDto.id;
    this.password = userDto.password;
    this.nombre = userDto.nombre;
    this.email = userDto.email;
    this.direccion = userDto.direccion;
    this.telefono = userDto.telefono;
    this.type = userDto.type;
    this.timestamps = userDto.timestamps;
  }

  // Métodos getter y setter para los atributos de la clase

  set id(value) {
    this.#id = value;
  }

  get id() {
    return this.#id;
  }

  set password(value) {
    this.#password = value;
  }

  get password() {
    return this.#password;
  }

  set nombre(value) {
    this.#nombre = value;
  }

  get nombre() {
    return this.#nombre;
  }

  set email(value) {
    this.#email = value;
  }

  get email() {
    return this.#email;
  }

  set direccion(value) {
    this.#direccion = value;
  }

  get direccion() {
    return this.#direccion;
  }

  set telefono(value) {
    this.#telefono = value;
  }

  get telefono() {
    return this.#telefono;
  }

  set type(value) {
    this.#type = value;
  }

  get type() {
    return this.#type;
  }

  set timestamps(value) {
    this.#timestamps = value;
  }

  get timestamps() {
    return this.#timestamps;
  }
}
