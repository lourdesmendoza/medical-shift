import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'

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


	return (
		<Fragment>
			<h1>Administrador de pacientes</h1>

			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario
							createAppointment={createAppointment}
						/>
					</div>
					<div className="one-half column">

					</div>
					
				</div>
			</div>
		</Fragment>
	)
}

export default App;
