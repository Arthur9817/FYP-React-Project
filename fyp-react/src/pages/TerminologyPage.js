import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "../App.css";

class TerminologyPage extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Container style={{ marginTop: 45 }}>
				<Segment size="large">
					<Header style={{ textAlign: "center", fontSize: 26 }}>
						Terminology
					</Header>
					<p style={{ fontSize: 18 }}>
						<b>Rare disease </b>– A rare disease is defined as a disease that
						affects a very small portion of the population.{" "}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Motor Neuron Disease (MND)</b> – A progressive rare disease that
						attacks the body's motor neurones located in the central nervous
						system.
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Amyotrophic lateral sclerosis (ALS)</b> – A type of MND that is
						progressive, debilitating and neurodegenerative with a life
						expectancy of three to five years.
					</p>
					<p style={{ fontSize: 18 }}>
						<b>ALS Functional Rating Scale - Revised (ALSFRS-R)</b> – A rating
						scale designed to quantify the progression of ALS as rated by the
						patient.
					</p>
					<p style={{ fontSize: 18 }}>
						<b>El Escorial</b> – A criteria used for the diagnosis of ALS
						(definite vs probable or possible ALS).
					</p>
					<p style={{ fontSize: 18 }}>
						<b>C9orf72 Repeat Expansion</b> – A hexanucleotide repeat expansions
						in the chromosome 9 open reading frame 72 gene.
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Population based register</b> – A population based register
						contains records for people diagnosed with a specific type of
						disease who reside within a defined geographic region.
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Referral based register</b> – A referral based register contains
						records for people diagnosed with a specific type of disease who
						have been referred to a hospital or facility. Referral based
						registers only holds a subset of the full population with the
						disease.
					</p>
					<p style={{ fontSize: 18 }}>
						<b>SNIP</b> – Sniff nasal inspiratory pressure.
					</p>
					<p style={{ fontSize: 18 }}>
						<b>FVC</b> – Forced vital capacity.
					</p>
				</Segment>
			</Container>
		);
	}
}

export default TerminologyPage;
