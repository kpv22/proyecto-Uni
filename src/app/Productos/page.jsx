"use client"

import { useState } from 'react';
import useCategorias from './categorias';
import useProveedores from './proveedores';

export default function Productos() {
  const categorias = useCategorias();
  const proveedores = useProveedores();
  const [producto, setProducto] = useState({
    Nombre: '',
    Descripcion: '',
    Precio_Unitario: '',
    Categoria: '',
    Proveedor: '',
    Stock: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(producto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtén el ID de la categoría y el proveedor seleccionados
  

    // Verifica si los campos obligatorios están completos y si se encontraron categoría y proveedor
    if (
      !producto.Nombre ||
      !producto.Precio_Unitario ||
      !producto.Categoria ||
      !producto.Proveedor ||
      !producto.Stock 
 
    ) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    try {
      const response = await fetch('api/producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nombre: producto.Nombre,
          Descripcion: producto.Descripcion,
          Precio_Unitario: producto.Precio_Unitario,
          ID_Categoria: producto.Categoria,
          ID_Proveedor: producto.Proveedor,
          Stock: producto.Stock
        })
      });

      if (!response.ok) {
        throw new Error('Error al guardar el producto');
      }
      alert('Producto guardado con éxito!');
      setProducto({
        Nombre: '',
        Descripcion: '',
        Precio_Unitario: '',
        Categoria: '',
        Proveedor: '',
        Stock: ''
      });
      setError('');
    } catch (error) {
      console.error('Hubo un error:', error);
      setError('Error al guardar el producto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6">Formulario de Productos</h2>
      {error && (
        <div className="bg-red-200 p-4 mb-4 rounded border border-red-400 text-red-700">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nombre:</label>
          <input
            type="text"
            name="Nombre"
            value={producto.Nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Descripción:</label>
          <input
            type="text"
            name="Descripcion"
            value={producto.Descripcion}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Precio Unitario:</label>
          <input
            type="number"
            name="Precio_Unitario"
            value={producto.Precio_Unitario}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Stock:</label>
          <input
            type="number"
            name="Stock"
            value={producto.Stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Categoría:</label>
          <select
            name="Categoria"
            value={producto.Categoria}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((ele) => (
              <option key={ele._id} value={ele._id}>
                {ele.Nombre_Categoria}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Proveedor:</label>
          <select
            name="Proveedor"
            value={producto.Proveedor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecciona un proveedor</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor._id} value={proveedor._id}>
                {proveedor.Nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Guardar Producto
          </button>
        </div>
      </form>
    </div>
  );
}
