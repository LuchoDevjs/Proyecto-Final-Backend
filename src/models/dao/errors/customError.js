/**
 * Clase que representa un error personalizado con status, descripción y detalles
 */
export class CustomError {
  constructor(statusCode, description, details = {}) {
    this.statusCode = statusCode;
    this.description = description;
    this.details = details;
  }
}

/**
 * Clase que representa un error de recurso no encontrado
 */
export class NotFoundError extends CustomError {
  constructor(description, details = {}) {
    // El error de recurso no encontrado siempre tendrá código de estado 404
    super(404, description, details);
  }
}
