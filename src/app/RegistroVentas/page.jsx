
"use client";
import { useEffect, useState } from 'react';
import { TableTransaction } from './TableTransaction';

export default function Transactions() {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/detalleVenta')
      .then(response => response.json())
      .then(data => {
        setVentas(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar las ventas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Puedes reemplazar esto con un componente de carga si lo tienes.
  }

  return (
  
      <div className="flex cardshadow flex-col gap-5 bg-white justify-center items-center">
        <div>REGISTRO DE VENTAS</div>
        
        {ventas.map((venta, index) => (
  <TableTransaction key={index} venta={venta} ventaIndex={index + 1} />
))}
      </div>
   
  );
}
