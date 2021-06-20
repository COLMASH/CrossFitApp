import React from "react";
import UserProfile from "../components/MainUser/UserProfile";
import UserWod from "../components/Wod/UserWod";
import UserBar from "../components/MainUser/UserBar";

import "../styles/MainUser.css";

class WodUser extends React.Component {
  render() {
    return (
      <div className="MainUser">
        <div className="ProfInfo-Block">
          <div>
            <UserProfile />
          </div>
          <div>
            <UserWod />
          </div>
        </div>
        <div className="BarAndNews-Block">
          <div>
            <UserBar />
          </div>
        </div>
      </div>
    );
  }
}

export default WodUser;
