import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function UsuarioIndividualComp({ data = [] }) {
  // console.log(usuario)

  const borrarUsuario = (id_user) =>{
    axios.post('/api/usuario/eliminar-usuario',{id_user : id_user}).then(
      res =>{
        console.log(res.data)
      }).catch( err => {
        console.log(err, 'fallo al eliminar usuario')
      }
      )
  }

  return (
    <div className='container'>
      {
        data.map((item, index) => (

          <div className="row mt-1" key={index}>
            <div className='col-6 mx-auto'>
              <ul className='list-group mb-2' >
                <li className='list-group-item'>Nombre: {item.nombre}</li>
                <li className='list-group-item'>Nickname: {item.nickname}</li>
                <li className='list-group-item'>Email:  {item.email}</li>
              </ul>
              <div className=''>
                {/* <button className='btn btn-success  w-50'></button> */}
                <Link to={`/editar-usuario/${item.id_user}`}><li className='btn btn-success'>Editar</li></Link>
                <button className='btn btn-danger'
                  onClick={()=> {borrarUsuario(item.id_user)}}
                >Eliminar</button>
              </div>
            </div >
            <hr  className='mt-1'/>
          </div>
        ))
      }
      <hr className='mt-4' />
    </div>
  )
}
export default UsuarioIndividualComp