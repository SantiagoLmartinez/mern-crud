import React from 'react'

export const EditarUsuariosComp = () => {
  return (
    <div className='row mt-5'>
      <div className="col-sm-6 col-12 mx-auto">
      <form action="/agregar-usuario" method="get">
        <h2>Editar usuario</h2>
        <input className='form-control mb-2' type="text" name='nombre' placeholder='nombre'/>
        <input className='form-control mb-2' type="text" name='nickname' placeholder='nickname'/>
        <input className='form-control mb-2' type="email" name='email' placeholder='email'/>
        <button className='btn btn-primary w-100' type='submit'>Editar</button>
      </form>
      </div>
    </div>
  )
}
