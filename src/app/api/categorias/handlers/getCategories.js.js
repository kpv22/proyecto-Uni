import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getCategories(request) {
  try {
    const categories = await prisma.categoria.findMany();
    return new NextResponse(200, JSON.stringify(categories));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener las categorías' });
  }
}