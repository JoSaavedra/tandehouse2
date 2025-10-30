import { useCart } from '../context/CartContext.jsx'
export default function Cart(){
  const { cart, setQty, removeItem, clear, total } = useCart()
  if(cart.length === 0){ return <p className="lead">Tu carrito está vacío.</p> }
  return (
    <section>
      <h2>Carrito</h2>
      <div className="table-responsive">
        <table className="table table-dark table-striped align-middle">
          <thead><tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Total</th><th></th></tr></thead>
          <tbody>
            {cart.map(p => (
              <tr key={p.id}>
                <td className="d-flex align-items-center gap-2">
                  <img src={p.image} alt={p.name} style={{width:48,height:48,objectFit:'cover',borderRadius:6}}/> {p.name}
                </td>
                <td>${p.price.toLocaleString('es-CL')}</td>
                <td style={{maxWidth:100}}><input type="number" min="1" className="form-control" value={p.qty} onChange={e=>setQty(p.id, e.target.value)} /></td>
                <td>${(p.qty*p.price).toLocaleString('es-CL')}</td>
                <td><button className="btn btn-sm btn-outline-danger" onClick={()=>removeItem(p.id)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
          <tfoot><tr><td colSpan="3" className="text-end fw-bold">Total</td><td colSpan="2" className="fw-bold">${total.toLocaleString('es-CL')}</td></tr></tfoot>
        </table>
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-light" onClick={clear}>Vaciar carrito</button>
        <button className="btn btn-primary">Ir a pagar</button>
      </div>
    </section>
  )
}