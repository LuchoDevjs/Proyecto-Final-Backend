import mongoose, { Schema } from "mongoose";

const user = new Schema(
  {
    password: { type: String, require: true }, // Contraseña del usuario
    email: {
      // Correo electrónico del usuario
      type: String,
      require: true,
      unique: true,
      index: true,
      validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    },
    nombre: { type: String, required: true }, // Nombre del usuario
    direccion: { type: String, required: true }, // Dirección del usuario
    telefono: { type: String, required: true }, // Número de teléfono del usuario
    type: { type: String, required: true }, // Tipo de usuario (por ejemplo, "cliente" o "administrador")
  },
  { timestamps: true }
);

export default mongoose.model("User", user);
