import { useCart } from '../context/CartContext.jsx'
export default function ProductCard({ product, onOpen }){
  const { addItem } = useCart()
  const { id, name, price, image } = product
  return (
    <article className="product-card h-100 d-flex flex-column">
      <img src={image} alt={name} />
      <div className="mt-2 flex-grow-1">
        <h5 className="mb-1">{name}</h5>
        <div className="price mb-2">${price.toLocaleString('es-CL')}</div>
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-light w-50" onClick={()=>onOpen(product)}>Detalles</button>
        <button className="btn btn-primary w-50" onClick={()=>addItem({id,name,price,image})}>Agregar</button>
      </div>
    </article>
  )
}