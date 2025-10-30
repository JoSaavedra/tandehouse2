import { createContext, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const CartContext = createContext(null)
export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('cart', [])
  const addItem = (item) => setCart(prev => {
    const i = prev.findIndex(p => p.id === item.id)
    if (i >= 0) { const copy = [...prev]; copy[i] = { ...copy[i], qty: copy[i].qty + 1 }; return copy }
    return [...prev, { ...item, qty: 1 }]
  })
  const removeItem = (id) => setCart(prev => prev.filter(p => p.id !== id))
  const setQty = (id, qty) => setCart(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, Number(qty)||1) } : p))
  const clear = () => setCart([])
  const count = useMemo(() => cart.reduce((a,p)=>a+p.qty,0), [cart])
  const total = useMemo(() => cart.reduce((a,p)=>a+p.qty*p.price,0), [cart])
  return <CartContext.Provider value={{ cart, addItem, removeItem, setQty, clear, count, total }}>{children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext)