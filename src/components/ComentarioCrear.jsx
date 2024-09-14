import React, { useState } from 'react';

export const ComentarioCrear = () => {
  const [nombrePersona, setNombrePersona] = useState('');
  const [textoComentario, setTextoComentario] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const comentario = {
      nombrePersona,
      textoComentario,
    };

    try {
      const response = await fetch('http://localhost:8080/api/comentario/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comentario),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      // Aquí puedes hacer algo si el comentario se envía correctamente
      console.log('Comentario enviado con éxito');
      setNombrePersona('');
      setTextoComentario('');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Deja tu comentario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombrePersona">Nombre:</label>
          <input
            id="nombrePersona"
            type="text"
            value={nombrePersona}
            onChange={(e) => setNombrePersona(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="textoComentario">Comentario:</label>
          <textarea
            id="textoComentario"
            value={textoComentario}
            onChange={(e) => setTextoComentario(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

