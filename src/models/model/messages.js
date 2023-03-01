import mongoose, { Schema } from 'mongoose';
const message = new Schema({
      email: {
            type: String,
            require: true,
            validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
      },
      type: { type: String, required: true },
      message: { type: String, required: true },
      date: { type: String, required: true },
});

export default mongoose.model('Message', message);
