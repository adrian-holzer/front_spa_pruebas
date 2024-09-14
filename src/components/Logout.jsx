import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar token de localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user'); // Si también estás guardando los datos del usuario

    // Redirigir al login
    navigate('/login');
  };

  return (
    <div>
      
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Logout;
