import React, { Component } from "react";
import {
	Button,
	Icon,
	Modal,
	Container,
	Grid,
	Tab,
	Divider,
} from "semantic-ui-react";
import ClinicTable from "./Table";
import InfoPopup from "./InfoPopup";
import LineChart from "./LineChart";

class ClinicalVisits extends Component {
	constructor(props) {
		super(props);

		this.state = { userID: this.props.id, clinic_data: this.props.data };
	}

	state = { openModal: false };

	openModal = () => this.setState({ openModal: true });
	closeModal = () => this.setState({ openModal: false });

	render() {
		const { openModal } = this.state;

		const panes = [
			{
				menuItem: { content: "Table", icon: "table", key: "table" },
				render: () => (
					<Tab.Pane>
						<ClinicTable data={this.state.clinic_data} />
					</Tab.Pane>
				),
			},
			{
				menuItem: { content: "Graphs", icon: "line graph", key: "graphs" },
				render: () => (
					<Tab.Pane>
						<Container fluid className="tableLegend">
							<Grid columns={2} celled>
								<Grid.Row style={{ padding: 0 }}>
									<Grid.Column style={{ minWidth: 400 }}>
										<h2 style={{ textAlign: "center" }}>Total ALSFRS-R</h2>
										<LineChart data={this.state.clinic_data} type="total" />
									</Grid.Column>
									<Grid.Column divided="true" style={{ minWidth: 400 }}>
										<h2 style={{ textAlign: "center" }}>
											ALSFRS-R Bulbar Subscore (1-3)
										</h2>
										<LineChart data={this.state.clinic_data} type="bulbar" />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column style={{ minWidth: 400 }}>
										<h2 style={{ textAlign: "center" }}>
											ALSFRS-R Motor Subscore (4-9)
										</h2>
										<LineChart data={this.state.clinic_data} type="motor" />
									</Grid.Column>
									<Grid.Column style={{ minWidth: 400 }}>
										<h2 style={{ textAlign: "center" }}>
											ALSFRS-R Respiratory Subscore (10-12)
										</h2>
										<LineChart
											data={this.state.clinic_data}
											type="respiratory"
										/>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					</Tab.Pane>
				),
			},
			{
				menuItem: { content: "Information", icon: "info circle", key: "info" },
				render: () => (
					<Tab.Pane>
						<Container fluid className="tableLegend">
							<Grid columns={2}>
								<Grid.Column style={{ minWidth: 400 }}>
									<p>
										<b>ALSFRS-R 1</b> = Speech <InfoPopup number={"1"} />
									</p>
									<p>
										<b>ALSFRS-R 2</b> = Salivation <InfoPopup number={"2"} />
									</p>
									<p>
										<b>ALSFRS-R 3</b> = Swallowing <InfoPopup number={"3"} />
									</p>
									<p>
										<b>ALSFRS-R 4</b> = Handwriting
										<InfoPopup number={"4"} />
									</p>
									<p>
										<b>ALSFRS-R 5a</b> = Utensils Handling No Gastrostomy
										<InfoPopup number={"5a"} />
									</p>
									<p>
										<b>ALSFRS-R 5b</b> = Utensils Handling Gastrostomy
										<InfoPopup number={"5b"} />
									</p>
									<p>
										<b>ALSFRS-R 6</b> = Dressing and hygiene{" "}
										<InfoPopup number={"6"} />
									</p>
								</Grid.Column>
								<Grid.Column style={{ minWidth: 400 }}>
									<p>
										<b>ALSFRS-R 7</b> = Turning in bed and adjusting bed clothes
										<InfoPopup number={"7"} />
									</p>
									<p>
										<b>ALSFRS-R 8</b> = Walking <InfoPopup number={"8"} />
									</p>
									<p>
										<b>ALSFRS-R 9</b> = Climbing stairs
										<InfoPopup number={"9"} />
									</p>
									<p>
										<b>ALSFRS-R 10</b> = Dyspnea <InfoPopup number={"10"} />
									</p>
									<p>
										<b>ALSFRS-R 11</b> = Orthopnea
										<InfoPopup number={"11"} />
									</p>
									<p>
										<b>ALSFRS-R 12</b> = Respiratory insufficiency
										<InfoPopup number={"12"} />
									</p>
								</Grid.Column>
							</Grid>
							<Divider />
							Reference:{" "}
							<a
								href={
									"https://www.encals.eu/wp-content/uploads/2016/09/ALSFRS-SOP-ENCALS-presentation.pdf"
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.encals.eu/wp-content/uploads/2016/09/ALSFRS-SOP-ENCALS-presentation.pdf
							</a>
						</Container>
					</Tab.Pane>
				),
			},
		];

		const Tabs = () => <Tab panes={panes} />;
		return (
			<Modal
				size="fullscreen"
				open={openModal}
				trigger={
					<Button color="blue" fluid onClick={this.openModal}>
						Clinical visits
					</Button>
				}
				centered={false}
			>
				<Modal.Header style={{ fontSize: 25 }}>
					<Modal.Actions>
						<Button icon color="red" floated="right" onClick={this.closeModal}>
							<Icon name="close" />
						</Button>
					</Modal.Actions>
					Clinical visits: {this.state.userID}
				</Modal.Header>
				{Tabs()}
			</Modal>
		);
	}
}

export default ClinicalVisits;
