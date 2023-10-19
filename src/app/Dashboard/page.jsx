"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Typography,
} from "@material-tailwind/react";
import walletReceive from "@/../public/svg-icons/addcart.svg";

export default function Dashboard() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fechaActual, setFechaActual] = useState("");

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarProducto = (indexToRemove) => {
    setCarrito((prevCarrito) => prevCarrito.filter((_, index) => index !== indexToRemove));
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.Precio_Unitario, 0);
  };

  const confirmarVenta = () => {
  
    fetch("/api/detalleVenta", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carrito),
    })
    .then(response => response.json())
    .then(data => {
// 
      setCarrito([]); // Vaciamos el carrito después de la venta
      alert("Venta completada");  // Muestra el alerta de venta completada
    })
    .catch((error) => {
      console.error("Error al confirmar la venta:", error);
    });
  };

  useEffect(() => {
    const obtenerFechaActual = () => {
      const fecha = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return fecha.toLocaleDateString('es-ES', options);
    };
    setFechaActual(obtenerFechaActual());

    fetch("api/producto")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      });
  }, []);

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
        <div className="carrito gap-5">
          <h2>Carrito de Compras</h2>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.Nombre} - C$ {producto.Precio_Unitario}
                <button className="p-2 text-red-600" onClick={() => eliminarProducto(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <strong>Total: C$ {calcularTotal()}</strong>
          <div className="flex">
          <button className="border rounded-lg p-1 text-red-600"  onClick={() => setCarrito([])}>Vaciar Carrito</button>
          <button className="border rounded-lg p-1 text-light-green-800" onClick={confirmarVenta}>Confirmar Venta</button>
</div>

        </div>
      </div>

      {productos.map((producto, index) => (
        <div key={index} className="col-span-1 h-48 cardshadow bg-white flex justify-center items-center">
          <div>
            <div className="flex justify-between">
              <Typography variant="lead">{producto.Nombre}</Typography>
              <Image alt="walletReceive" onClick={() => agregarProducto(producto)} className="cursor-pointer" src={walletReceive} />
            </div>
            <Typography variant="h2">
              C$ {producto.Precio_Unitario}
            </Typography>
          </div>
        </div>
      ))}
    </main>
  );
}
