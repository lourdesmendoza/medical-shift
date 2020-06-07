import React, { Fragment, useState } from 'react';
import { v4 } from 'uuid';

const Formulario = ({ createAppointment }) => {
    // Create appointment states
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    }) 

    const [error, setError] = useState(false);

    // Function that executes when the user writes in the form
    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    // Get values
    const {pet, owner, date, hour, symptoms } = appointment;

    // When user press submit appointment
    const submitAppointment = e => {
        e.preventDefault();

        // Validation
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
            setError(true);
            return;
        }

        // Remove prev message
        setError(false);

        // Assign an ID
        appointment.id = v4();

        //Create appointment
        createAppointment(appointment);


        // Reset form
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        })
    }

    return (
        <Fragment>
            <h2>Create appointment</h2>

            {error
                ? <p className="alerta-error">All fields are required</p>
                : null
            }

            <form
                onSubmit={submitAppointment}
            >
                <label>Pet's name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Name of your pet"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Owner's name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                    onChange={handleChange}
                    value={owner}
                />

                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Hour</label>
                <input
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />

                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add appointment</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;