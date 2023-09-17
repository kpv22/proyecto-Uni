
import { NextResponse } from "next/server";
import getDetalleVentaById from '@/app/api/detalles_ventas/handlers/getDetalleVentaById';
import updateDetalleVenta from '@/app/api/detalles_ventas/handlers/updateDetalleVenta';
import deleteDetalleVenta from '@/app/api/detalles_ventas/handlers/deleteDetalleVenta';
const handlers = {
  GET: getDetalleVentaById,
  PUT: updateDetalleVenta,
  DELETE: deleteDetalleVenta,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}