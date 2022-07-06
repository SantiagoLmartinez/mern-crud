import React from 'react'

function UsuarioIndividualComp({ data = [] }) {
  // console.log(usuario)
  return (
    <div className='container'>
      {
        data.map((item, index) => (

          <div className="row mt-2" key={index}>
            <div className='col-6 mx-auto'>

              <ul className='list-group mb-2' >
                <li className='list-group-item'>Nombre: {item.nombre}</li>
                <li className='list-group-item'>Nickname: {item.nickname}</li>
                <li className='list-group-item'>Email:  {item.email}</li>
              </ul>
              <div className=''>
                <button className='btn btn-success w-50'>1</button>
                <button className='btn btn-danger w-50'>2</button>
              </div>
            </div>
          </div>
        ))
      }
      <hr className='mt-4' />
    </div>
  )
}
export default UsuarioIndividualComp