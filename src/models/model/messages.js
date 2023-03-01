import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, // Validación de formato de correo electrónico
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Message", messageSchema);
