import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainAdmin from "./pages/MainAdmin";
import MainCoach from "./pages/MainCoach";
import MainUser from "./pages/MainUser";
import Reservations from "./pages/Reservations";
import WodUser from "./pages/Wod";
import Penalties from "./pages/Penalties";
import Performance from "./pages/Performance";
import { userBox } from "./data";
import { wod } from "./data";
import { admin } from "./data";
import { coach } from "./data";

class App extends React.Component {
	state = {
		email: "",
		password: "",
		userBox,
		wod,
		admin,
		coach,
	};
	handleSubmit = (e) => {
		e.preventDefault();
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSelectUser = (email) => {
		const userBox = this.state.userBox.filter((u) => u.email === email);
		this.setState({ userBox });
	};

	render() {
		const { email } = this.state;
		return (
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Home
								email={email}
								handleChange={this.handleChange}
								handleSelectUser={() => this.handleSelectUser(email)}
								handleSubmit={this.handleSubmit}
								{...props}
							/>
						)}
					/>
					<Route
						exact
						path="/MainAdmin"
						render={(props) => (
							<MainAdmin admin={this.state.admin[0]} {...props} />
						)}
					/>
					<Route
						exact
						path="/MainCoach"
						render={(props) => (
							<MainCoach coach={this.state.coach[0]} {...props} />
						)}
					/>
					<Route
						exact
						path="/MainUser"
						render={(props) => (
							<MainUser user={this.state.userBox[0]} {...props} />
						)}
					/>
					<Route exact path="/Reservations" component={Reservations} />
					<Route
						exact
						path="/WodUser"
						render={(props) => (
							<WodUser
								wod={this.state.wod[0]}
								user={this.state.userBox[0]}
								{...props}
							/>
						)}
					/>
					<Route exact path="/Performance" component={Performance} />
					<Route exact path="/Penalties" component={Penalties} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
