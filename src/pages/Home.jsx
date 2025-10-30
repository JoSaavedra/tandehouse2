import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <section className="text-center py-5">
      <h1 className="display-5 fw-bold">Bienvenido a TandeHouse</h1>
      <p className="lead text-secondary">Cartas, accesorios y más — ahora en React.</p>
      <div className="mt-3">
        <Link to="/products" className="btn btn-primary btn-lg">Ver productos</Link>
      </div>
    </section>
  )
}