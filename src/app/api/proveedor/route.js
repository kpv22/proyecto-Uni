import { NextResponse } from "next/server";
import connect from "../../../libs/db";
import Proveedor from "../../../../models/Proveedor";

export const GET = async (request) => {
  try {
    
    await connect()
    // Obtener todos los proveedores
    const proveedores = await Proveedor.find();

    return new NextResponse(JSON.stringify(proveedores), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching providers", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connect()

    // Crear un nuevo proveedor
    const body = await request.json();
    const nuevoProveedor = new Proveedor(body);
    await nuevoProveedor.save();

    return new NextResponse(JSON.stringify(nuevoProveedor), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in creating provider", { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
    await connect()

    // Actualizar un proveedor existente
    const { id } = request.query;
    const proveedorActualizado = await Proveedor.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!proveedorActualizado) {
      return new NextResponse("Provider not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(proveedorActualizado), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in updating provider", { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    
    await connect()
    // Eliminar un proveedor
    const { id } = request.query;
    const proveedorEliminado = await Proveedor.findByIdAndRemove(id);

    if (!proveedorEliminado) {
      return new NextResponse("Provider not found", { status: 404 });
    }

    return new NextResponse("Provider deleted", { status: 204 });
  } catch (error) {
    return new NextResponse("Error in deleting provider", { status: 500 });
  }
};
