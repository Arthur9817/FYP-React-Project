import React, { Component } from "react";
import { Button, Icon, Modal, Container, Divider } from "semantic-ui-react";

class MissingInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userID: this.props.id,
			missing_data: this.props.data,
			isMissing: this.props.state,
		};
	}

	static getDerivedStateFromProps(props, state) {
		return {
			isMissing: props.state,
		};
	}

	state = { openModal: false };

	openModal = () => this.setState({ openModal: true });
	closeModal = () => this.setState({ openModal: false });

	render() {
		const { openModal } = this.state;
		return (
			<Modal
				centered={false}
				open={openModal}
				trigger={
					<Button color="red" fluid onClick={this.openModal}>
						Missing information
					</Button>
				}
			>
				<Modal.Header style={{ fontSize: 25 }}>
					<Modal.Actions>
						<Button icon color="red" floated="right" onClick={this.closeModal}>
							<Icon name="close" />
						</Button>
					</Modal.Actions>
					Missing information: {this.state.userID}
				</Modal.Header>

				<Modal.Content scrolling>
					<Modal.Description>
						{this.state.isMissing ? (
							<Container>
								{this.state.missing_data.map((data, index) => (
									<h2 style={{ color: "red" }} key={index}>
										{data}{" "}
									</h2>
								))}
								<Divider />
								<h5>
									*If missing information is related to death (e.g. 'Date of
									Death'), the patient may still be alive.
								</h5>
							</Container>
						) : (
							<h3>All information has been recorded.</h3>
						)}
					</Modal.Description>
				</Modal.Content>
			</Modal>
		);
	}
}

export default MissingInfo;
