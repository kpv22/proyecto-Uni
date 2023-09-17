import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getInventarioById(request) {
  const { id } = request.params;

  try {
    const inventario = await prisma.inventario.findUnique({
      where: { ID_Inventario: Number(id) }
    });

    if (!inventario) {
      return new NextResponse(404, { error: 'Inventario no encontrado' });
    }

    return new NextResponse(200, JSON.stringify(inventario));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener inventario' });
  }
}