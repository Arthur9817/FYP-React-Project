import React, { Component, createRef } from "react";
import firebase from "../Firebase";
import { Link } from "react-router-dom";
import {
	Menu,
	Container,
	Modal,
	Header,
	Button,
	Icon,
} from "semantic-ui-react";

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.signOut = this.signOut.bind(this);

		this.state = { activeItem: "home", activeName: "" };
	}

	handleItemClick = (e, { name, pagename }) =>
		this.setState({ activeItem: name, activeName: pagename });

	contextRef = createRef();

	UNSAFE_componentWillMount() {
		localStorage.getItem("activeItem") &&
			this.setState({
				activeItem: JSON.parse(localStorage.getItem("activeItem")),
			});
	}

	UNSAFE_componentWillUpdate(nextProps, nextState) {
		localStorage.setItem("activeItem", JSON.stringify(nextState.activeItem));
	}

	signOut() {
		localStorage.clear();
		firebase.auth().signOut();
	}

	state = { openModal: false };

	openModal = () => this.setState({ openModal: true });
	closeModal = () => this.setState({ openModal: false });

	render() {
		const { activeItem, openModal } = this.state;
		return (
			<nav>
				<Container>
					<img
						style={{ width: 350, margin: 10 }}
						src={require("../images/logos.png")}
						alt="Logo"
					/>
					<Container>
						<Menu
							pointing
							secondary
							size="large"
							style={{
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Menu.Item
								as={Link}
								to="/"
								color="blue"
								icon="home"
								pagename="Home"
								name="home"
								active={activeItem === "home"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								as={Link}
								to="/about"
								color="blue"
								icon="info"
								pagename="About"
								name="about"
								active={activeItem === "about"}
								onClick={this.handleItemClick}
							/>

							<Menu.Item
								as={Link}
								to="/terminology"
								color="blue"
								icon="list"
								pagename="Terminology"
								name="Terminology"
								active={activeItem === "Terminology"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								as={Link}
								to="/MNDregister"
								color="blue"
								icon="database"
								pagename="MND Register"
								name="MND Register"
								active={activeItem === "MND Register"}
								onClick={this.handleItemClick}
							/>

							<Modal
								open={openModal}
								trigger={
									<Menu.Item
										color="blue"
										icon="sign-out"
										pagename="Logout"
										name="logout"
										active={activeItem === "logout"}
										onClick={this.openModal}
									/>
								}
								basic
								size="small"
							>
								<Header
									icon="sign-out"
									content="Are you sure you want to logout?"
								/>
								<Modal.Actions>
									<Button basic color="red" inverted onClick={this.closeModal}>
										<Icon name="remove" /> No
									</Button>
									<Button color="green" inverted onClick={this.signOut}>
										<Icon name="checkmark" /> Yes
									</Button>
								</Modal.Actions>
							</Modal>
						</Menu>
					</Container>
				</Container>
			</nav>
		);
	}
}
export default NavBar;
