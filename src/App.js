import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainAdmin from "./pages/MainAdmin";
import MainCoach from "./pages/MainCoach";
import CreateWodView from "./pages/CreateWodView";
import MainUser from "./pages/MainUser";
import WodUser from "./pages/Wod";
import AdminsView from "./pages/AdminsView";
import CoachesView from "./pages/CoachesView";
import UsersView from "./pages/UsersView";
import TrainingSetupView from "./pages/TrainingSetupView";
import WodFactoryView from "./pages/WodFactoryView";
import NewsView from "./pages/NewsView";
import coachUserView from "./pages/CoachUsersView";
import UserSuscribeWod from "./pages/UserSuscribeWod";
import UserWodReservations from "./pages/UserWodReservations";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MainAdmin" component={MainAdmin} />
        <Route exact path="/MainCoach" component={MainCoach} />
        <Route exact path="/CreateWodView" component={CreateWodView} />
        <Route exact path="/MainUser" component={MainUser} />
        <Route exact path="/WodUser" component={WodUser} />
        <Route exact path="/AdminsView" component={AdminsView} />
        <Route exact path="/CoachesView" component={CoachesView} />
        <Route exact path="/UsersView" component={UsersView} />
        <Route exact path="/TrainingSetup" component={TrainingSetupView} />
        <Route exact path="/WodFactoryView" component={WodFactoryView} />
        <Route exact path="/NewsView" component={NewsView} />
        <Route exact path="/coachUserView" component={coachUserView} />
        <Route exact path="/UserSuscribeWod" component={UserSuscribeWod} />
        <Route exact path="/UserWodReservations" component={UserWodReservations} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
