import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function updateProduct(request) {
    const { id } = request.params;
    try {
      const updatedProduct = await prisma.producto.update({
        where: { ID_Producto: Number(id) },
        data: request.body,
      });
      return new NextResponse(200, JSON.stringify(updatedProduct));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al actualizar producto' });
    }
  }