import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getDetalleVentaById(request) {
  const { id } = request.params;

  try {
    const detalle = await prisma.detallesVenta.findUnique({
      where: { ID_Detalle: Number(id) }
    });

    if (!detalle) {
      return new NextResponse(404, { error: 'Detalle de venta no encontrado' });
    }

    return new NextResponse(200, JSON.stringify(detalle));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener el detalle de venta' });
  }
}