import React from 'react';

const VerTurnos = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      
      <h2>Turnos del Cliente</h2>
      <p>Nombre: {user.nombre} {user.apellido}</p>
      <p>DNI: {user.dni}</p>
      {/* Aquí iría la lógica para mostrar los turnos */}
    </div>
  );
};

export default VerTurnos;