// models/Categoria.js
import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
  Nombre_Categoria: String
});

export default mongoose.models.Categoria || mongoose.model('Categoria', categoriaSchema);
