import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
  Descripcion: {
    type: String,
    required: true
  },
  Precio_Unitario: {
    type: Number,
    required: true
  },
  ID_Categoria: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  ID_Proveedor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  Stock: {
    type: Number,
    required: true
  }
}, {
  _id: false
});

const detallesVentaSchema = new mongoose.Schema({
  Productos: {
    type: [productoSchema],
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.models.DetallesVenta || mongoose.model('DetallesVenta', detallesVentaSchema);
