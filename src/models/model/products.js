import mongoosse, { Schema } from 'mongoose';

const producto = new Schema(
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

export default mongoosse.model('Producto', producto);
