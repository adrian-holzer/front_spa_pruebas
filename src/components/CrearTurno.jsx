import React, { useState } from 'react';
import axios from 'axios';
import CategoriasServicios from './CategoriasServicios';
import ServiciosPorCategoria from './ServiciosPorCategoria';
import Calendario from './Calendario';
import HorariosDisponibles from './HorariosDisponibles';
import { useNavigate } from 'react-router-dom';

const CrearTurno = ({ idCliente }) => {
    const [categoriaNombre, setcategoriaNombre] = useState('');
    const [servicioId, setServicioId] = useState('');
    const [fecha, setFecha] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
    const token = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const handleHorarioSeleccionado = (horarioSeleccionado) => {
        setHoraInicio(horarioSeleccionado.horaInicio);
        setHoraFin(horarioSeleccionado.horaFin);
    };

    const handleCrearTurno = () => {
        const turnoData = {
            id_cliente: idCliente,
            id_servicio: servicioId,
            fecha: fecha,
            horaInicio: horaInicio,
            horaFin: horaFin,
        };

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }

        };

        axios.post('http://localhost:8080/api/turno/crear', turnoData,config)
            .then(response => {
                console.log('Turno creado con éxito', response.data);


                navigate('/misTurnos');
            })
            .catch(error => {
                console.error('Error al crear el turno', error);
            });
    };

    return (
        <div>
            <CategoriasServicios onCategoriaSeleccionada={setcategoriaNombre} />
            {categoriaNombre && <ServiciosPorCategoria categoriaNombre={categoriaNombre} onServicioSeleccionado={setServicioId} />}
            {servicioId && <Calendario onFechaSeleccionada={setFecha} />}
            {fecha && <HorariosDisponibles servicioId={servicioId} fecha={fecha} onHorarioSeleccionado={handleHorarioSeleccionado} />}
            {horaInicio && horaFin && (
                <button onClick={handleCrearTurno}>
                    Crear Turno
                </button>
            )}
        </div>
    );
};

export default CrearTurno;
