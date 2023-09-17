import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function deleteDetalleVenta(request) {
  const { id } = request.params;

  try {
    const deletedDetalle = await prisma.detallesVenta.delete({
      where: { ID_Detalle: Number(id) }
    });

    return new NextResponse(200, JSON.stringify(deletedDetalle));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al eliminar el detalle de venta' });
  }
}