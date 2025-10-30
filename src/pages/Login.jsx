import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
export default function Login(){
  const [user, setUser] = useLocalStorage('user', null)
  const [email, setEmail] = useState(''); const [pwd, setPwd] = useState('')
  const onSubmit = (e) => { e.preventDefault(); if(!email || !pwd) return alert('Completa tus credenciales'); setUser({ email }) }
  const logout = () => setUser(null)
  if(user){ return (<section><h2>Hola, {user.email}</h2><button className="btn btn-outline-light" onClick={logout}>Cerrar sesión</button></section>) }
  return (
    <section>
      <h2>Login</h2>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6"><label className="form-label">Email</label><input className="form-control" type="email" required value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="col-md-6"><label className="form-label">Contraseña</label><input className="form-control" type="password" required value={pwd} onChange={e=>setPwd(e.target.value)} /></div>
        <div className="col-12"><button className="btn btn-primary">Entrar</button></div>
      </form>
    </section>
  )
}