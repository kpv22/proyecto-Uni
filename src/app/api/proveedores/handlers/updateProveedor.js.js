import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function updateProveedor(request) {
  const { id } = request.params;

  try {
    const updatedProveedor = await prisma.proveedor.update({
      where: { ID_Proveedor: Number(id) },
      data: request.body
    });

    return new NextResponse(200, JSON.stringify(updatedProveedor));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al actualizar proveedor' });
  }
}