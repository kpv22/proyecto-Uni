import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function updateVenta(request) {
  const { id } = request.params;

  try {
    const updatedVenta = await prisma.venta.update({
      where: { ID_Venta: Number(id) },
      data: request.body
    });

    return new NextResponse(200, JSON.stringify(updatedVenta));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al actualizar la venta' });
  }
}