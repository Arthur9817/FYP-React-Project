import React, { Component } from "react";
import firebase from "../Firebase";
import {
	List,
	Icon,
	Segment,
	Header,
	Input,
	Container,
	Grid,
	Loader,
	Popup,
} from "semantic-ui-react";

class Medication extends Component {
	constructor(props) {
		super(props);

		this.toggleMedicineInput = this.toggleMedicineInput.bind(this);
		this.toggleTrialInput = this.toggleTrialInput.bind(this);
		this.addItem = this.addItem.bind(this);
		this.handleMedicineInput = this.handleMedicineInput.bind(this);
		this.handleTrialInput = this.handleTrialInput.bind(this);

		this.state = {
			patient_data: this.props.data,
			missing_info: [],
			medicine_list: [],
			trial_list: [],
			medicine_input: "",
			trial_input: "",
			isLoading: true,
		};
	}

	componentDidMount() {
		this.getItems("medicine");
		this.getItems("trial");
	}

	getItems(type) {
		let tmp = [];

		if (type === "medicine") {
			firebase
				.firestore()
				.collection("medication")
				.doc(this.state.patient_data["Sample ID"])
				.get()
				.then((doc) => {
					if (doc.exists) {
						if (
							doc.data().medicine !== null ||
							doc.data().medicine !== undefined
						) {
							tmp.push(doc.data().medicine);

							this.setState({ medicine_list: tmp });
						} else {
							tmp.push([]);
							this.setState({ medicine_list: tmp });
						}
					} else {
						tmp.push([]);
						this.setState({ medicine_list: tmp });
					}
				});
		} else if (type === "trial") {
			firebase
				.firestore()
				.collection("medication")
				.doc(this.state.patient_data["Sample ID"])
				.get()
				.then((doc) => {
					if (doc.exists) {
						if (doc.data().trial !== null || doc.data().trial !== undefined) {
							tmp.push(doc.data().trial);
							this.setState({ trial_list: tmp, isLoading: false });
						} else {
							tmp.push([]);
							this.setState({ trial_list: tmp, isLoading: false });
						}
					} else {
						tmp.push([]);
						this.setState({ trial_list: tmp, isLoading: false });
					}
				});
		}
	}

	displayItems(type) {
		var list = [];
		var itemType = "";

		if (type === "medicine") {
			list = this.state.medicine_list[0];
			itemType = "medicine";
		} else if (type === "trial") {
			list = this.state.trial_list[0];
			itemType = "trial";
		}

		if (list === undefined) {
			return;
		} else {
			return list.map((item, index) => (
				<Container style={{ textAlign: "left" }} key={index}>
					<List divided>
						<List.Item>
							<List.Content>
								<b style={{ fontSize: 15 }}>{item}</b>

								<Popup
									inverted
									trigger={
										<Icon
											style={{ float: "right" }}
											link
											name="x"
											onClick={() => {
												this.deleteItem(item, itemType);
											}}
										/>
									}
									position="bottom right"
								>
									Are you sure you want to delete the {itemType}: '{item}'?
								</Popup>
							</List.Content>
						</List.Item>
						<List.Item />
					</List>
				</Container>
			));
		}
	}

	addItem(e, inputType) {
		e.preventDefault();

		if (inputType === "medicine") {
			const newItem = this.state.medicine_input;
			this.state.medicine_list[0].push(newItem);

			var tmp = [];
			this.state.medicine_list[0].forEach((medicine) => {
				tmp.push(medicine);
			});

			if (newItem !== "") {
				firebase
					.firestore()
					.collection("medication")
					.doc(this.state.patient_data["Sample ID"])
					.set(
						{
							medicine: tmp,
						},
						{ merge: true }
					);
			}
		} else if (inputType === "trial") {
			const newItem = this.state.trial_input;
			this.state.trial_list[0].push(newItem);

			var tmp2 = [];
			this.state.trial_list[0].forEach((trial) => {
				tmp2.push(trial);
			});

			if (newItem !== "") {
				firebase
					.firestore()
					.collection("medication")
					.doc(this.state.patient_data["Sample ID"])
					.set(
						{
							trial: tmp2,
						},
						{ merge: true }
					);
			}
		}

		this.setState({
			toggleMedicineInput: false,
			toggleTrialInput: false,
			trial_input: "",
			medicine_input: "",
		});
	}

	async deleteItem(item, inputType) {
		let tmp = [];
		if (inputType === "medicine") {
			this.state.medicine_list[0].forEach((medicine) => {
				if (medicine !== item) {
					tmp.push(medicine);
				}
			});
			await firebase
				.firestore()
				.collection("medication")
				.doc(this.state.patient_data["Sample ID"])
				.set(
					{
						medicine: tmp,
					},
					{ merge: true }
				);
			this.getItems("medicine");
		} else if (inputType === "trial") {
			this.state.trial_list[0].forEach((trial) => {
				if (trial !== item) {
					tmp.push(trial);
				}
			});
			firebase
				.firestore()
				.collection("medication")
				.doc(this.state.patient_data["Sample ID"])
				.set(
					{
						trial: tmp,
					},
					{ merge: true }
				);
			this.getItems("trial");
		}
		this.setState({ openConfirm: false });
	}

	handleKeyDown = (e) => {
		if (e.key === "Enter") {
		}
	};

	handleMedicineInput(e) {
		this.setState({ medicine_input: e.target.value });
	}

	handleTrialInput(e) {
		this.setState({ trial_input: e.target.value });
	}

	toggleMedicineInput(button) {
		if (button === "show") {
			this.setState({ toggleMedicineInput: true });
		} else if (button === "close") {
			this.setState({ toggleMedicineInput: false, medicine_input: "" });
		}
	}

	toggleTrialInput(button) {
		if (button === "show") {
			this.setState({ toggleTrialInput: true });
		} else if (button === "close") {
			this.setState({ toggleTrialInput: false, trial_input: "" });
		}
	}

	render() {
		return (
			<Container className="input-box">
				<h1 className="patientHeader">Medication details</h1>

				<Grid columns={2}>
					<Grid.Column>
						<Segment>
							<Header dividing>
								<Header.Content>Medicine</Header.Content>
							</Header>

							<Container className="row selection-area">
								{this.state.isLoading ? (
									<Container fluid>
										<Loader active size="large"></Loader>
									</Container>
								) : (
									this.displayItems("medicine")
								)}
								{this.state.toggleMedicineInput ? (
									<Input
										icon={
											<Icon
												name="x"
												link
												onClick={() => this.toggleMedicineInput("close")}
											/>
										}
										fluid
										placeholder="Add..."
										onKeyPress={(event) => {
											if (event.key === "Enter") {
												this.addItem(event, "medicine");
											}
										}}
										value={this.state.medicine_input}
										onChange={this.handleMedicineInput}
										type="text"
									/>
								) : null}
								<Icon
									style={{ marginTop: 10 }}
									link
									circular
									name="plus"
									onClick={() => this.toggleMedicineInput("show")}
								/>
							</Container>
						</Segment>
					</Grid.Column>

					<Grid.Column>
						<Segment>
							<Header dividing>Trials</Header>
							<Container className="row selection-area">
								{this.state.isLoading ? (
									<Container fluid>
										<Loader active size="large"></Loader>
									</Container>
								) : (
									this.displayItems("trial")
								)}

								{this.state.toggleTrialInput ? (
									<Input
										icon={
											<Icon
												name="x"
												link
												onClick={() => this.toggleTrialInput("close")}
											/>
										}
										fluid
										placeholder="Add..."
										onKeyPress={(event) => {
											if (event.key === "Enter") {
												this.addItem(event, "trial");
											}
										}}
										value={this.state.trial_input}
										onChange={this.handleTrialInput}
									/>
								) : null}
								<Icon
									style={{ marginTop: 10 }}
									link
									circular
									name="plus"
									onClick={() => this.toggleTrialInput("show")}
								/>
							</Container>
						</Segment>
					</Grid.Column>
				</Grid>
			</Container>
		);
	}
}

export default Medication;
