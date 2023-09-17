import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";

export default async function addEmployee(request) {
    const { Nombre, Apellido, Direccion, Telefono, Puesto } = request.body;
  
    try {
      const newEmployee = await prisma.empleado.create({
        data: { Nombre, Apellido, Direccion, Telefono, Puesto }
      });
      
      return new NextResponse(201, JSON.stringify(newEmployee));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al agregar empleado' });
    }
  }