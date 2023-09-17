import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";


export default async function addProveedor(request) {
  const { Nombre, Direccion, Telefono, Correo_Electronico } = request.body;

  try {
    const newProveedor = await prisma.proveedor.create({
      data: { Nombre, Direccion, Telefono, Correo_Electronico }
    });
    
    return new NextResponse(201, JSON.stringify(newProveedor));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al agregar proveedor' });
  }
}
  