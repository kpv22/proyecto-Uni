import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getProveedores(request) {
  try {
    const proveedores = await prisma.proveedor.findMany();
    return new NextResponse(200, JSON.stringify(proveedores));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener los proveedores' });
  }
}