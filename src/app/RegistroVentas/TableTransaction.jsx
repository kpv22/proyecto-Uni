export function TableTransaction({ venta, ventaIndex }) {
    return (
      <div className="w-full">
        <div className="text-lg mb-2">Venta N° {ventaIndex}</div>
        
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th>Fecha de Venta</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Unidad</th>
            </tr>
          </thead>
          <tbody>
            {venta.Productos.map((producto, productoIndex) => (
                <tr key={productoIndex}>
                  <td>{new Date(venta.createdAt).toLocaleDateString()}</td>
                  <td>{producto.Nombre}</td>
                  <td>{producto.Descripcion}</td>
                  <td>{producto.Precio_Unitario}</td>
                  <td>1</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}







