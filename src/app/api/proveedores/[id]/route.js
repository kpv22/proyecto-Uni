
import { NextResponse } from "next/server";

import getProveedorById from '@/app/api/proveedores/handlers/getProveedorById.js';
import updateProveedor from '@/app/api/proveedores/handlers/updateProveedor.js';
import deleteProveedor from '@/app/api/proveedores/handlers/deleteProveedor.js';
const handlers = {
  GET: getProveedorById,
  PUT: updateProveedor,
  DELETE: deleteProveedor,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}