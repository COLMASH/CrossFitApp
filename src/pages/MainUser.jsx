import React from "react";
import UserProfile from "../components/MainUser/UserProfile";
import UserInfo from "../components/MainUser/UserInfo";
import UserNews from "../components/MainUser/UserNews";
import UserBar from "../components/MainUser/UserBar";

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
