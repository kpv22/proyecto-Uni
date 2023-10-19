// models/Empleado.js
import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  Direccion: String,
  Telefono: String,
  Puesto: String,
  Ventas: [
    mongoose.Schema.Types.ObjectId
  ]
});

export default mongoose.models.Empleado || mongoose.model('Empleado', empleadoSchema);

