import { NextResponse } from "next/server";
import connect from "../../../libs/db";
import Empleado from "../../../../models/Empleado";

export const GET = async (request) => {
  try {
    await connect()

    // Obtener todos los empleados
    const empleados = await Empleado.find();

    return new NextResponse(JSON.stringify(empleados), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching employees", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connect()
    const body = await request.json();
    // Crear un nuevo empleado
    const nuevoEmpleado = new Empleado(body);
    await nuevoEmpleado.save();

    return new NextResponse(JSON.stringify(nuevoEmpleado), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in creating employee", { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
   
    await connect()
    // Actualizar un empleado existente
    const { id } = request.query;
    const empleadoActualizado = await Empleado.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!empleadoActualizado) {
      return new NextResponse("Employee not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(empleadoActualizado), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in updating employee", { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
   
    await connect()
    // Eliminar un empleado
    const { id } = request.query;
    const empleadoEliminado = await Empleado.findByIdAndRemove(id);

    if (!empleadoEliminado) {
      return new NextResponse("Employee not found", { status: 404 });
    }

    return new NextResponse("Employee deleted", { status: 204 });
  } catch (error) {
    return new NextResponse("Error in deleting employee", { status: 500 });
  }
};
