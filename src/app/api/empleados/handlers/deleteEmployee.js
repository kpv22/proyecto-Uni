import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";


export default async function deleteEmployee(request) {
    const { id } = request.params;
  
    try {
      const deletedEmployee = await prisma.empleado.delete({
        where: { ID_Empleado: Number(id) }
      });
  
      return new NextResponse(200, JSON.stringify(deletedEmployee));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al eliminar empleado' });
    }
  }