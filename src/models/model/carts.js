import mongoosse, { Schema } from 'mongoose';

const carrito = new Schema(
      {
            productos: { type: Array, required: true },
            email: {
                  type: String,
                  require: true,
                  validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            },
            direccion: { type: String, required: true },
            user: { type: String, required: true },
      },
      { timestamps: true }
);

export default mongoosse.model('Carrito', carrito);
