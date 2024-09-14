import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
import { Link } from 'react-router-dom';

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {


        
            // Configurar encabezados con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            };

        // Llamada para obtener los turnos del usuario logueado
        axios.get('http://localhost:8080/api/turno/misTurnos', config)
        .then(response => {

            console.log(response.data)

            setTurnos(response.data.data);
        })
        .catch(error => {
            console.error('Error al cargar los turnos', error);
        });
    }, []);

    // Función para cancelar un turno
    const cancelarTurno = (idTurno) => {


        
            // Configurar encabezados con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            };

        axios.delete(`http://localhost:8080/api/turno/cancelar/${idTurno}`, config)
        .then(response => {
            console.log('Turno cancelado con éxito', response.data);
            // Actualizar la lista de turnos después de cancelar
            setTurnos(turnos.filter(turno => turno.id !== idTurno));
        })
        .catch(error => {
            console.error('Error al cancelar el turno', error);
        });
    };

    return (
        <div>

            <h2>Mis Turnos</h2>
            {token && <Logout />}  
              {/* Link para ir a crear un nuevo turno */}
              <Link to="/crearTurno">
                <button>Crear Nuevo Turno</button>
            </Link>
            <ul>
                {turnos.map(turno => (
                    <li key={turno.idTurno}>
                        <p>Fecha: {turno.fecha}</p>
                        <p>Hora: {turno.horaInicio} - {turno.horaFin}</p>
                        <p>Servicio: {turno.servicio.detallesServicio}</p>
                        <p>Estado: {turno.estado}</p>
                        <button onClick={() => cancelarTurno(turno.idTurno)}>Cancelar Turno</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MisTurnos;
