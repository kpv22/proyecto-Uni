import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getVentas(request) {
  try {
    const ventas = await prisma.venta.findMany();
    return new NextResponse(200, JSON.stringify(ventas));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener las ventas' });
  }
}