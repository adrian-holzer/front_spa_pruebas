import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token || !user || user.roles[0].name !== 'CLIENTE') {
    // Si no hay token o no es un cliente, redirige al login
    return <Navigate to="/login" />;
  }

  return children;
};

export default RutaProtegida;