import { NextResponse } from "next/server";
import getCategoryById from "@/app/api/categorias/handlers/getCategoryById.js";
import updateCategory from "@/app/api/categorias/handlers/updateCategory.js";
import deleteCategory from "@/app/api/categorias/handlers/deleteCategory.js";
const handlers = {
  GET: getCategoryById,
  PUT: updateCategory,
  DELETE: deleteCategory,
};

export default async function handler(request) {
  const handle = handlers[request.method];
  if (!handle) {
    return NextResponse.methodNotAllowed();
  }
  return await handle(request);
}
