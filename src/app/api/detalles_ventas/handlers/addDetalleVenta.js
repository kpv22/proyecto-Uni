import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";


export default async function addDetalleVenta(request) {
  const { ID_Venta, ID_Producto, Cantidad, Subtotal } = request.body;

  try {
    const newDetalleVenta = await prisma.detallesVenta.create({
      data: { ID_Venta, ID_Producto, Cantidad, Subtotal }
    });
    
    return new NextResponse(201, JSON.stringify(newDetalleVenta));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al agregar el detalle de venta' });
  }
}
  