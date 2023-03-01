import nodemailer from "nodemailer"; // Importamos la librería Nodemailer para enviar correos electrónicos
import config from "../config/config.js"; // Importamos el archivo de configuración
import logger from "./Loggers.js"; // Importamos nuestro logger personalizado

// Creamos un objeto transporter con la configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: config.EMAIL_SERVICE, // El servicio que utilizaremos para enviar correos (por ejemplo, Gmail)
  port: 587, // El puerto que utilizaremos para conectarnos al servidor SMTP
  auth: {
    user: config.EMAIL, // La dirección de correo electrónico del remitente
    pass: config.EMAIL_PASS, // La contraseña de la cuenta de correo electrónico del remitente
  },
});

// Función asíncrona que envía un correo electrónico con el asunto y el contenido HTML especificados
const enviarMail = async (subject, html) => {
  const mailOptions = {
    from: config.EMAIL, // La dirección de correo electrónico del remitente
    to: config.EMAIL_DESTINATARIO, // La dirección de correo electrónico del destinatario
    subject: subject, // El asunto del correo electrónico
    html: html, // El contenido HTML del correo electrónico
  };

  try {
    const result = await transporter.sendMail(mailOptions); // Enviamos el correo electrónico utilizando el objeto transporter
  } catch (error) {
    logger.error("error", error); // Si hay un error, lo registramos en nuestro logger personalizado
    throw new Error(error.message); // Lanzamos una excepción con el mensaje de error
  }
};

export default enviarMail; // Exportamos la función enviarMail para que pueda ser utilizada en otros archivos de nuestro proyecto
