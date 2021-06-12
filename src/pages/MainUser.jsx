import React, { Component } from "react";
import UserProfile from "../components/MainUser/UserProfile";
import UserInfo from "../components/MainUser/UserInfo";
import "../styles/MainUser.css";

class MainUser extends Component {
  render() {
    return (
      <div className="MainUser">
        <div className="ProfInfo-Block">
          <div>
            <UserProfile />
          </div>
          <div>
            <UserInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default MainUser;
