import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";


export default async function updateEmployee(request) {
    const { id } = request.params;
  
    try {
      const updatedEmployee = await prisma.empleado.update({
        where: { ID_Empleado: Number(id) },
        data: request.body
      });
  
      return new NextResponse(200, JSON.stringify(updatedEmployee));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al actualizar empleado' });
    }
  }