import React, { Component } from "react";
import { Table, Icon, Popup } from "semantic-ui-react";

class ClinicTable extends Component {
	constructor(props) {
		super(props);

		this.state = { prev: "", index: 1, undef: [], data: [] };
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	getUndefined() {
		if (this.props.data[0].Total === undefined) {
			for (let i = 0; i < this.props.data.length; i++) {
				if (this.props.data[i].Total === undefined) {
					this.state.undef.push(this.props.data[i]);
				} else {
					break;
				}
			}
		}
	}

	getData() {
		this.state.data = [];

		let count = 0;
		if (this.props.data[0].Total === undefined) {
			for (let i = 0; i < this.props.data.length; i++) {
				if (this.props.data[i].Total === undefined) {
					count++;
				} else {
					for (let i = 0; i < this.props.data.length - count; i++) {
						this.state.data.push(this.props.data[i + count]);
					}
					break;
				}
			}
		} else {
			for (let i = 0; i < this.props.data.length; i++) {
				this.state.data.push(this.props.data[i]);
			}
		}
	}

	checkIfPrevUndefined() {
		if (this.state.prev === undefined) {
			if (this.state.index === this.state.data.length - 1) {
				return;
			}
			this.state.index = this.state.index + 1;
			this.state.prev = this.state.data[this.state.index].Total;
			this.checkIfPrevUndefined();
		} else {
			return;
		}
	}

	check_total(total) {
		if (total === undefined) {
			return;
		}
		if (this.state.index === this.state.data.length) {
			return total;
		}

		if (this.state.index < this.state.data.length) {
			this.state.prev = this.state.data[this.state.index].Total;
		}

		if (this.state.prev === undefined) {
			this.checkIfPrevUndefined();
		}

		if (total === this.state.prev) {
			this.state.index = this.state.index + 1;
			return (
				<div>
					{total} <Icon name="minus" />
				</div>
			);
		} else if (total < this.state.prev) {
			this.state.index = this.state.index + 1;

			return (
				<div>
					{total}
					<Icon name="arrow down" color="red" />
				</div>
			);
		} else if (total > this.state.prev) {
			this.state.index = this.state.index + 1;

			return (
				<div>
					{total}
					<Icon name="arrow up" color="green" />
				</div>
			);
		} else {
			return total;
		}
	}

	check_beumont_visit(data) {
		if (data === "TRUE") {
			return <Icon name="checkmark" color="green" />;
		} else {
			return <Icon name="x" color="red" />;
		}
	}

	printUndefined() {
		this.getUndefined();
		return this.state.undef.map((visit, index) => (
			<Table.Row
				style={{
					fontSize: 16,
					backgroundColor: "#f2f2f2",
					fontWeight: "bold",
				}}
				key={index}
			>
				<Table.Cell>
					{this.check_beumont_visit(visit["Beaumont Hospital visit"])}
				</Table.Cell>
				<Table.Cell>{visit["Clinical visit date"]}</Table.Cell>
				<Table.Cell>{visit["SNIP(cm H2O)_Occluded Method"]}</Table.Cell>
				<Table.Cell>{visit["Total"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 1 Speech"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 2 Salivation"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 3 Swallowing"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 4 Handwriting"]}</Table.Cell>
				<Table.Cell>
					{visit["ALSFRS 5a Utensils Handling No Gastrostomy"]}
				</Table.Cell>
				<Table.Cell>
					{visit["ALSFRS 5b Utensils Handling Gastrostomy"]}
				</Table.Cell>
				<Table.Cell>{visit["ALSFRS 6 Dressing and hygiene"]}</Table.Cell>
				<Table.Cell>
					{visit["ALSFRS 7 Turning in bed and adjusting bed clothes"]}
				</Table.Cell>
				<Table.Cell>{visit["ALSFRS 8 Walking"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 9 Climbing stairs"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 10 Dyspnea"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 11 Orthopnea"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 12 Respiratory insufficiency"]}</Table.Cell>
			</Table.Row>
		));
	}

	printData() {
		this.getData();
		return this.state.data.map((visit, index) => (
			<Table.Row
				style={{
					fontSize: 16,
					backgroundColor: "#f2f2f2",
					fontWeight: "bold",
					borderTopColor: "red !important",
				}}
				key={index}
			>
				<Table.Cell style={{ borderTop: "1 !important" }}>
					{this.check_beumont_visit(visit["Beaumont Hospital visit"])}
				</Table.Cell>
				<Table.Cell>{visit["Clinical visit date"]}</Table.Cell>
				<Table.Cell>{visit["SNIP(cm H2O)_Occluded Method"]}</Table.Cell>
				<Table.Cell>{this.check_total(visit["Total"])}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 1 Speech"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 2 Salivation"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 3 Swallowing"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 4 Handwriting"]}</Table.Cell>
				<Table.Cell>
					{visit["ALSFRS 5a Utensils Handling No Gastrostomy"]}
				</Table.Cell>
				<Table.Cell>
					{visit["ALSFRS 5b Utensils Handling Gastrostomy"]}
				</Table.Cell>
				<Table.Cell>{visit["ALSFRS 6 Dressing and hygiene"]}</Table.Cell>
				<Table.Cell>
					{visit["ALSFRS 7 Turning in bed and adjusting bed clothes"]}
				</Table.Cell>
				<Table.Cell>{visit["ALSFRS 8 Walking"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 9 Climbing stairs"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 10 Dyspnea"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 11 Orthopnea"]}</Table.Cell>
				<Table.Cell>{visit["ALSFRS 12 Respiratory insufficiency"]}</Table.Cell>
			</Table.Row>
		));
	}

	render() {
		return (
			<Table celled selectable textAlign="center" size="small">
				<Table.Header>
					<Table.Row style={{ fontSize: 14 }}>
						<Table.HeaderCell
							style={{
								backgroundColor: "rgb(29,110,197)",
								fontWeight: "bold",
								color: "white",
								width: 110,
							}}
							rowSpan="2"
						>
							Beaumont Hospital visit
						</Table.HeaderCell>
						<Table.HeaderCell
							style={{
								backgroundColor: "rgb(29,110,197)",
								fontWeight: "bold",
								color: "white",
								width: 110,
							}}
							rowSpan="2"
						>
							Clinical visit date
						</Table.HeaderCell>
						<Table.HeaderCell
							style={{
								backgroundColor: "rgb(29,110,197)",
								fontWeight: "bold",
								color: "white",
								width: 150,
							}}
							rowSpan="2"
						>
							SNIP(cm H2O) Occluded Method
						</Table.HeaderCell>
						<Table.HeaderCell
							style={{
								backgroundColor: "rgb(29,110,197)",
								fontWeight: "bold",
								color: "white",
								borderBottomColor: "white",
							}}
							colSpan="14"
						>
							ALSFRS-R
						</Table.HeaderCell>
					</Table.Row>
					<Table.Row>
						<Popup
							position="top center"
							content="48 = Maximum score"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									Total/48
								</Table.HeaderCell>
							}
						/>

						<Popup
							position="top center"
							content="Speech"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									1
								</Table.HeaderCell>
							}
						/>

						<Popup
							position="top center"
							content="Salivation"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									2
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Swallowing"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									3
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Handwriting"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									4
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Utensils Handling No Gastrostomy"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									5a
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Utensils Handling Gastrostomy"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									5b
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Dressing and hygiene"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									6
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Turning in bed and adjusting bed clothes"
							inverted
							wide
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									7
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Walking"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									8
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Climbing stairs"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									9
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Dyspnea"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									10
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Orthopnea"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									11
								</Table.HeaderCell>
							}
						/>
						<Popup
							position="top center"
							content="Respiratory insufficiency"
							inverted
							trigger={
								<Table.HeaderCell
									style={{
										backgroundColor: "rgb(29,110,197)",
										fontWeight: "bold",
										color: "white",
									}}
								>
									12
								</Table.HeaderCell>
							}
						/>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{this.printUndefined()}
					{this.printData()}
				</Table.Body>
			</Table>
		);
	}
}

export default ClinicTable;
