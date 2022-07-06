import axios from 'axios';
import React, { useState, useEffect } from 'react'
import  UsuarioIndividualComp  from '../Components/UsuarioIndividual';

function ListaDeUsuariosComp() {

  const [data, setData ] = useState([])

  useEffect(() => {
    axios.get('api/usuario/obtener-usuarios').then(res =>{
      //console.log(res.data)
      setData(res.data)
    }).catch(err =>{console.log(err);})
  }, [])
  
  

  return (
    <div>
      {/* <h2 className='text-center'>Lista de usuarios</h2> */}
      {/* {listaDeUsuarios} */}
      <UsuarioIndividualComp data={data} />
    </div>
  ) 
}

export default ListaDeUsuariosComp