import { useState, useMemo } from 'react'
import { regionesYComunas } from '../data/regions.js'
export default function Contact(){
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [region, setRegion] = useState('')
  const [comuna, setComuna] = useState('')
  const comunas = useMemo(() => { const r = regionesYComunas.find(r=>r.region === region); return r ? r.comunas : [] }, [region])
  const onSubmit = (e) => { e.preventDefault(); if(!/\S+@\S+\.\S+/.test(email)) return alert('Email inválido'); alert('Enviado. Gracias por contactarnos.') }
  return (
    <section>
      <h2>Contacto</h2>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6"><label className="form-label">Nombre</label><input className="form-control" required value={nombre} onChange={e=>setNombre(e.target.value)} /></div>
        <div className="col-md-6"><label className="form-label">Email</label><input className="form-control" type="email" required value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="col-md-6"><label className="form-label">Región</label>
          <select className="form-select" value={region} onChange={e=>{setRegion(e.target.value); setComuna('')}} required>
            <option value="">Seleccione...</option>
            {regionesYComunas.map(r => <option key={r.region} value={r.region}>{r.region}</option>)}
          </select>
        </div>
        <div className="col-md-6"><label className="form-label">Comuna</label>
          <select className="form-select" value={comuna} onChange={e=>setComuna(e.target.value)} required disabled={!region}>
            <option value="">Seleccione...</option>
            {comunas.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="col-12"><button className="btn btn-primary">Enviar</button></div>
      </form>
    </section>
  )
}