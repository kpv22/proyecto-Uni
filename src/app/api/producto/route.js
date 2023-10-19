import { NextResponse } from "next/server";
import connect from "../../../libs/db";
import Producto from "../../../../models/Producto";

export const GET = async (request) => {
  try {
    
    await connect()
    // Obtener todos los productos
    const productos = await Producto.find();

    return new NextResponse(JSON.stringify(productos), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connect()
    const body = await request.json();
    // Crear un nuevo producto
    const nuevoProducto = new Producto(body);
    await nuevoProducto.save();

    return new NextResponse(JSON.stringify(nuevoProducto), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in creating product", { status: 500 });
  }
};

// export const PUT = async (request) => {
//   try {
    
//     await connect()
//     // Actualizar un producto existente
//     // console.log(request.body);
//     const { id } = request.query;
//     const productoActualizado = await Producto.findByIdAndUpdate(id, request.body, {
//       new: true,
//     });

//     if (!productoActualizado) {
//       return new NextResponse("Product not found", { status: 404 });
//     }

//     return new NextResponse(JSON.stringify(productoActualizado), { status: 200 });
//   } catch (error) {
//     return new NextResponse("Error in updating product", { status: 500 });
//   }
// };

export const DELETE = async (request) => {
  try {
    await connect()

    // Eliminar un producto
    const { id } = request.query;
    const productoEliminado = await Producto.findByIdAndRemove(id);

    if (!productoEliminado) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return new NextResponse("Product deleted", { status: 204 });
  } catch (error) {
    return new NextResponse("Error in deleting product", { status: 500 });
  }
};