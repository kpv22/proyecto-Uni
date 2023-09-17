import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getInventarios(request) {
  try {
    const inventarios = await prisma.inventario.findMany();
    return new NextResponse(200, JSON.stringify(inventarios));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener los inventarios' });
  }
}