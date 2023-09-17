import getEmployeeById from '@/app/api/empleados/handlers/getEmployeeById';
import updateEmployee from '@/app/api/empleados/handlers/updateEmployee';
import deleteEmployee from '@/app/api/empleados/handlers/deleteEmployee';
import { NextResponse } from "next/server";

const handlers = {
  GET: getEmployeeById,
  PUT: updateEmployee,
  DELETE: deleteEmployee,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}






