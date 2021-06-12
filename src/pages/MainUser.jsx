import React, { Component } from "react";
import UserProfile from "../components/UserProfile";
import UserInfo from "../components/UserInfo";
import "../styles/MainUser.css";

class MainUser extends Component {
  render() {
    return (
      <div className="MainUser">
        <div className="ProfInfo-Block">
          <div>
            <UserProfile /* email={email} handleChange={this.handleChange} */ />
          </div>
          <div>
            <UserInfo /* email={email} handleChange={this.handleChange} */ />
          </div>
        </div>
      </div>
    );
  }
}

export default MainUser;
