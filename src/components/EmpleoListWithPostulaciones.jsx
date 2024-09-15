import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmpleoListWithPostulaciones = () => {
    const [empleos, setEmpleos] = useState([]);
    const [selectedEmpleo, setSelectedEmpleo] = useState(null);
    const [postulaciones, setPostulaciones] = useState([]);
    const token = localStorage.getItem('accessToken');

            // Configurar encabezados con el token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            };
    useEffect(() => {
        // Obtener la lista de empleos
        const fetchEmpleos = async () => {
            try {
                const response = await axios.get('http://vps-4291415-x.dattaweb.com:8080/api/empleo/listar');
                setEmpleos(response.data.data);
            } catch (error) {
                console.error('Error al obtener los empleos', error);
            }
        };

        fetchEmpleos();
    }, []);

    const handleViewPostulaciones = async (empleoId) => {
        try {
            const response = await axios.get(`http://vps-4291415-x.dattaweb.com:8080/api/empleo/${empleoId}/postulaciones`,config);

            console.log(response.data)
            setPostulaciones(response.data);
            setSelectedEmpleo(empleoId);
        } catch (error) {
            console.error('Error al obtener las postulaciones', error);
        }
    };

    const handleDownloadCv = async (postulacionId, fileName) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/postulacion/download/${postulacionId}`,config);

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); // Usa el nombre del archivo aquí
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error al descargar el archivo', error);
        }
    };

    return (
        <div>
            <h2>Lista de Empleos</h2>
            <ul>
                {empleos.map((empleo) => (
                    <li key={empleo.idEmpleo}>
                        <h3>{empleo.titulo}</h3>
                        <p>{empleo.descripcion}</p>
                        <button onClick={() => handleViewPostulaciones(empleo.idEmpleo)}>
                            Ver postulaciones
                        </button>
                    </li>
                ))}
            </ul>

            {/* Lista de postulaciones */}
            {selectedEmpleo && (
                <div>
                    <h3>Postulaciones para el empleo ID {selectedEmpleo}</h3>
                    <ul>
                        {postulaciones.map((postulacion) => (
                            <li key={postulacion.idPostulacion}>
                                <span>Postulante ID: {postulacion.idPostulacion}</span>
                                <button onClick={() => handleDownloadCv(postulacion.idPostulacion, postulacion.cvFileName)}>
                                    Descargar CV
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EmpleoListWithPostulaciones;
