// models/Producto.js
import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  Nombre: String,
  Descripcion: String,
  Precio_Unitario: Number,
  ID_Categoria: mongoose.Schema.Types.ObjectId,
  ID_Proveedor: mongoose.Schema.Types.ObjectId,
  Stock: Number
});

export default mongoose.models.Producto || mongoose.model('Producto', productoSchema);

