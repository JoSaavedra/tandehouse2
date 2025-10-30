import { Link, NavLink } from 'react-router-dom'
import CartBadge from './CartBadge.jsx'
export default function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">TandeHouse</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/products">Productos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">Nosotros</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contacto</NavLink></li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cart">🛒 <CartBadge /></NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}