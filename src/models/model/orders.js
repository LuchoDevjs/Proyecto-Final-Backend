import mongoose, { Schema } from 'mongoose';

const order = new Schema(
      {
            email: {
                  type: String,
                  require: true,
                  validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            },
            estado: { type: String, required: true },
            productos: { type: Array, required: true },
            order: { type: Number, required: true },
      },
      { timestamps: true }
);

export default mongoose.model('Order', order);
