import { NextResponse } from "next/server";
import connect from "../../../libs/db";
import DetallesVenta from "../../../../models/DetalleVenta";

export const GET = async (request) => {
  try {
    await connect()

    // Obtener todos los detalles de venta
    const detallesVenta = await DetallesVenta.find();

    return new NextResponse(JSON.stringify(detallesVenta), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching details of sale", { status: 500 });
  }
};

// export const POST = async (request) => {
//   try {
//     await connect()
//     const body = await request.json();
// console.log(body);
//     // Crear un nuevo detalle de venta
//     const nuevoDetalleVenta = new DetallesVenta(body);
//     await nuevoDetalleVenta.save();

//     return new NextResponse(JSON.stringify(nuevoDetalleVenta), { status: 201 });
//   } catch (error) {
//     return new NextResponse("Error in creating detail of sale", { status: 500 });
//   }
// };



export const POST = async (request) => {
  try {
    await connect(); // Conexión a MongoDB.
    const body = await request.json();

    // Convertir cada _id a ObjectId
    // body.forEach(producto => {
    //     producto._id = mongoose.Types.ObjectId(producto._id);
    // });
console.log(body);
    // Crear un nuevo detalle de venta
    const nuevoDetalleVenta = new DetallesVenta({
      Productos: body
    });
    await nuevoDetalleVenta.save();

    return new NextResponse(JSON.stringify(nuevoDetalleVenta), { status: 201 });

  } catch (error) {
    console.error("Error en el servidor:", error.message); // Imprime el error en la consola del servidor.
    return new NextResponse(JSON.stringify({ message: "Error in creating detail of sale", error: error.message }), { status: 500 });
  }
};



export const PUT = async (request) => {
  try {
   
    await connect()
    // Actualizar un detalle de venta existente
    const { id } = request.query;
    const detalleVentaActualizado = await DetallesVenta.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!detalleVentaActualizado) {
      return new NextResponse("Detail of sale not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(detalleVentaActualizado), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in updating detail of sale", { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
   

    // Eliminar un detalle de venta
    const { id } = request.query;
    const detalleVentaEliminado = await DetallesVenta.findByIdAndRemove(id);

    if (!detalleVentaEliminado) {
      return new NextResponse("Detail of sale not found", { status: 404 });
    }

    return new NextResponse("Detail of sale deleted", { status: 204 });
  } catch (error) {
    return new NextResponse("Error in deleting detail of sale", { status: 500 });
  }
};
