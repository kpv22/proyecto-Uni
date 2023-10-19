"use client"
import { useState } from 'react';

export default function NewProveedor() {
  const [proveedor, setProveedor] = useState({
    Nombre: '',
    Direccion: '',
    Telefono: '',
    Correo_Electronico: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProveedor(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!proveedor.Nombre || !proveedor.Direccion || !proveedor.Telefono || !proveedor.Correo_Electronico) {
      setError('Por favor, completa todos los campos.');
      return;
    }
  
    try {
      const response = await fetch('/api/proveedor', { // Ajusta la URL a tu servidor Node.js
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nombre: proveedor.Nombre,
          Direccion: proveedor.Direccion,
          Telefono: proveedor.Telefono,
          Correo_Electronico: proveedor.Correo_Electronico
        })
      });
  
      if (!response.ok) {
        throw new Error('Error al guardar el proveedor');
      }
      alert('Proveedor guardado con éxito!');
      setProveedor({
        Nombre: '',
        Direccion: '',
        Telefono: '',
        Correo_Electronico: ''
      });
      setError('');
  
    } catch (error) {
      console.error('Hubo un error:', error);
      setError('Error al guardar el proveedor. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6">Formulario de Proveedores</h2>
      {error && <div className="bg-red-200 p-4 mb-4 rounded border border-red-400 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nombre del Proveedor:</label>
          <input type="text" name="Nombre" value={proveedor.Nombre} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-2">Dirección:</label>
          <input type="text" name="Direccion" value={proveedor.Direccion} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-2">Teléfono:</label>
          <input type="text" name="Telefono" value={proveedor.Telefono} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-2">Correo Electrónico:</label>
          <input type="email" name="Correo_Electronico" value={proveedor.Correo_Electronico} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Guardar Proveedor</button>
        </div>
      </form>
    </div>
  );
}
