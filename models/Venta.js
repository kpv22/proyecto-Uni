// models/Venta.js
import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
  ID_Empleado: mongoose.Schema.Types.ObjectId,
  Fecha_Venta: Date,
  Total: Number,
  DetallesVenta: [
    mongoose.Schema.Types.ObjectId
  ]
});

export default mongoose.models.Venta || mongoose.model('Venta', ventaSchema);
