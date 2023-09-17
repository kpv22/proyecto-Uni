import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function deleteInventario(request) {
  const { id } = request.params;

  try {
    const deletedInventario = await prisma.inventario.delete({
      where: { ID_Inventario: Number(id) }
    });

    return new NextResponse(200, JSON.stringify(deletedInventario));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al eliminar inventario' });
  }
}