import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function deleteCategory(request) {
  const { id } = request.params;

  try {
    const deletedCategory = await prisma.categoria.delete({
      where: { ID_Categoria: Number(id) }
    });

    return new NextResponse(200, JSON.stringify(deletedCategory));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al eliminar categoría' });
  }
}