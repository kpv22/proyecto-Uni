-- CreateTable
CREATE TABLE "Producto" (
    "ID_Producto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT,
    "Precio_Unitario" REAL NOT NULL,
    "ID_Categoria" INTEGER NOT NULL,
    "ID_Proveedor" INTEGER NOT NULL,
    CONSTRAINT "Producto_ID_Categoria_fkey" FOREIGN KEY ("ID_Categoria") REFERENCES "Categoria" ("ID_Categoria") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Producto_ID_Proveedor_fkey" FOREIGN KEY ("ID_Proveedor") REFERENCES "Proveedor" ("ID_Proveedor") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "ID_Categoria" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre_Categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Proveedor" (
    "ID_Proveedor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre" TEXT NOT NULL,
    "Direccion" TEXT NOT NULL,
    "Telefono" TEXT NOT NULL,
    "Correo_Electronico" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Inventario" (
    "ID_Inventario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ID_Producto" INTEGER NOT NULL,
    "Cantidad_Disponible" INTEGER NOT NULL,
    CONSTRAINT "Inventario_ID_Producto_fkey" FOREIGN KEY ("ID_Producto") REFERENCES "Producto" ("ID_Producto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Empleado" (
    "ID_Empleado" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Direccion" TEXT NOT NULL,
    "Telefono" TEXT NOT NULL,
    "Puesto" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Venta" (
    "ID_Venta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ID_Empleado" INTEGER NOT NULL,
    "Fecha_Venta" DATETIME NOT NULL,
    "Total" REAL NOT NULL,
    CONSTRAINT "Venta_ID_Empleado_fkey" FOREIGN KEY ("ID_Empleado") REFERENCES "Empleado" ("ID_Empleado") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DetallesVenta" (
    "ID_Detalle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ID_Venta" INTEGER NOT NULL,
    "ID_Producto" INTEGER NOT NULL,
    "Cantidad" INTEGER NOT NULL,
    "Subtotal" REAL NOT NULL,
    CONSTRAINT "DetallesVenta_ID_Venta_fkey" FOREIGN KEY ("ID_Venta") REFERENCES "Venta" ("ID_Venta") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DetallesVenta_ID_Producto_fkey" FOREIGN KEY ("ID_Producto") REFERENCES "Producto" ("ID_Producto") ON DELETE RESTRICT ON UPDATE CASCADE
);
