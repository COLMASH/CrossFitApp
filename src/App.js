import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainAdmin from "./pages/MainAdmin";
import MainCoach from "./pages/MainCoach";
import MainUser from "./pages/MainUser";
import WodUser from "./pages/Wod";
import Admins from "./pages/Admins";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MainAdmin" component={MainAdmin} />
        <Route exact path="/MainCoach" component={MainCoach} />
        <Route exact path="/MainUser" component={MainUser} />
        <Route exact path="/WodUser" component={WodUser} />
        <Route exact path="/Admins" component={Admins} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
