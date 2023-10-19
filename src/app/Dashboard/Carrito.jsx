"use client"
import { useState } from 'react';

export function Carrito() {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCarrito((prevCarrito) => [...prevCarrito, producto]);
    };

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.Precio_Unitario, 0);
    };

    return (
        <div className="carrito">
            <h2>Carrito de Compras</h2>
            <ul>
                {carrito.map((producto, index) => (
                    <li key={index}>
                        {producto.Nombre} - C$ {producto.Precio_Unitario}
                    </li>
                ))}
            </ul>
            <strong>Total: C$ {calcularTotal()}</strong>
            <button onClick={() => setCarrito([])}>Vaciar Carrito</button>
        </div>
    );
}