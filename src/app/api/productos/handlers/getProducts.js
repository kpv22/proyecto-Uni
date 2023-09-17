import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getProducts(request) {
    try {
      const products = await prisma.producto.findMany();
      return new NextResponse(200, JSON.stringify(products));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al obtener productos' });
    }
  }