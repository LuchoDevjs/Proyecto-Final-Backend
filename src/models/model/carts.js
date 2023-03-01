import mongoose, { Schema } from "mongoose";

// Definimos el esquema del carrito
const cartSchema = new Schema(
  {
    products: {
      type: Array,
      required: true,
    },
    email: {
      type: String,
      require: true,
      validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    },
    address: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Creamos y exportamos el modelo del carrito
export default mongoose.model("Cart", cartSchema);
