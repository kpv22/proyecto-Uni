import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function updateCategory(request) {
  const { id } = request.params;

  try {
    const updatedCategory = await prisma.categoria.update({
      where: { ID_Categoria: Number(id) },
      data: request.body
    });

    return new NextResponse(200, JSON.stringify(updatedCategory));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al actualizar categoría' });
  }
}