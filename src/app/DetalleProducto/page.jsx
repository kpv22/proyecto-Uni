"use client"
import React, { useEffect, useState } from 'react';
import {
  Typography,
} from '@material-tailwind/react';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fechaActual, setFechaActual] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    // Obtener la fecha actual
    const obtenerFechaActual = () => {
      const fecha = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return fecha.toLocaleDateString('es-ES', options);
    };

    // Actualizar la fecha actual
    setFechaActual(obtenerFechaActual());

    // Realiza la solicitud a api/producto
    fetch('api/producto')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data); // Actualiza el estado con los datos recibidos
        setLoading(false); // Cambia el estado de carga a falso
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
        setLoading(false); // Cambia el estado de carga a falso en caso de error
      });
  }, []);

  const handleEditarProducto = (producto) => {
    // Establece el producto seleccionado para editar
    setProductoSeleccionado(producto);
  };

  const handleActualizarProducto = async () => {
    if (!productoSeleccionado) {
      return;
    }

    try {
      // Realiza una solicitud PUT a la API para actualizar el producto
      const response = await fetch(`/api/producto/${productoSeleccionado._id}`, {
        
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoSeleccionado),
      });

      if (response.ok) {
        console.log('Producto actualizado con éxito');
        // Actualiza la lista de productos después de la actualización exitosa
        const nuevosProductos = productos.map((producto) =>
          producto._id === productoSeleccionado._id ? productoSeleccionado : producto
        );
        setProductos(nuevosProductos);
        setProductoSeleccionado(null);
      } else {
        console.error('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const handleModificarStock = (producto) => {
    // Modificar el stock del producto seleccionado
    const nuevoStock = prompt(`Modificar stock para ${producto.Nombre}`, producto.Stock);

    if (nuevoStock !== null && !isNaN(parseFloat(nuevoStock))) {
      const productoActualizado = { ...producto, Stock: parseFloat(nuevoStock) };
      handleActualizarProducto(productoActualizado);
    }
  };

  const handleEliminarProducto = async (producto) => {
    console.log('Botón de eliminar clicado');
    const confirmacion = window.confirm(`¿Estás seguro de eliminar ${producto.Nombre}?`);

    if (confirmacion) {
      try {
        // Realiza una solicitud DELETE a la API para eliminar el producto
        const response = await fetch(`/api/producto/${producto._id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Producto eliminado con éxito');
          // Elimina el producto de la lista después de la eliminación exitosa
          const nuevosProductos = productos.filter(
            (p) => p._id !== producto._id
          );
          setProductos(nuevosProductos);
        } else {
          console.error('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    }
  };

  const handleCancelarEdicion = () => {
    // Cancela la edición del producto seleccionado
    setProductoSeleccionado(null);
  };

  return (
    <main className="w-full grid grid-cols-4 gap-6 p-6">
      <div className="col-span-4 cardshadow overflow-hidden bg-white flex flex-col justify-between">
        <div className="flex gap-6 my-2 justify-center items-center">
          <div className="flex m-1 gap-2">
            <Typography variant="h4" color="blue-gray">
              Fecha: {fechaActual}
            </Typography>
          </div>
        </div>
      </div>

      {productos.map((producto, index) => (
        <div key={index} className="col-span-1 h-52 cardshadow bg-white flex justify-center items-center">
          <div>
            <div className="flex justify-between">
              <Typography variant="lead">{producto.Nombre}</Typography>
            </div>
            <Typography variant="h2">
              C$ {producto.Precio_Unitario}
            </Typography>
            
            <div className="flex flex-col items-center">
              <Typography variant="lead" color="green">
                {producto.Stock}
              </Typography>
              <Typography variant="small" color="gray">
                en stock
              </Typography>
              <div>
                {producto.Descripcion}
              </div>
             
            </div>
            <div className='flex justify-center items-center gap-5'>
              <button className='border p-1 rounded-md shadow-lg text-green-800' onClick={() => handleEditarProducto(producto)}>Editar</button>
              <button className='border p-1 rounded-md shadow-lg text-red-800' onClick={() => handleEliminarProducto(producto)}>Eliminar</button>
            </div>
          </div>
        </div>
      ))}

      {productoSeleccionado && (
        <div>
          <h2>Editar Producto</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={productoSeleccionado.Nombre}
            onChange={(e) =>
              setProductoSeleccionado({ ...productoSeleccionado, Nombre: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Precio Unitario"
            value={productoSeleccionado.Precio_Unitario}
            onChange={(e) =>
              setProductoSeleccionado({
                ...productoSeleccionado,
                Precio_Unitario: parseFloat(e.target.value),
              })
            }
          />
          <input
            type="number"
            placeholder="Stock"
            value={productoSeleccionado.Stock}
            onChange={(e) =>
              setProductoSeleccionado({
                ...productoSeleccionado,
                Stock: parseFloat(e.target.value),
              })
            }
          />
          <button onClick={handleActualizarProducto}>Actualizar</button>
          <button onClick={handleCancelarEdicion}>Cancelar</button>
        </div>
      )}
    </main>
  );
}
