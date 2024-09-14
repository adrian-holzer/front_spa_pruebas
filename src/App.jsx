import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import VerTurnos from './components/VerTurnos';
import RutaProtegida from './components/RutaProtegida';
import CrearTurno from './components/CrearTurno';
import CategoriasServicios from './components/CategoriasServicios';
import MisTurnos from './components/MisTurnos';
import UploadCv from './components/UploadCv'; // Tu componente UploadCv
import EmpleoList from './components/EmpleoList';
import NavBar from './components/NavBar';
import EmpleoListWithPostulaciones from './components/EmpleoListWithPostulaciones'; // Asegúrate de la ruta correcta

import Logout from './components/Logout';
import { Link } from 'react-router-dom';

const App = () => {




  return (

    
    <Router>

      <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrarUsuario" element={<RegisterUser />} />

        <Route path="/empleo" element={<EmpleoList />} />
        <Route path="/crearTurno" element={<CrearTurno />} />
        <Route path="/empleosProfesional" element={<EmpleoListWithPostulaciones />} />

        <Route path="/misTurnos" element={<RutaProtegida>
          <MisTurnos />        </RutaProtegida>
        } />



        <Route
          path="/ver-turnos"
          element={
            <RutaProtegida>
              <VerTurnos />
            </RutaProtegida>
          }
        />
       
      </Routes>
    </Router>
  );
};

export default App;
