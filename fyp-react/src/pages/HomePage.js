import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "../App.css";

class HomePage extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Container style={{ marginTop: 45 }}>
				<Segment size="large">
					<Header style={{ textAlign: "center", fontSize: 26 }}>Welcome</Header>
					<p style={{ fontSize: 18 }}>
						This project was created to provide a dashboard that displays an
						individual patient’s Motor Neuron Disease (MND) register record.
					</p>
					<p style={{ fontSize: 18 }}>
						The purpose of this website is to communicate understanding to
						domain analysts of an agreed prediction model used by clinicians to
						predict survival in patients with Motor Neuron Disease.
					</p>
					<p style={{ fontSize: 18 }}>
						The approach to communicating this understanding is by:
						<li>
							Displaying relevant parts of 15 Individuals’ Motor Neuron Disease
							records. – Click on the MND Register section.
						</li>
						<li>
							Providing information and references about the MND prediction
							model. – Click on the About section.
						</li>
						<li>
							Explaining the different terminology used. – Click on the
							Terminology section.
						</li>
					</p>
					<p style={{ fontSize: 18 }}>
						This work is part of the Motor Neuron Disease Patient Data Platform
						(PDP) designed by teams from two Science Foundation Ireland (SFI)
						centres, ADAPT and Future Neuro. All information on this site has
						been validated by relevant members of the MND PDP project team.
					</p>
				</Segment>
			</Container>
		);
	}
}

export default HomePage;
