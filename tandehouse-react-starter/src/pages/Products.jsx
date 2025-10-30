import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import ProductModal from '../components/ProductModal.jsx'
import productsData from '../data/products.json'

export default function Products(){
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(null)
  const [q, setQ] = useState('')
  useEffect(() => { setItems(productsData) }, [])
  const filtered = items.filter(p => p.name.toLowerCase().includes(q.toLowerCase()))
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Productos</h2>
        <input className="form-control w-auto" placeholder="Buscar..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="row g-3">
        {filtered.map(p => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard product={p} onOpen={setSelected} />
          </div>
        ))}
      </div>
      <ProductModal product={selected} onClose={()=>setSelected(null)} />
    </section>
  )
}