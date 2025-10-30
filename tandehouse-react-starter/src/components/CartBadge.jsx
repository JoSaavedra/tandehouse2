import { useCart } from '../context/CartContext.jsx'
export default function CartBadge(){ const { count } = useCart(); return <span className="badge bg-primary ms-1">{count}</span> }