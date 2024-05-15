import "./nav.css";
import React, { useState, useEffect } from 'react';

function Product() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/producto/listar')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Productos 2</h1>
      <div className="card-container">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt="" height={150} />
            <p>Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
