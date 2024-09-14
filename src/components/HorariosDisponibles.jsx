import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HorariosDisponibles = ({ servicioId, fecha, onHorarioSeleccionado }) => {
    const [horarios, setHorarios] = useState([]);
    const token = localStorage.getItem('accessToken');
    useEffect(() => {
        if (servicioId && fecha) {

            // Configurar encabezados con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            };

            console.log(config);
            axios.get(`http://localhost:8080/api/turno/disponibles?fecha=${fecha}&servicioId=${servicioId}`, config)
                .then(response => {
                    console.log(response.data.horarios_disponibles)



                    // Ordenar los horarios por hora_inicio
                    const horariosOrdenados = response.data.horarios_disponibles.sort((h1, h2) => {
                        const [horaInicio] = h1.hora_inicio.split(':').map(Number);
                        const [horaFin] = h2.hora_fin.split(':').map(Number);
                        return horaInicio - horaFin;
                    });
                    setHorarios(horariosOrdenados)

                })
                .catch(error => console.error('Error al cargar los horarios disponibles', error));
        }
    }, [servicioId, fecha]);

    return (
        <div>
            <label>Selecciona un horario:</label>
            <select onChange={(e) => onHorarioSeleccionado(JSON.parse(e.target.value))}>
                <option value="">Seleccione un horario</option>
                {horarios.map((horario, index) => (
                    <option
                        key={index}
                        value={JSON.stringify({ horaInicio: horario.hora_inicio, horaFin: horario.hora_fin })}
                    >
                        {horario.hora_inicio} - {horario.hora_fin}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default HorariosDisponibles;
