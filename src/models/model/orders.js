import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    },
    status: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    orderNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
