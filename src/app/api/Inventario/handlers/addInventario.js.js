import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";


export default async function addInventario(request) {
  const { ID_Producto, Cantidad_Disponible } = request.body;

  try {
    const newInventario = await prisma.inventario.create({
      data: { ID_Producto, Cantidad_Disponible }
    });
    
    return new NextResponse(201, JSON.stringify(newInventario));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al agregar al inventario' });
  }
}
  