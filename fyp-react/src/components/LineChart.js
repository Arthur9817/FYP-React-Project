import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visit_data: this.props.data,
			scores: [],
			visitDate: [],
			totalMax: null,
			totalStepSize: null,
		};

		if (this.props.type === "total") {
			this.state.totalMax = 48;
			this.state.totalStepSize = 12;
			this.getTotalScores();
		} else if (this.props.type === "motor") {
			this.state.totalMax = 24;
			this.state.totalStepSize = 6;
			this.getMotorScores();
		} else if (this.props.type === "bulbar") {
			this.state.totalMax = 12;
			this.state.totalStepSize = 3;
			this.getBulbarScores();
		} else if (this.props.type === "respiratory") {
			this.state.totalMax = 12;
			this.state.totalStepSize = 3;
			this.getRespiratoryScores();
		}
	}

	getTotalScores() {
		for (let i = 0; i < this.state.visit_data.length; i++) {
			if (this.state.visit_data[i].Total !== undefined) {
				this.state.scores.push(this.state.visit_data[i].Total);
				this.state.visitDate.push(
					this.state.visit_data[i]["Clinical visit date"]
				);
			}
		}
	}

	getBulbarScores() {
		for (let i = 0; i < this.state.visit_data.length; i++) {
			let tmp = [];
			if (this.state.visit_data[i]["Total"] === undefined) {
			} else {
				if (this.state.visit_data[i]["ALSFRS 1 Speech"] !== undefined) {
					tmp.push(this.state.visit_data[i]["ALSFRS 1 Speech"]);
				}
				if (this.state.visit_data[i]["ALSFRS 2 Salivation"] !== undefined) {
					tmp.push(this.state.visit_data[i]["ALSFRS 2 Salivation"]);
				}
				if (this.state.visit_data[i]["ALSFRS 3 Swallowing"] !== undefined) {
					tmp.push(this.state.visit_data[i]["ALSFRS 3 Swallowing"]);
				}

				let total = 0;
				for (let i = 0; i < tmp.length; i++) {
					total = total + parseInt(tmp[i]);
				}

				this.state.scores.push(total);

				this.state.visitDate.push(
					this.state.visit_data[i]["Clinical visit date"]
				);
			}
		}
	}

	getMotorScores() {
		for (let i = 0; i < this.state.visit_data.length; i++) {
			let tmp = [];
			if (this.state.visit_data[i]["Total"] === undefined) {
			} else {
				if (this.state.visit_data[i]["ALSFRS 4 Handwriting"] !== undefined) {
					tmp.push(this.state.visit_data[i]["ALSFRS 4 Handwriting"]);
				}
				if (
					this.state.visit_data[i][
						"ALSFRS 5a Utensils Handling No Gastrostomy"
					] !== undefined
				) {
					tmp.push(
						this.state.visit_data[i][
							"ALSFRS 5a Utensils Handling No Gastrostomy"
						]
					);
				}
				if (
					this.state.visit_data[i][
						"ALSFRS 5b Utensils Handling Gastrostomy"
					] !== undefined
				) {
					tmp.push(
						this.state.visit_data[i]["ALSFRS 5b Utensils Handling Gastrostomy"]
					);
				}
				if (
					this.state.visit_data[i]["ALSFRS 6 Dressing and hygiene"] !==
					undefined
				) {
					tmp.push(this.state.visit_data[i]["ALSFRS 6 Dressing and hygiene"]);
				}
				if (
					this.state.visit_data[i][
						"ALSFRS 7 Turning in bed and adjusting bed clothes"
					] !== undefined
				) {
					tmp.push(
						this.state.visit_data[i][
							"ALSFRS 7 Turning in bed and adjusting bed clothes"
						]
					);
				}
				if (this.state.visit_data[i]["ALSFRS 8 Walking"] !== undefined) {
					tmp.push(this.state.visit_data[i]["ALSFRS 8 Walking"]);
				}
				if (
					this.state.visit_data[i]["ALSFRS 9 Climbing stairs"] !== undefined
				) {
					tmp.push(this.state.visit_data[i]["ALSFRS 9 Climbing stairs"]);
				}

				let total = 0;
				for (let i = 0; i < tmp.length; i++) {
					total = total + parseInt(tmp[i]);
				}

				this.state.scores.push(total);

				this.state.visitDate.push(
					this.state.visit_data[i]["Clinical visit date"]
				);
			}
		}
	}

	getRespiratoryScores() {
		for (let i = 0; i < this.state.visit_data.length; i++) {
			let tmp = [];
			if (this.state.visit_data[i]["Total"] === undefined) {
			} else {
				if (this.state.visit_data[i]["ALSFRS 10 Dyspnea"] !== undefined) {
					tmp.push(this.state.visit_data[i]["ALSFRS 10 Dyspnea"]);
				}
				if (this.state.visit_data[i]["ALSFRS 11 Orthopnea"] !== undefined) {
					tmp.push(this.state.visit_data[i]["ALSFRS 11 Orthopnea"]);
				}
				if (
					this.state.visit_data[i]["ALSFRS 12 Respiratory insufficiency"] !==
					undefined
				) {
					tmp.push(
						this.state.visit_data[i]["ALSFRS 12 Respiratory insufficiency"]
					);
				}

				let total = 0;
				for (let i = 0; i < tmp.length; i++) {
					total = total + parseInt(tmp[i]);
				}

				this.state.scores.push(total);

				this.state.visitDate.push(
					this.state.visit_data[i]["Clinical visit date"]
				);
			}
		}
	}

	render() {
		return (
			<div className="LineChart">
				<Line
					data={{
						labels: this.state.visitDate.reverse(),
						datasets: [
							{
								fill: false,
								lineTension: 0.5,
								backgroundColor: "white",
								borderColor: "rgba(54, 162, 235, 0.7)",
								borderWidth: 3,
								data: this.state.scores.reverse(),
							},
						],
					}}
					height={375}
					options={{
						scales: {
							yAxes: [
								{
									scaleLabel: {
										display: true,
										labelString: "ALSFRS-R",
										fontSize: 18,
									},
									ticks: {
										max: this.state.totalMax,
										stepSize: this.state.totalStepSize,
										beginAtZero: true,
									},
								},
							],
							xAxes: [
								{
									scaleLabel: {
										display: true,
										labelString: "Clinic visit date",
										fontSize: 18,
									},
									ticks: {
										scaleStepWidth: 20,
										scaleStartValue: 0,
										autoSkip: false,
										maxRotation: 40,
										minRotation: 40,
									},
								},
							],
						},
						legend: {
							display: false,
						},

						maintainAspectRatio: false,
					}}
				/>
			</div>
		);
	}
}

export default LineChart;
