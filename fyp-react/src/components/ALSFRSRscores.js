import React, { Component } from "react";
import {
	Header,
	Icon,
	Segment,
	Container,
	Grid,
	Statistic,
} from "semantic-ui-react";

class ALSFRSRscores extends Component {
	constructor(props) {
		super(props);

		this.state = { clinic_data: this.props.data };
	}

	getTotalScore() {
		let tmp = [];
		for (let i = 0; i < this.state.clinic_data.length; i++) {
			if (this.state.clinic_data[i]["Total"] !== undefined) {
				tmp.push(this.state.clinic_data[i]["Total"]);
			}
		}

		if (tmp.length > 0) {
			if (tmp[0] < tmp[1]) {
				return (
					<div>
						{tmp[0]}
						<Icon size="tiny" name="arrow down" color="red" />
					</div>
				);
			} else if (tmp[0] > tmp[1]) {
				return (
					<div>
						{tmp[0]}
						<Icon size="tiny" name="arrow up" color="green" />
					</div>
				);
			} else if (tmp[0] === tmp[1]) {
				return <div>{tmp[0]}-</div>;
			} else return tmp[0];
		} else {
			return "-";
		}
	}

	getBulbarScore() {
		let latest = [];
		for (let i = 0; i < this.state.clinic_data.length; i++) {
			let tmp = [];
			if (this.state.clinic_data[i]["Total"] === undefined) {
			} else {
				if (this.state.clinic_data[i]["ALSFRS 1 Speech"] !== undefined) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 1 Speech"]);
				}
				if (this.state.clinic_data[i]["ALSFRS 2 Salivation"] !== undefined) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 2 Salivation"]);
				}
				if (this.state.clinic_data[i]["ALSFRS 3 Swallowing"] !== undefined) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 3 Swallowing"]);
				}

				let total = 0;
				for (let i = 0; i < tmp.length; i++) {
					total = total + parseInt(tmp[i]);
				}

				latest.push(total);
			}
		}

		if (latest.length > 0) {
			if (latest[0] < latest[1]) {
				return (
					<div>
						{latest[0]}
						<Icon size="tiny" name="arrow down" color="red" />
					</div>
				);
			} else if (latest[0] > latest[1]) {
				return (
					<div>
						{latest[0]}
						<Icon size="tiny" name="arrow up" color="green" />
					</div>
				);
			} else if (latest[0] === latest[1]) {
				return <div>{latest[0]}-</div>;
			} else return latest[0];
		} else {
			return "-";
		}
	}

	getMotorScore() {
		let latest = [];
		for (let i = 0; i < this.state.clinic_data.length; i++) {
			let tmp = [];
			if (this.state.clinic_data[i]["Total"] === undefined) {
			} else {
				if (this.state.clinic_data[i]["ALSFRS 4 Handwriting"] !== undefined) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 4 Handwriting"]);
				}
				if (
					this.state.clinic_data[i][
						"ALSFRS 5a Utensils Handling No Gastrostomy"
					] !== undefined
				) {
					tmp.push(
						this.state.clinic_data[i][
							"ALSFRS 5a Utensils Handling No Gastrostomy"
						]
					);
				}
				if (
					this.state.clinic_data[i][
						"ALSFRS 5b Utensils Handling Gastrostomy"
					] !== undefined
				) {
					tmp.push(
						this.state.clinic_data[i]["ALSFRS 5b Utensils Handling Gastrostomy"]
					);
				}
				if (
					this.state.clinic_data[i]["ALSFRS 6 Dressing and hygiene"] !==
					undefined
				) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 6 Dressing and hygiene"]);
				}
				if (
					this.state.clinic_data[i][
						"ALSFRS 7 Turning in bed and adjusting bed clothes"
					] !== undefined
				) {
					tmp.push(
						this.state.clinic_data[i][
							"ALSFRS 7 Turning in bed and adjusting bed clothes"
						]
					);
				}
				if (this.state.clinic_data[i]["ALSFRS 8 Walking"] !== undefined) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 8 Walking"]);
				}
				if (
					this.state.clinic_data[i]["ALSFRS 9 Climbing stairs"] !== undefined
				) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 9 Climbing stairs"]);
				}

				let total = 0;
				for (let i = 0; i < tmp.length; i++) {
					total = total + parseInt(tmp[i]);
				}

				latest.push(total);
			}
		}

		if (latest.length > 0) {
			if (latest[0] < latest[1]) {
				return (
					<div>
						{latest[0]}
						<Icon size="tiny" name="arrow down" color="red" />
					</div>
				);
			} else if (latest[0] > latest[1]) {
				return (
					<div>
						{latest[0]}
						<Icon size="tiny" name="arrow up" color="green" />
					</div>
				);
			} else if (latest[0] === latest[1]) {
				return <div>{latest[0]}-</div>;
			} else return latest[0];
		} else {
			return "-";
		}
	}

	getRespiratoryScore() {
		let latest = [];
		for (let i = 0; i < this.state.clinic_data.length; i++) {
			let tmp = [];
			if (this.state.clinic_data[i]["Total"] === undefined) {
			} else {
				if (this.state.clinic_data[i]["ALSFRS 10 Dyspnea"] !== undefined) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 10 Dyspnea"]);
				}
				if (this.state.clinic_data[i]["ALSFRS 11 Orthopnea"] !== undefined) {
					tmp.push(this.state.clinic_data[i]["ALSFRS 11 Orthopnea"]);
				}
				if (
					this.state.clinic_data[i]["ALSFRS 12 Respiratory insufficiency"] !==
					undefined
				) {
					tmp.push(
						this.state.clinic_data[i]["ALSFRS 12 Respiratory insufficiency"]
					);
				}

				let total = 0;
				for (let i = 0; i < tmp.length; i++) {
					total = total + parseInt(tmp[i]);
				}

				latest.push(total);
			}
		}

		if (latest.length > 0) {
			if (latest[0] < latest[1]) {
				return (
					<div>
						{latest[0]}
						<Icon size="tiny" name="arrow down" color="red" />
					</div>
				);
			} else if (latest[0] > latest[1]) {
				return (
					<div>
						{latest[0]}
						<Icon size="tiny" name="arrow up" color="green" />
					</div>
				);
			} else if (latest[0] === latest[1]) {
				return <div>{latest[0]}-</div>;
			} else return latest[0];
		} else {
			return "-";
		}
	}

	render() {
		return (
			<Container className="alsfrsr_scores">
				<Header size="huge">Latest ALSFRS-R score and Subscores</Header>
				<Segment>
					<Grid columns={4}>
						<Grid.Column>
							<Statistic>
								<Statistic.Label>Total</Statistic.Label>
								<Statistic.Value>{this.getTotalScore()}</Statistic.Value>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic>
								<Statistic.Label>Bulbar</Statistic.Label>
								<Statistic.Value>{this.getBulbarScore()}</Statistic.Value>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic>
								<Statistic.Label>Motor</Statistic.Label>
								<Statistic.Value>{this.getMotorScore()}</Statistic.Value>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic>
								<Statistic.Label>Respiratory</Statistic.Label>
								<Statistic.Value>{this.getRespiratoryScore()}</Statistic.Value>
							</Statistic>
						</Grid.Column>
					</Grid>
				</Segment>
			</Container>
		);
	}
}

export default ALSFRSRscores;
