import { prisma } from '@/libs/prisma';
import { NextResponse } from "next/server";


export default async function addProduct(request) {
    const { Nombre, Descripcion, Precio_Unitario, ID_Categoria, ID_Proveedor } = request.body;
    try {
      const newProduct = await prisma.producto.create({
        data: { Nombre, Descripcion, Precio_Unitario, ID_Categoria, ID_Proveedor }
      });
      return new NextResponse(201, JSON.stringify(newProduct));
    } catch (error) {
      return new NextResponse(500, { error: 'Error al agregar producto' });
    }
  }