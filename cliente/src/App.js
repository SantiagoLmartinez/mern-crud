import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListaDeUsuariosComp } from './Components/ListaDeUsuarios';
import { AgregarUsuariosComp } from './Components/AgregarUsuarios';
import { EditarUsuariosComp } from './Components/EditarUsuarios';

function App() {
  return (
    <div className="App">

      <h1>MERN CRUD</h1>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaDeUsuariosComp />}  exact></Route>
          <Route path='/editar-usuario' element={<EditarUsuariosComp />}  exact></Route>
          <Route path='/agregar-usuario' element={<AgregarUsuariosComp />} exact > </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
