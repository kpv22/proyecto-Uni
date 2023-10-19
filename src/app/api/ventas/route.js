import { NextResponse } from "next/server";
import connect from "../../../libs/db";
import Venta from "../../../../models/Venta";

export const GET = async (request) => {
  try {
    

    // Obtener todas las ventas
    const ventas = await Venta.find();

    return new NextResponse(JSON.stringify(ventas), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching sales", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    

    // Crear una nueva venta
    const nuevaVenta = new Venta(request.body);
    await nuevaVenta.save();

    return new NextResponse(JSON.stringify(nuevaVenta), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in creating sale", { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
    

    // Actualizar una venta existente
    const { id } = request.query;
    const ventaActualizada = await Venta.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!ventaActualizada) {
      return new NextResponse("Sale not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(ventaActualizada), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in updating sale", { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    

    // Eliminar una venta
    const { id } = request.query;
    const ventaEliminada = await Venta.findByIdAndRemove(id);

    if (!ventaEliminada) {
      return new NextResponse("Sale not found", { status: 404 });
    }

    return new NextResponse("Sale deleted", { status: 204 });
  } catch (error) {
    return new NextResponse("Error in deleting sale", { status: 500 });
  }
};

