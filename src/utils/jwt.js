import jwt from "jsonwebtoken"; // Importamos la librería jsonwebtoken para generar y verificar tokens
import config from "../config/config.js"; // Importamos la configuración de la aplicación

const PRIVATE_KEY = "shhhhhhhh"; // Clave privada utilizada para firmar los tokens

// Función que genera un token JWT a partir de los datos de un usuario
export const generateToken = (user) => {
  try {
    const token = jwt.sign({ data: user }, PRIVATE_KEY, {
      expiresIn: config.TOKEN_TIME, // Establecemos el tiempo de expiración del token a partir de la configuración de la aplicación
    });
    return token; // Devolvemos el token generado
  } catch (error) {
    throw new Error(error.message); // Si ocurre un error, lanzamos una excepción con el mensaje de error
  }
};

// Función que verifica un token JWT y devuelve los datos del usuario si el token es válido
export const verifyJWT = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, PRIVATE_KEY, (error, decoded) => {
      if (error) {
        return reject(error); // Si el token no es válido, rechazamos la promesa con el error recibido
      }
      resolve(decoded.data); // Si el token es válido, resolvemos la promesa con los datos del usuario
    });
  });
