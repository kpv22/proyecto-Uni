import getProducts from '@/app/api/productos/handlers/addProduct';
import addProduct from '@/app/api/productos/handlers/getProducts';
import { NextResponse } from "next/server";

const handlers = {
  GET: getProducts,
  POST: addProduct,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}