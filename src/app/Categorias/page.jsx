"use client"
import { useState } from 'react';

export default function Categorias() {
  const [categoria, setCategoria] = useState({
    Nombre_Categoria: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoria(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(categoria);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoria.Nombre_Categoria) {
      setError('Por favor, completa el campo nombre.');
      return;
    }
  
    // Actualiza el estado de 'categoria' antes de enviar la solicitud
    setCategoria((prevState) => ({
      ...prevState,
      Nombre_Categoria: categoria.Nombre_Categoria
    }));
  
    try {
      const response = await fetch('/api/categoria', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Nombre_Categoria: categoria.Nombre_Categoria })

      });
  
      if (!response.ok) {
        throw new Error('Error al guardar la categoría');
      }
      alert('Categoría guardada con éxito!');
      setCategoria({
        Nombre_Categoria: ''
      });
      setError('');
  
    } catch (error) {
      console.error('Hubo un error:', error);
      setError('Error al guardar la categoría. Por favor, inténtalo de nuevo.');
    }
  };
  

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6">Formulario de Categorías</h2>
      {error && <div className="bg-red-200 p-4 mb-4 rounded border border-red-400 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nombre de la Categoría:</label>
          <input type="text" name="Nombre_Categoria" value={categoria.Nombre_Categoria} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Guardar Categoría</button>
        </div>
      </form>
    </div>
  );
}
