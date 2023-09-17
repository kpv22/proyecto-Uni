import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getDetallesVentas(request) {
  try {
    const detalles = await prisma.detallesVenta.findMany();
    return new NextResponse(200, JSON.stringify(detalles));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener los detalles de ventas' });
  }
}