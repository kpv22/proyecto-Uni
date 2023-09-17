import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function deleteProduct(request) {
    const { id } = request.params;
    try {
      const deletedProduct = await prisma.producto.delete({
        where: { ID_Producto: Number(id) },
      });
      return new NextResponse(200, JSON.stringify(deletedProduct));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al eliminar producto' });
    }
  }