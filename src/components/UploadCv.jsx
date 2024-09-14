import React, { useState } from 'react';
import axios from 'axios';

const UploadCv = () => {
    const [file, setFile] = useState(null);
    const [empleoId, setEmpleoId] = useState('');
    const [message, setMessage] = useState('');

    // Maneja el cambio en el input de archivo
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Maneja el cambio en el input de ID de empleo
    const handleEmpleoIdChange = (e) => {
        setEmpleoId(e.target.value);
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !empleoId) {
            setMessage('Por favor, complete todos los campos.');
            return;
        }

        const formData = new FormData();
        formData.append('cv', file);
        formData.append('id_empleo', empleoId);

        try {
            // Cambia la URL del endpoint según tu configuración
            const response = await axios.post('http://localhost:8080/api/postulacion/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('CV subido exitosamente.');
            console.log(response.data); // Para ver la respuesta del servidor
        } catch (error) {
            setMessage('Error al subir el CV.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Subir CV</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID de Empleo:</label>
                    <input
                        type="text"
                        value={empleoId}
                        onChange={handleEmpleoIdChange}
                        required
                    />
                </div>
                <div>
                    <label>Seleccionar CV (PDF):</label>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Enviar Postulación</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UploadCv;
