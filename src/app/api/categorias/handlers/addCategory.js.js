import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";


export default async function addCategory(request) {
  const { Nombre_Categoria } = request.body;

  try {
    const newCategory = await prisma.categoria.create({
      data: { Nombre_Categoria }
    });
    
    return new NextResponse(201, JSON.stringify(newCategory));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al agregar categoría' });
  }
}