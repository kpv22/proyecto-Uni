// models/Proveedor.js
import mongoose from 'mongoose';

const proveedorSchema = new mongoose.Schema({
  Nombre: String,
  Direccion: String,
  Telefono: String,
  Correo_Electronico: String
});

export default mongoose.models.Proveedor || mongoose.model('Proveedor', proveedorSchema);
