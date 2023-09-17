import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getProductById(request) {
  const { id } = request.params;
  try {
    const product = await prisma.producto.findUnique({
      where: { ID_Producto: Number(id) },
    });
    if (!product) return new NextResponse(404, { error: 'Producto no encontrado' });
    return new NextResponse(200, JSON.stringify(product));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener producto' });
  }
}