import getEmployees from '@/app/api/empleados/handlers/getEmployees';
import addEmployee from '@/app/api/empleados/handlers/addEmployee';
import { NextResponse } from "next/server";

const handlers = {
  GET: getEmployees,
  POST: addEmployee,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}