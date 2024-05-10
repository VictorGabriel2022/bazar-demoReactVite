import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './navbar'
import Product from './product';
import Info from './info.jsx';
const productList = [
  { id: 1, name: 'Producto 1', price: 10 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJPSantZ1L47CqWdR_XJrVEDjF3CZlOPjchHzniKLXvK5YYU4VY6v7Tf5KkcyoACMd0s&usqp=CAU"},
  { id: 2, name: 'Producto 2', price: 20 ,img:"https://www.visioncenter.com.pe/cdn/shop/products/8056597815857_1_257c2980-b1f3-46ec-b0f8-e03830747f96_720x720.png?v=1709130275"},
  { id: 3, name: 'Producto 3', price: 30 ,img:"https://www.visioncenter.com.pe/cdn/shop/files/8056597497985_1_720x720.png?v=1713440174"},
  { id: 4, name: 'Producto 1', price: 10 , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJPSantZ1L47CqWdR_XJrVEDjF3CZlOPjchHzniKLXvK5YYU4VY6v7Tf5KkcyoACMd0s&usqp=CAU"},
  { id: 5, name: 'Producto 2', price: 20 ,img:"https://www.visioncenter.com.pe/cdn/shop/products/8056597815857_1_257c2980-b1f3-46ec-b0f8-e03830747f96_720x720.png?v=1709130275"},
  { id: 6, name: 'Producto 3', price: 30 ,img:"https://www.visioncenter.com.pe/cdn/shop/files/4044709509699_1_720x720.jpg?v=1713438006"},
  { id: 7, name: 'Producto 4', price: 50 ,img:"https://www.visioncenter.com.pe/cdn/shop/files/4044709510626_1_720x720.png?v=1713435470" },
  { id: 6, name: 'Producto 3', price: 30 ,img:"https://www.visioncenter.com.pe/cdn/shop/files/4044709509699_1_720x720.jpg?v=1713438006"},
];
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Info/>
    <Navbar/>
    <Product  products={productList}/>
  
  </React.StrictMode>,
)
