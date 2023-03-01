export default class Mensajes {
  #id;
  #tipo;
  #email;
  #mensaje;
  #fecha;

  constructor(MensajeDto) {
    this.id = MensajeDto.id;
    this.tipo = MensajeDto.tipo;
    this.email = MensajeDto.email;
    this.mensaje = MensajeDto.mensaje;
    this.fecha = MensajeDto.fecha;
  }
  set id(value) {
    this.#id = value;
  }
  get id() {
    return this.#id;
  }
  set tipo(value) {
    this.#tipo = value;
  }
  get tipo() {
    return this.#tipo;
  }
  set email(value) {
    this.#email = value;
  }
  get email() {
    return this.#email;
  }
  set mensaje(value) {
    this.#mensaje = value;
  }
  get mensaje() {
    return this.#mensaje;
  }

  set fecha(value) {
    this.#fecha = value;
  }
  get fecha() {
    return this.#fecha;
  }
}
