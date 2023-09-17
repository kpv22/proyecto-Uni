
import { NextResponse } from "next/server";
import getDetallesVentas from '@/app/api/detalles_ventas/handlers/getDetallesVentas';
import addDetalleVenta from '@/app/api/detalles_ventas/handlers/addDetalleVenta';
const handlers = {
  GET: getDetallesVentas,
  POST: addDetalleVenta,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}