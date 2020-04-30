import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import firebase from "./Firebase";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TerminologyPage from "./pages/TerminologyPage";
import MNDregister from "./pages/MNDregister";
import PatientDashboard from "./pages/PatientDashboard";
import NavBar from "./components/NavBar";

class App extends Component {
	constructor(props) {
		super(props);

		this.authListener = this.authListener.bind(this);

		this.state = {
			authUser: null,
		};
	}

	UNSAFE_componentWillMount() {
		localStorage.getItem("authUser") &&
			this.setState({
				authUser: JSON.parse(localStorage.getItem("authUser")),
			});
	}

	UNSAFE_componentWillUpdate(nextProps, nextState) {
		localStorage.setItem("authUser", JSON.stringify(nextState.authUser));
	}

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		firebase.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				this.setState({ authUser });
				this.timeout = setTimeout(() => {
					this.setState({ authUser: null });
					firebase.auth().signOut();
				}, 1800000);
			} else {
				this.setState({ authUser: null });
				localStorage.clear();
			}
		});
	}

	render() {
		return (
			<div>
				{this.state.authUser ? (
					<Route>
						<Redirect
							to={{
								pathname: this.props.location.pathname,
							}}
						/>
						<NavBar />
						<Route path="/" exact component={HomePage} />
						<Route path="/about" component={AboutPage} />
						<Route path="/terminology" component={TerminologyPage} />
						<Route path="/MNDregister" component={MNDregister} />
						<Route path="/patient" component={PatientDashboard} />
					</Route>
				) : (
					<Route>
						<Redirect
							to={{
								pathname: "/",
							}}
						/>
						<Route path="/" exact component={LoginPage} />
					</Route>
				)}
			</div>
		);
	}
}

export default withRouter(App);
