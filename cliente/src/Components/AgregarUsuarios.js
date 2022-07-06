import React,{useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'

export const AgregarUsuariosComp = () => {
//hooks
const [nombre, setNombre]=useState('')
const [nickname, setNickname]=useState('')
const [email, setEmail]=useState('')

  const handleSubmit = (e) =>{
    // e.preventDefault()
    var usuario = {
      nombre: nombre,
      nickname: nickname,
      email: email,
      id_user: uniquid()
    } 
    console.log(usuario)
    axios.post('/api/usuario/agregar-usuario', usuario)
    .then(res => {
      alert(res.data)
    }).then(err => console.log(err))
  }
  
  return (
    <div className='row mt-5'>
      <div className="col-sm-6 col-12 mx-auto">
      <form  method="get">
        <h2>Agregar usuario</h2>
        <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} className='form-control mb-2' type="text"  name='nombre' placeholder='nombre'/>
        <input value={nickname} onChange={(e)=>{setNickname(e.target.value)}} className='form-control mb-2' type="text" name='nickname' placeholder='nickname'/>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control mb-2' type="email" name='email' placeholder='email'/>
        <button onClick={handleSubmit} className='btn btn-primary w-100' type='submit'>Agregar</button>
      </form>
      </div>
    </div>
  )
}
