"use client"
import { useState, useEffect } from 'react';

function useProveedores() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    async function fetchProveedores() {
      try {
        const response = await fetch('/api/proveedor'); // Ajusta la URL a tu endpoint real
        if (!response.ok) {
          throw new Error('Error al obtener los proveedores');
        }
        const data = await response.json();
        setProveedores(data);
        console.log(data);
        
      } catch (error) {
        console.error('Hubo un error:', error);
      }
    }
    fetchProveedores();
  }, []);

  return proveedores;
}

export default useProveedores;

