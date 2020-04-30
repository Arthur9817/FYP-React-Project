import React, { Component } from "react";
import firebase from "../Firebase";
import {
	Button,
	Form,
	Container,
	Segment,
	Header,
	Message,
	Image,
	Modal,
	Input,
	Icon,
} from "semantic-ui-react";
import "../App.css";

class LoginPage extends Component {
	constructor(props) {
		super(props);

		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.sendResetEmail = this.sendResetEmail.bind(this);

		this.state = {
			email: "",
			password: "",
			message: "",
			message2: "",
			messageColor: "red",
			passwordReset: "",
			hideMessage: true,
			hideResetMessage: true,
		};
	}

	async sendResetEmail(email) {
		try {
			await firebase.auth().sendPasswordResetEmail(email);
			this.setState({
				message:
					"Password reset email sent. Please follow the instruction in the email to proceed.",
				messageColor: "green",
				hideMessage: false,
				openModal: false,
				hideResetMessage: true,
				passwordReset: "",
			});
			this.timeout = setTimeout(() => {
				this.setState({ hideMessage: true });
			}, 5000);
		} catch (error) {
			this.setState({
				message2: error.message,
				messageColor: "red",
				hideResetMessage: false,
			});
		}
	}

	async login(e) {
		e.preventDefault();

		try {
			await firebase
				.auth()
				.signInWithEmailAndPassword(this.state.email, this.state.password);
		} catch (error) {
			this.setState({
				message: error.message,
				messageColor: "red",
				hideMessage: false,
			});
		}
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	state = { openModal: false };

	openModal = () => this.setState({ openModal: true });

	render() {
		const { openModal } = this.state;

		return (
			<Container>
				<br />
				<Container style={{ marginTop: 150 }}>
					<Container style={{ width: 300 }}>
						<Image src={require("../images/login_logos.png")} alt="Logo" />

						<Segment placeholder padded>
							<Form onSubmit={this.login}>
								<Header textAlign="center">Login</Header>
								<Form.Input
									icon="user"
									iconPosition="left"
									label="Email"
									name="email"
									type="email"
									onChange={this.handleChange}
								/>
								<Form.Input
									icon="lock"
									iconPosition="left"
									label="Password"
									name="password"
									type="password"
									onChange={this.handleChange}
								/>

								<Modal
									style={{ textAlign: "center" }}
									open={openModal}
									size="mini"
									trigger={
										<h4
											style={{
												textAlign: "center",
												marginTop: 0,
												marginBottom: 20,
											}}
											onClick={this.openModal}
										>
											<a href="#password">
												<u>Forgot password?</u>
											</a>
										</h4>
									}
								>
									<Modal.Header>
										<Icon name="redo" />
										Password reset
									</Modal.Header>
									<Modal.Content>
										<Modal.Description>
											<Header>Please enter your email:</Header>
											<Container style={{ width: 215 }}>
												<Input
													style={{ marginBottom: 20 }}
													type="text"
													fluid
													placeholder="Email..."
													name="passwordReset"
													value={this.state.passwordReset}
													onChange={this.handleChange}
												/>
											</Container>
											<Button
												style={{ marginRight: 33 }}
												onClick={() =>
													this.setState({
														hideResetMessage: true,
														passwordReset: "",
														openModal: false,
													})
												}
											>
												Cancel
											</Button>
											<Button
												color="green"
												onClick={() =>
													this.sendResetEmail(this.state.passwordReset)
												}
											>
												Confirm
											</Button>
											<Container style={{ marginTop: 20, width: 215 }}>
												<Message
													style={{ textAlign: "center", borderRadius: 3 }}
													hidden={this.state.hideResetMessage}
													color="red"
												>
													<Message.Header>{this.state.message2}</Message.Header>
												</Message>
											</Container>
										</Modal.Description>
									</Modal.Content>
								</Modal>
								<Button content="Login" primary type="submit" />
							</Form>
						</Segment>
						<Message
							style={{ textAlign: "center", borderRadius: 3 }}
							hidden={this.state.hideMessage}
							color={this.state.messageColor}
						>
							<Message.Header>{this.state.message}</Message.Header>
						</Message>
					</Container>
				</Container>
			</Container>
		);
	}
}
export default LoginPage;
