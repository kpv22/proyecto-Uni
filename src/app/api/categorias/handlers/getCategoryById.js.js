import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getCategoryById(request) {
  const { id } = request.params;

  try {
    const category = await prisma.categoria.findUnique({
      where: { ID_Categoria: Number(id) }
    });

    if (!category) {
      return new NextResponse(404, { error: 'Categoría no encontrada' });
    }

    return new NextResponse(200, JSON.stringify(category));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener categoría' });
  }
}