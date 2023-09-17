import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function deleteVenta(request) {
  const { id } = request.params;

  try {
    const deletedVenta = await prisma.venta.delete({
      where: { ID_Venta: Number(id) }
    });

    return new NextResponse(200, JSON.stringify(deletedVenta));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al eliminar la venta' });
  }
}