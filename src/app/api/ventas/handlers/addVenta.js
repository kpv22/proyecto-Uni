import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function addVenta(request) {
  const { ID_Empleado, Fecha_Venta, Total } = request.body;

  try {
    const newVenta = await prisma.venta.create({
      data: { ID_Empleado, Fecha_Venta, Total }
    });
    
    return new NextResponse(201, JSON.stringify(newVenta));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al agregar la venta' });
  }
}