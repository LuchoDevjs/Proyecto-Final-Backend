import bcrypt from "bcrypt"; // Importamos la librería bcrypt para cifrar contraseñas

const saltRounds = 10; // Establecemos el número de rondas de sal que se utilizarán para cifrar las contraseñas

// Función que cifra una contraseña utilizando bcrypt
export const encrypt = (password) => {
  try {
    const salt = bcrypt.genSaltSync(saltRounds); // Generamos una nueva sal para cifrar la contraseña
    const hash = bcrypt.hashSync(password, salt); // Ciframos la contraseña utilizando la sal generada
    return hash; // Devolvemos el resultado cifrado
  } catch (error) {
    throw new Error(error.message); // Si ocurre un error, lanzamos una excepción con el mensaje de error
  }
};

// Función que compara una contraseña sin cifrar con una contraseña cifrada utilizando bcrypt
export const decrypt = (password, hashedPassword) => {
  try {
    const match = bcrypt.compareSync(password, hashedPassword); // Comparamos las dos contraseñas utilizando bcrypt
    return match; // Devolvemos true si las contraseñas coinciden, false en caso contrario
  } catch (error) {
    throw new Error(error.message); // Si ocurre un error, lanzamos una excepción con el mensaje de error
  }
};
