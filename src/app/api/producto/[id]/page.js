import connectDB from "@/libs/db";
import Producto from "../../../../../models/Producto";

export default async function handler(req, res) {
  try {
    await connectDB();
    // Actualizar un producto existente
    const { id } = req.params;
    console.log(id);
    const productoActualizado = await Producto.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!productoActualizado) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(productoActualizado);
  } catch (error) {
    console.log(error);
  }
}


