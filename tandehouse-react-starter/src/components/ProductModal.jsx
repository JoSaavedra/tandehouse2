import { useCart } from '../context/CartContext.jsx'
export default function ProductModal({ product, onClose }){
  const { addItem } = useCart()
  if(!product) return null
  const { id, name, price, image, details } = product
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100" style={{background:'rgba(0,0,0,.6)'}} onClick={onClose}>
      <div className="container h-100 d-flex align-items-center" onClick={e=>e.stopPropagation()}>
        <div className="bg-dark text-light rounded-3 p-3 w-100">
          <div className="d-flex gap-3">
            <img src={image} alt={name} style={{maxWidth:'220px', borderRadius:'8px'}}/>
            <div className="flex-grow-1">
              <h3 className="mb-1">{name}</h3>
              <div className="price mb-2">${price.toLocaleString('es-CL')}</div>
              {details && <ul className="small text-secondary">
                {Object.entries(details).map(([k,v]) => <li key={k}><strong>{k}:</strong> {String(v)}</li>)}
              </ul>}
              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-outline-light" onClick={onClose}>Cerrar</button>
                <button className="btn btn-primary" onClick={()=>{ addItem({id,name,price,image}); onClose() }}>Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}