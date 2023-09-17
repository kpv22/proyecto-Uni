import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function updateInventario(request) {
  const { id } = request.params;

  try {
    const updatedInventario = await prisma.inventario.update({
      where: { ID_Inventario: Number(id) },
      data: request.body
    });

    return new NextResponse(200, JSON.stringify(updatedInventario));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al actualizar inventario' });
  }
}