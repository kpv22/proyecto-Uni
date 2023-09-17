import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getEmployeeById(request) {
    const { id } = request.params;
  
    try {
      const employee = await prisma.empleado.findUnique({
        where: { ID_Empleado: Number(id) }
      });
  
      if (!employee) {
        return new NextResponse(404, { error: 'Empleado no encontrado' });
      }
  
      return new NextResponse(200, JSON.stringify(employee));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al obtener empleado' });
    }
  }