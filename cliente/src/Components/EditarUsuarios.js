import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const EditarUsuariosComp = () => {
  const params = useParams()

    //hooks
    const [nombre, setNombre] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
  


  useEffect(() => {
    axios.post('/api/usuario/obtener-usuario', { id_user: params.id_user }).then(res => {
      const dataUsuario = res.data[0]

      setNombre(dataUsuario.nombre)
      setNickname(dataUsuario.nickname)
      setEmail(dataUsuario.email)
    })

    return () => {

    }
  }, [])

  const handleOnSubmit = () => {
    const actualizarUsuario = {
      nombre: nombre,
      nickname: nickname,
      email: email,
      id_user: params.id_user
    }
    //hacer peticion usando axios
    axios.post('/api/usuario/actualiza-usuario', actualizarUsuario)
    .then(res => {
      alert(res.data)
    }).then(err => console.log(err))
    console.log('actualizar')
  }


  return (
    <div className='row mt-5'>
      <div className="col-sm-6 col-12 mx-auto">
         <form action='/' > 
          <h2>Editar usuario</h2>
          <input className='form-control mb-2' onChange={(e)=>{setNombre(e.target.value)}} type="text" name='nombre' value={nombre} />
          <input className='form-control mb-2' onChange={(e)=>{setNickname(e.target.value)}} type="text" name='nickname' value={nickname} />
          <input className='form-control mb-2' onChange={(e)=>{setEmail(e.target.value)}} type="email" name='email' value={email} />
          <button onClick={handleOnSubmit} className='btn btn-primary w-100' type='submit'>Editar</button>
         </form> 
      </div>
    </div>
  )
}
