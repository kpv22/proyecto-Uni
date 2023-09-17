import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function updateDetalleVenta(request) {
  const { id } = request.params;

  try {
    const updatedDetalle = await prisma.detallesVenta.update({
      where: { ID_Detalle: Number(id) },
      data: request.body
    });

    return new NextResponse(200, JSON.stringify(updatedDetalle));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al actualizar el detalle de venta' });
  }
}