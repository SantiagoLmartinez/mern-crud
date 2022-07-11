import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ListaDeUsuariosComp  from './Components/ListaDeUsuarios';
import { AgregarUsuariosComp } from './Components/AgregarUsuarios';
import { EditarUsuariosComp } from './Components/EditarUsuarios';
import NavbarComp from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <NavbarComp />
<div className="container">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaDeUsuariosComp />} exact></Route>
          <Route path='/editar-usuario/:id_user' element={<EditarUsuariosComp />} exact></Route>
          <Route path='/agregar-usuario' element={<AgregarUsuariosComp />} exact > </Route>
        </Routes>
      </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
