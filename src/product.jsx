import "./nav.css"
function Product({ products }){
   return(
    <div>
    <h1>Lista de Productos</h1>
    <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <img src={product.img} alt="" height={150} />
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
  </div>
   )
}
export default Product