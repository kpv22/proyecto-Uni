"use client"
import { useState } from 'react';
import usePuestos from './usePuestos';

export default function Empleados() {
  const puestos = usePuestos();
  const [empleado, setEmpleado] = useState({
    Nombre: '',
    Apellido: '',
    Direccion: '',
    Telefono: '',
    Puesto: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !empleado.Nombre ||
      !empleado.Apellido ||
      !empleado.Direccion ||
      !empleado.Telefono ||
      !empleado.Puesto
    ) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }
  
    try {
      const response = await fetch('/api/empleado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nombre: empleado.Nombre,
          Apellido: empleado.Apellido,
          Direccion: empleado.Direccion,
          Telefono: empleado.Telefono,
          Puesto: empleado.Puesto
        })
      });
  
      if (!response.ok) {
        throw new Error('Error al guardar el empleado');
      }
      alert('Empleado guardado con éxito!');
      setEmpleado({
        Nombre: '',
        Apellido: '',
        Direccion: '',
        Telefono: '',
        Puesto: ''
      });
      setError('');
    } catch (error) {
      console.error('Hubo un error:', error);
      setError('Error al guardar el empleado. Por favor, inténtalo de nuevo.');
    }
  };
  

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6">Formulario de Empleados</h2>
      {error && <div className="bg-red-200 p-4 mb-4 rounded border border-red-400 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nombre:</label>
          <input type="text" name="Nombre" value={empleado.Nombre} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-2">Apellido:</label>
          <input type="text" name="Apellido" value={empleado.Apellido} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-2">Dirección:</label>
          <input type="text" name="Direccion" value={empleado.Direccion} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-2">Teléfono:</label>
          <input type="text" name="Telefono" value={empleado.Telefono} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block mb-2">Puesto:</label>
          <select name="Puesto" value={empleado.Puesto} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">Selecciona un puesto</option>
            {puestos.map(puesto => (
              <option key={puesto.id} value={puesto.id}>{puesto.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Guardar Empleado</button>
        </div>
      </form>
    </div>
  );
}
