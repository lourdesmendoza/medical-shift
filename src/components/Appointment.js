import React from 'react';
import PropTypes from 'prop-types';


const Appointment = ({ appointment, removeAppointment }) => {
    return ( 
        <div className="cita">
            <p> Pet: <span>{appointment.pet}</span> </p>
            <p> Owner: <span>{appointment.owner}</span> </p>
            <p> Date: <span>{appointment.date}</span> </p>
            <p> Hour: <span>{appointment.hour}</span> </p>
            <p> Symptoms: <span>{appointment.symptoms}</span> </p>

            <button
                className="button eliminar u-full-width"
                onClick={() => removeAppointment(appointment.id)}
            >Removed &times;</button>
        </div>
    );
}

Appointment.prototype = {
    appointment: PropTypes.object.isRequired,
    removeAppointment: PropTypes.func.isRequired
}
 
export default Appointment;