import mongoose, { Schema } from "mongoose";

// Definir el esquema para el modelo Producto
const productoSchema = new Schema(
  {
    codigo: { type: Number, unique: true, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    imagen: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
  },
  { timestamps: true }
);

// Exportar el modelo Producto utilizando el esquema definido
export default mongoose.model("Producto", productoSchema);
