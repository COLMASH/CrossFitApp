import React from "react";
import UserProfile from "../components/User/UserProfile";
import UserInfo from "../components/User/UserInfo";
import UserNews from "../components/General/News";
import UserBar from "../components/User/UserBar";

import "../styles/MainUser.css";

class MainUser extends React.Component {
  render() {
    return (
      <div className="MainUser">
        <div className="ProfInfo-Block">
          <div>
            <UserProfile user={this.props.user} />
          </div>
          <div>
            <UserInfo user={this.props.user} />
          </div>
        </div>
        <div className="BarAndNews-Block">
          <div>
            <UserBar />
          </div>
          <div>
            <UserNews />
          </div>
        </div>
      </div>
    );
  }
}

export default MainUser;
