import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Appointment from './components/Appointment';
import Form from './components/Form';

function App() {

	//Appointment at localStorage
	let initAppointment = JSON.parse(localStorage.getItem('appointment'));

	if (!initAppointment) {
		initAppointment = [];
	}

	// Array appointments
	const [appointments, saveAppointments] = useState([initAppointment]);


	//useEffect to perform certain operations when the state changes
	//useEffect like componentDidMount and componentDidUpdate in the same function
	useEffect(() => {
		if(initAppointment) {
			localStorage.setItem('appointment', JSON.stringify(appointments));
		} else {
			localStorage.setItem('appointment', JSON.stringify([]))
		}
	}, [appointments, initAppointment])


	// Function to take current appointments and add new ones
	const createAppointment = appointment => {
		saveAppointments([
			...appointments,
			appointment
		])
	}


	//Remove appointment by ID
	const removeAppointment = (id) => {
		const newAppointment  = appointments.filter(appointment => appointment.id !== id);

		saveAppointments(newAppointment);
	}


	// Conditional message
	const title = appointments.length === 0 ? 'No appointments' : 'Manage your appointments';


	return (
		<Fragment>
			<h1>Appointment manager</h1>

			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Form
							createAppointment={createAppointment}
						/>
					</div>
					<div className="one-half column">
						<h2>{title}</h2>

						{appointments.map(appointment => (
							<Appointment
								key={appointment.id}
								appointment={appointment}
								removeAppointment={removeAppointment}
							/>
						))}
					</div>
					
				</div>
			</div>
		</Fragment>
	)
}

Form.propTypes = {
	createAppointment: PropTypes.func.isRequired
}
export default App;
