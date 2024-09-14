import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    // Realiza la llamada a la API
    axios.get('http://localhost:8080/api/comentario/listar')
      .then((response) => {
        // Almacena los comentarios en el estado
        console.log(response.data);
        setComentarios(response.data.data);
      })
      .catch((error) => {
        console.error('Error al obtener los comentarios', error);
      });
  }, []);

  return (
    <div>
      <h2>Listado de Comentarios</h2>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.idComentario}>
            <h3>{comentario.nombrePersona}</h3>
            <p>{comentario.textoComentario}</p>
            <small>Creado: {new Date(comentario.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

