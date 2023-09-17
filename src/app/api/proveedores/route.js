import getProveedores from '@/app/api/proveedores/handlers/getProveedores.js';
import addProveedor from '@/app/api/proveedores/handlers/addProveedor.js';
import { NextResponse } from "next/server";

const handlers = {
  GET: getProveedores,
  POST: addProveedor,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}