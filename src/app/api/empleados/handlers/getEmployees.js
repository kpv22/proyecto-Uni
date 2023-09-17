import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function getEmployees(request) {
  try {
    const employees = await prisma.empleado.findMany();
    return new NextResponse(200, JSON.stringify(employees));
  } catch (error) {
    return new NextResponse(500, { error: 'Error al obtener empleados' });
  }
}