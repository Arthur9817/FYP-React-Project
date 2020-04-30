import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import ALSFRSRscores from "../components/ALSFRSRscores";
import DemographicInfo from "../components/DemographicInfo";
import Medication from "../components/Medication";
import ClinicalVisits from "../components/ClinicalVisits";
import MissingInfo from "../components/MissingInfo";
import Completeness from "../components/Completeness";
import * as Scroll from "react-scroll";

class PatientDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			patient_data: (this.state = JSON.parse(localStorage.getItem("patient"))
				? JSON.parse(localStorage.getItem("patient"))
				: props.location.data.user),
			clinic_visit_data: (this.state = JSON.parse(
				localStorage.getItem("clinic")
			)
				? JSON.parse(localStorage.getItem("clinic"))
				: props.location.data.clinic),
			single_clinic_data: [],
			missing_info: [],
			isMissing: false,
			completness: 0,
		};
	}

	componentDidMount() {
		this.orderByLatestDate();
		this.getMissingInfo();
		this.getCompleteness();

		var scroll = Scroll.animateScroll;
		scroll.scrollToBottom();
	}

	UNSAFE_componentWillMount() {
		localStorage.getItem("patient_data") &&
			this.setState({
				patient_data: JSON.parse(localStorage.getItem("patient_data")),
			});
		localStorage.getItem("clinic_visit_data") &&
			this.setState({
				clinic_visit_data: JSON.parse(
					localStorage.getItem("clinic_visit_data")
				),
			});
	}

	UNSAFE_componentWillUpdate(nextProps, nextState) {
		localStorage.setItem("patient", JSON.stringify(nextState.patient_data));
		localStorage.setItem("clinic", JSON.stringify(nextState.clinic_visit_data));
	}

	componentWillUnmount() {
		localStorage.clear("patient", "clinic");
	}

	orderByLatestDate() {
		for (let i = 0; i < this.state.clinic_visit_data.length; i++) {
			if (
				this.state.clinic_visit_data[i].undefined ===
				this.state.patient_data["Sample ID"]
			) {
				this.state.single_clinic_data.push(this.state.clinic_visit_data[i]);
			}
		}
		this.state.single_clinic_data.sort(function (a, b) {
			var aa = a["Clinical visit date"].split("/").reverse().join(),
				bb = b["Clinical visit date"].split("/").reverse().join();
			return aa > bb ? -1 : aa < bb ? 1 : 0;
		});
	}

	getCompleteness() {
		this.state.completness = Number(
			((Object.entries(this.state.patient_data).length -
				this.state.missing_info.length) /
				Object.entries(this.state.patient_data).length) *
				100
		).toFixed(1);
	}

	async getMissingInfo() {
		await Object.entries(this.state.patient_data).forEach((element) => {
			if (element[1] === null || element[1] === "") {
				this.state.missing_info.push(element[0]);
			}
		});

		if (this.state.missing_info && this.state.missing_info.length > 0) {
			this.setState({ isMissing: true });
		}
	}

	render() {
		return (
			<Container fluid>
				<Container style={{ width: "97%" }}>
					<Grid centered columns={2} style={{ margin: 0 }}>
						<Grid.Row>
							<Grid.Column width={5} style={{ minWidth: 350 }}>
								<DemographicInfo data={this.state.patient_data} />
							</Grid.Column>

							<Grid.Column width={11} style={{ minWidth: 350 }}>
								<Grid.Column>
									<ALSFRSRscores data={this.state.single_clinic_data} />
								</Grid.Column>

								<Grid columns={2}>
									<Grid.Column width={9}>
										<Completeness data={this.state.completness} />
									</Grid.Column>

									<Grid.Column width={7} style={{ minWidth: 350 }}>
										<Medication data={this.state.patient_data} />
									</Grid.Column>
								</Grid>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>

				<Container style={{ width: "97%" }} fluid>
					<Grid centered columns={2} style={{ margin: 0 }}>
						<Grid.Column width={5} style={{ minWidth: 350 }}>
							<Container className="button-box">
								<Grid columns={2}>
									<Grid.Column>
										<ClinicalVisits
											id={this.state.patient_data["Sample ID"]}
											data={this.state.single_clinic_data}
										/>
									</Grid.Column>

									<Grid.Column>
										<MissingInfo
											id={this.state.patient_data["Sample ID"]}
											data={this.state.missing_info}
											state={this.state.isMissing}
										/>
									</Grid.Column>
								</Grid>
							</Container>
						</Grid.Column>
						<Grid.Column width={11} style={{ minWidth: 350 }}>
							<Container className="reference-box">
								<h3>
									Website links:{" "}
									<a
										href={"https://www.adaptcentre.ie"}
										target="_blank"
										rel="noopener noreferrer"
									>
										adaptcentre.ie
									</a>
									,{" "}
									<a
										href={"https://www.futureneurocentre.ie/"}
										target="_blank"
										rel="noopener noreferrer"
									>
										futureneurocentre.ie
									</a>
									,{" "}
									<a
										href={"https://www.hse.ie/"}
										target="_blank"
										rel="noopener noreferrer"
									>
										hse.ie
									</a>
								</h3>
							</Container>
						</Grid.Column>
					</Grid>
				</Container>
			</Container>
		);
	}
}

export default PatientDashboard;
