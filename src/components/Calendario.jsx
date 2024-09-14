import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendario.css'; // Asegúrate de importar el archivo de estilos

const Calendario = ({ onFechaSeleccionada }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 1);

    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 20);

    const isWeekday = (date) => {
        return date.getDay() !== 0; // Deshabilitar domingos
    };

    const handleDateChange = (date) => {
        if (date && isWeekday(date)) {
            setSelectedDate(date); // Actualiza la fecha seleccionada
            onFechaSeleccionada(date.toISOString().split('T')[0]);
        } else if (date) {
            alert('Los domingos no están disponibles.');
        }
    };

    return (
        <div>
            <label>Selecciona una fecha:</label>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={minDate}
                maxDate={maxDate}
                filterDate={isWeekday}
                dateFormat="yyyy-MM-dd"
                placeholderText="Selecciona una fecha"
                className="datepicker-input" // Clase CSS personalizada
                 // Establece el campo como solo lectura
                disabledKeyboardNavigation // Desactiva la navegación por teclado
                withPortal // Muestra el calendario en un portal para evitar la edición del campo
            />
        </div>
    );
};

export default Calendario;
