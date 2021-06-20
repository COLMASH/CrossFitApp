import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainAdmin from "./pages/MainAdmin";
import MainCoach from "./pages/MainCoach";
import MainUser from "./pages/MainUser";
import Reservations from "./pages/Reservations";
import WodUser from "./pages/Wod";
import Penalties from "./pages/Penalties";
import Performance from "./pages/Performance";
import generalUserContext from "./contexts/generalUserContext"
import { userBox } from "./data";
import { wod } from "./data";
import { admin } from "./data";
import { coach } from "./data";

function App(props) {
	const [formInputs, setForm]=useState({
		email:'',
		password:''
	})
	const [user, setUserBox]=useState(userBox)
	const [userWod]=useState(wod)
	const [userCoach]=useState(coach)
	const [userAdmin]=useState(admin)

	const handleSubmit=(e)=>{
		e.preventDefault();
	};

	const handleChange=(e)=>{
		const { name, value } = e.target;
		setForm({...formInputs,[name]: value })
	};

	const handleSelectUser=()=>{
		const user = userBox.filter((u) => u.email === formInputs.email);
		setUserBox(user);
	};

	return (
		<generalUserContext.Provider value={{
			formInputs,
			user:user[0],
			userWod:wod[0],
			userCoach:[0],
			userAdmin:admin[0],
			handleChange,
			handleSelectUser,
			handleSubmit
			}}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/MainAdmin" component={MainAdmin}/>
					<Route exact path="/MainCoach" component={MainCoach}/>
					<Route exact path="/MainUser" component={MainUser}/>
					<Route exact path="/WodUser" component={WodUser}/>
					<Route exact path="/Performance" component={Performance} />
					<Route exact path="/Penalties" component={Penalties} />
					<Route exact path="/Reservations" component={Reservations} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Router>
		</generalUserContext.Provider>

	);
}

export default App;