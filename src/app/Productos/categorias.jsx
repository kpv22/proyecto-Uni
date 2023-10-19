"use client"
import { useState, useEffect } from 'react';

function useCategorias() {
    
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchCategorias() {
      try {
        const response = await fetch('/api/categoria'); // Ajusta la URL a tu endpoint real
        if (!response.ok) {
          throw new Error('Error al obtener las categorías');
        }
        const data = await response.json();
        setCategorias(data);
        
      } catch (error) {
        console.error('Hubo un error:', error);
      }
      
    }

    fetchCategorias();
  }, []);

  return categorias;
}

export default useCategorias;



