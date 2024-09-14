import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriasServicios = ({ onCategoriaSeleccionada }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        // Llamada a la API para listar las categorías
        axios.get('http://localhost:8080/api/servicio/categorias')
            .then(response => {


setCategorias(response.data.data)
console.log(response.data.data)
                
            } )
            .catch(error => console.error('Error al cargar las categorías', error));
    }, []);

    const handleChange = (e) => {
      onCategoriaSeleccionada(e.target.value);
    };

    return (
        <div>
            <label>Selecciona una categoría:</label>
            <select onChange={handleChange}>
                <option value="">Seleccione una categoría</option>
                {categorias.map(categoria => (
                    <option key={categoria.idCategoria} value={categoria.nombre}>{categoria.nombre}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoriasServicios;
