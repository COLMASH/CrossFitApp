import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainAdmin from "./pages/MainAdmin";
import MainCoach from "./pages/MainCoach";
import CreateWod from "./pages/CreateWod";
import MainUser from "./pages/MainUser";
import WodUser from "./pages/Wod";
import AdminsView from "./pages/AdminsView";

import { getAdmin, getAllAdmin } from "./store/selectAdminReducer";
import { getCoach } from "./store/selectCoachReducer";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmin());
    dispatch(getAllAdmin());
    dispatch(getCoach());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MainAdmin" component={MainAdmin} />
        <Route exact path="/MainCoach" component={MainCoach} />
        <Route exact path="/CreateWod" component={CreateWod} />
        <Route exact path="/MainUser" component={MainUser} />
        <Route exact path="/WodUser" component={WodUser} />
        <Route exact path="/AdminsView" component={AdminsView} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
