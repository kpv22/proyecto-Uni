import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function deleteProveedor(request) {
  const { id } = request.params;

  try {
    const deletedProveedor = await prisma.proveedor.delete({
      where: { ID_Proveedor: Number(id) }
    });

    return new NextResponse(200, JSON.stringify(deletedProveedor));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al eliminar proveedor' });
  }
}