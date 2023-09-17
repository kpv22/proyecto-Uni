import getCategories from '@/app/api/categorias/handlers/getCategories.js';
import addCategory from '@/app/api/categorias/handlers/addCategory.js';
import { NextResponse } from "next/server";

const handlers = {
  GET: getCategories,
  POST: addCategory,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}