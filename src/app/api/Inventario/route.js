
import { NextResponse } from "next/server";
import getInventarios from '@/app/api/Inventario/handlers/getInventarios.js';
import addInventario from '@/app/api/Inventario/handlers/addInventario.js';
const handlers = {
  GET: getInventarios,
  POST: addInventario,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}