import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getProveedorById(request) {
  const { id } = request.params;

  try {
    const proveedor = await prisma.proveedor.findUnique({
      where: { ID_Proveedor: Number(id) }
    });

    if (!proveedor) {
      return new NextResponse(404, { error: 'Proveedor no encontrado' });
    }

    return new NextResponse(200, JSON.stringify(proveedor));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener proveedor' });
  }
}