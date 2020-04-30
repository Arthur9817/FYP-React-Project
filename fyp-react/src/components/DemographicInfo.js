import React, { Component } from "react";
import { Header, Segment, Container } from "semantic-ui-react";

class DemographicInfo extends Component {
	constructor(props) {
		super(props);

		this.state = { patient_data: this.props.data };
	}

	checkOnsetSite() {
		if (
			this.state.patient_data["Site of onset"] ===
			"Cognitive/Behavioural and Spinal"
		) {
			return (
				<p style={{ fontSize: 16 }}>
					<b>Site of onset: </b>
					{this.state.patient_data["Site of onset"]}
				</p>
			);
		} else {
			return (
				<p style={{ fontSize: 18 }}>
					<b>Site of onset: </b>
					{this.state.patient_data["Site of onset"]}
				</p>
			);
		}
	}

	render() {
		return (
			<Container fluid className="patient-info">
				<Header size="huge" style={{ textAlign: "center" }}>
					{this.state.patient_data["Sample ID"]}
				</Header>
				<Segment size="small">
					<p style={{ fontSize: 18 }}>
						<b>Date of birth: </b>
						{this.state.patient_data.DOB}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Gender: </b>
						{this.state.patient_data.Gender}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Date of Onset: </b>
						{this.state.patient_data["Date of Onset"]}
					</p>
					{this.checkOnsetSite()}
					<p style={{ fontSize: 18 }}>
						<b>El Escorial: </b>
						{this.state.patient_data["El Escorial"]}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Date of Diagnosis: </b>
						{this.state.patient_data["Date of Diagnosis"]}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Onset To Diagnosis(months): </b>{" "}
						{this.state.patient_data["Onset To Diagnosis(months)"]}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Onset To Death(months):</b>{" "}
						{this.state.patient_data["Onset To Death(months)"]}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Diagnosis to Death(months):</b>{" "}
						{this.state.patient_data["Diagnosis to Death(months)"]}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Date of Death: </b>
						{this.state.patient_data["Date of Death"]}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>Does the patient have dementia:</b>{" "}
						{this.state.patient_data["Does the patient have dementia?"]}
					</p>
					<p style={{ fontSize: 18 }}>
						<b>C9orf72 Repeat Expansion:</b>{" "}
						{this.state.patient_data["C9orf72 Repeat Expansion"]}
					</p>
				</Segment>
			</Container>
		);
	}
}

export default DemographicInfo;
