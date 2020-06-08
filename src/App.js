import React, { Fragment, useState } from 'react';
import Appointment from './components/Appointment';
import Formulario from './components/Formulario';

function App() {

	// Array appointments
	const [appointments, saveAppointments] = useState([]);

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
						<Formulario
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

export default App;
