import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getVentaById(request) {
  const { id } = request.params;

  try {
    const venta = await prisma.venta.findUnique({
      where: { ID_Venta: Number(id) }
    });

    if (!venta) {
      return new NextResponse(404, { error: 'Venta no encontrada' });
    }

    return new NextResponse(200, JSON.stringify(venta));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener la venta' });
  }
}