import React, { Component } from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";
import {
	Input,
	Container,
	Grid,
	Loader,
	Divider,
	Icon,
} from "semantic-ui-react";
import "../App.css";

class MNDregister extends Component {
	constructor() {
		super();

		this.sortBy = this.sortBy.bind(this);

		this.state = {
			patients: [],
			clinic_visit: [],
			isLoading: true,
			isLowest: true,
			alphabetStart: true,
			lastVisit: true,
			sortBy: "",
			search: "",
		};
	}

	componentDidMount() {
		firebase
			.database()
			.ref("clinical_data")
			.on("value", (snapshot) => {
				let tmp = [];
				snapshot.forEach((snap) => {
					tmp.push(snap.val());
				});
				this.setState({ patients: tmp });
			});

		firebase
			.database()
			.ref("Clinical Visit Data")
			.on("value", (snapshot) => {
				let clinic_data = [];
				snapshot.forEach((snap) => {
					clinic_data.push(snap.val());
				});
				this.setState({ clinic_visit: clinic_data, isLoading: false });
			});
	}

	getClinicalInfo(patient, type) {
		let ALSFRSR = [];
		let date = [];
		for (let i = 0; i < this.state.clinic_visit.length; i++) {
			if (this.state.clinic_visit[i].undefined === patient["Sample ID"]) {
				date.push(this.state.clinic_visit[i]["Clinical visit date"]);
				if (this.state.clinic_visit[i]["Total"] !== undefined) {
					ALSFRSR.push(this.state.clinic_visit[i]["Total"]);
				}
			}
		}

		if (type === "date") {
			date.sort(function (a, b) {
				var aa = a.split("/").reverse().join(),
					bb = b.split("/").reverse().join();
				return aa > bb ? -1 : aa < bb ? 1 : 0;
			});
			return date[0];
		} else {
			if (ALSFRSR.length > 0) {
				return Math.min.apply(Math, ALSFRSR);
			} else {
				return "No record";
			}
		}
	}

	sortBy(type, sortFrom) {
		if (type === "alphabetical") {
			if (sortFrom === "start") {
				this.setState({ alphabetStart: false });
				this.state.patients.sort(function (a, b) {
					var splitA = a["Sample ID"].split(" ");
					var splitB = b["Sample ID"].split(" ");
					var lastA = splitA[splitA.length - 1];
					var lastB = splitB[splitB.length - 1];

					if (lastA < lastB) return -1;
					if (lastA > lastB) return 1;
					return 0;
				});
			} else {
				this.setState({ alphabetStart: true });
				this.state.patients.sort(function (a, b) {
					var splitA = a["Sample ID"].split(" ");
					var splitB = b["Sample ID"].split(" ");
					var lastA = splitA[splitA.length - 1];
					var lastB = splitB[splitB.length - 1];

					if (lastA > lastB) return -1;
					if (lastA < lastB) return 1;
					return 0;
				});
			}
		} else {
			for (let j = 0; j < this.state.patients.length; j++) {
				for (let i = 0; i < this.state.clinic_visit.length; i++) {
					if (
						this.state.clinic_visit[i].undefined ===
						this.state.patients[j]["Sample ID"]
					) {
						if (this.state.clinic_visit[i]["Total"] !== undefined) {
							this.state.patients[j]["Total"] = parseInt(
								this.state.clinic_visit[i]["Total"]
							);
						}
						this.state.patients[j]["Visit"] = this.state.clinic_visit[i][
							"Clinical visit date"
						];
					}
				}
			}

			if (type === "visit") {
				if (sortFrom === "oldest") {
					this.setState({ lastVisit: false });
					this.state.patients.sort(function (a, b) {
						var aa = a["Visit"].split("/").reverse().join(),
							bb = b["Visit"].split("/").reverse().join();
						return aa < bb ? -1 : aa > bb ? 1 : 0;
					});
				} else {
					this.setState({ lastVisit: true });

					this.state.patients.sort(function (a, b) {
						var aa = a["Visit"].split("/").reverse().join(),
							bb = b["Visit"].split("/").reverse().join();
						return aa > bb ? -1 : aa < bb ? 1 : 0;
					});
				}
			} else if (type === "ALSFRS-R") {
				let tmp1 = [];
				let tmp2 = [];

				for (var i = 0; i < this.state.patients.length; i++) {
					if (this.state.patients[i]["Total"] === undefined) {
						tmp1.push(this.state.patients[i]);
					} else {
						tmp2.push(this.state.patients[i]);
					}
				}

				if (sortFrom === "lowest") {
					this.setState({ isLowest: false });
					tmp2.sort((a, b) => a.Total - b.Total);
				} else {
					this.setState({ isLowest: true });
					tmp2.sort((a, b) => b.Total - a.Total);
				}

				tmp2 = tmp2.concat(tmp1);

				this.setState({ patients: tmp2 });
			}
			this.state.patients.forEach(function (v) {
				delete v.Visit;
				delete v.Total;
			});
		}
	}

	updateSearch(e) {
		this.setState({ search: e.target.value.substr(0, 20) });
	}

	onchange = (e) => this.setState({ search: e.target.value });

	render() {
		let filteredPatients = this.state.patients.filter((patient) => {
			return (
				patient["Sample ID"]
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1
			);
		});

		return (
			<Container>
				<Grid style={{ marginTop: 10 }}>
					<Grid.Column width={3} />
					<Grid.Column width={10}>
						<Input
							type="text"
							fluid
							size="big"
							icon="search"
							placeholder="Search patient..."
							value={this.state.search}
							onChange={this.updateSearch.bind(this)}
						/>
					</Grid.Column>
				</Grid>
				<Grid style={{ marginTop: 5 }}>
					<Grid.Column width={3} />
					<Grid.Column width={4}>
						{this.state.isLowest ? (
							<h4>
								<a
									href="#ALSFRS-R"
									onClick={() => this.sortBy("ALSFRS-R", "lowest")}
								>
									<u>Order by lowest ALSFRS-R Total</u>{" "}
									<Icon name="arrow down" />
								</a>
							</h4>
						) : (
							<h4>
								<a
									href="#ALSFRS-R"
									onClick={() => this.sortBy("ALSFRS-R", "highest")}
								>
									<u>Order by highest ALSFRS-R Total</u>
									<Icon name="arrow up" />
								</a>
							</h4>
						)}
					</Grid.Column>
					<Grid.Column width={2} style={{ marginLeft: 18, marginRight: 47 }}>
						{this.state.alphabetStart ? (
							<h4>
								<a
									href="#alphabetical"
									onClick={() => this.sortBy("alphabetical", "start")}
								>
									<Icon name="sort alphabet down" />
									<u>Order A-Z</u>
								</a>
							</h4>
						) : (
							<h4>
								<a
									href="#alphabetical"
									onClick={() => this.sortBy("alphabetical", "end")}
								>
									<Icon name="sort alphabet up" />
									<u>Order Z-A</u>
								</a>
							</h4>
						)}
					</Grid.Column>

					<Grid.Column width={4}>
						{this.state.lastVisit ? (
							<h4>
								<a
									href="#clinic_visit"
									onClick={() => this.sortBy("visit", "oldest")}
								>
									<u>Order by oldest clinic visit</u>
									<Icon name="sort numeric down" />
								</a>
							</h4>
						) : (
							<h4>
								<a
									href="#clinic_visit"
									onClick={() => this.sortBy("visit", "latest")}
								>
									<u>Order by lastest clinic visit</u>{" "}
									<Icon name="sort numeric up" />
								</a>
							</h4>
						)}
					</Grid.Column>
				</Grid>

				<p style={{ marginBottom: 0, marginTop: 20, fontSize: 18 }}>
					No. of patients: {this.state.patients.length}
				</p>

				<Divider style={{ marginTop: 0 }} />
				{this.state.isLoading ? (
					<Container fluid>
						<Loader active size="massive">
							Loading...
						</Loader>
					</Container>
				) : (
					<Container fluid>
						<Grid centered>
							{filteredPatients.map((patient, index) => (
								<ul key={index}>
									<Link
										to={{
											pathname: "/patient/" + patient["Sample ID"],
											data: {
												user: patient,
												clinic: this.state.clinic_visit,
											},
										}}
									>
										<div className="ui centered cards">
											<div className="ui card">
												<div className="content">
													<div className="header">
														<i aria-hidden="true" className="user icon"></i>
														{patient["Sample ID"]}
													</div>
													<br />
													<div style={{ color: "black" }}>
														Last clinic visit:{" "}
														{this.getClinicalInfo(patient, "date")}
													</div>
												</div>
												<div className="extra content">
													<p style={{ color: "#4283ca" }}>
														<i className="clipboard list icon" />
														ALSFRS-R Total:{" "}
														{this.getClinicalInfo(patient, "alsfrsr")}
													</p>
												</div>
											</div>
										</div>
									</Link>
								</ul>
							))}
						</Grid>
					</Container>
				)}
			</Container>
		);
	}
}

export default MNDregister;
