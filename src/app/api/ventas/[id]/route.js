import getProductById from '@/app/api/productos/handlers/getProductById';
import updateProduct from '@/app/api/productos/handlers/updateProduct';
import deleteProduct from '@/app/api/productos/handlers/deleteProduct';
import { NextResponse } from "next/server";

const handlers = {
  GET: getProductById,
  PUT: updateProduct,
  DELETE: deleteProduct,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}