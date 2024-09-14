import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';

import VerTurnos from './components/VerTurnos';
import RutaProtegida from './components/RutaProtegida';
import CrearTurno from './components/CrearTurno';
import CategoriasServicios from './components/CategoriasServicios';
import MisTurnos from './components/MisTurnos';
import Logout from './components/Logout';

const App = () => {




  return (

    
    <Router>
         

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrarUsuario" element={<RegisterUser />} />



        <Route path="/crearTurno" element={<CrearTurno />} />

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
