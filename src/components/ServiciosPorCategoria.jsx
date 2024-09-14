import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiciosPorCategoria = ({ categoriaNombre, onServicioSeleccionado }) => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        if (categoriaNombre) {
            axios.get(`http://localhost:8080/api/servicio/listar?categoria=${categoriaNombre}`)
                .then(response => setServicios(response.data.data))
                .catch(error => console.error('Error al cargar los servicios', error));
        }
    }, [categoriaNombre]);

    return (
        <div>
            <label>Selecciona un servicio:</label>
            <select onChange={(e) => onServicioSeleccionado(e.target.value)}>
                <option value="">Seleccione un servicio</option>
                {servicios.map(servicio => (
                    <option key={servicio.idServicio} value={servicio.idServicio}>{servicio.detallesServicio}</option>
                ))}
            </select>
        </div>
    );
};

export default ServiciosPorCategoria;
