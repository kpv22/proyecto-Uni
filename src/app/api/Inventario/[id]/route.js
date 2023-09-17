
import { NextResponse } from "next/server";
import getInventarioById from '@/app/api/Inventario/handlers/getInventarioById.js';
import updateInventario from '@/app/api/Inventario/handlers/updateInventario.js';
import deleteInventario from '@/app/api/Inventario/handlers/deleteInventario.js';
const handlers = {
  GET: getInventarioById,
  PUT: updateInventario,
  DELETE: deleteInventario,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}