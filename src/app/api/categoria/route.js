import { NextResponse } from "next/server";
import connect from "../../../libs/db";
import Categoria from "../../../../models/Categoria";

export const GET = async (request) => {
  try {
    
    await connect()
    // Obtener todas las categorías
    const categorias = await Categoria.find();

    return new NextResponse(JSON.stringify(categorias), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching categories", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connect();
    const body = await request.json();
    console.log("metodo post", body);
    const nuevaCategoria = new Categoria(body);
    await nuevaCategoria.save();
    return new NextResponse(JSON.stringify(nuevaCategoria), { status: 201 });
  } catch (error) {
    console.error("Error al guardar la categoría:", error);
    return new NextResponse("Error al guardar la categoría. Detalles: " + error.message, { status: 500 });
  }
};


export const PUT = async (request) => {
  try {
    
    await connect()
    // Actualizar una categoría existente
    const { id } = request.query;
    const categoriaActualizada = await Categoria.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!categoriaActualizada) {
      return new NextResponse("Category not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(categoriaActualizada), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in updating category", { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    await connect()

    // Eliminar una categoría
    const { id } = request.query;
    const categoriaEliminada = await Categoria.findByIdAndRemove(id);

    if (!categoriaEliminada) {
      return new NextResponse("Category not found", { status: 404 });
    }

    return new NextResponse("Category deleted", { status: 204 });
  } catch (error) {
    return new NextResponse("Error in deleting category", { status: 500 });
  }
};
