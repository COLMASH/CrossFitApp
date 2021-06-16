import React from "react";
import AdminProfile from "../components/Admin/AdminProfile";
import AdminInfo from "../components/Admin/AdminInfo";
import News from "../components/General/News";
import AdminBar from "../components/Admin/AdminBar";

import "../styles/Admin.css";

class MainAdmin extends React.Component {
  render() {
    return (
      <div className="AdminUser">
        <div className="ProfInfo-Block">
          <div>
            <AdminProfile admin={this.props.admin} />
          </div>
          <div>
            <AdminInfo admin={this.props.admin} />
          </div>
        </div>
        <div className="BarAndNews-Block">
          <div>
            <AdminBar />
          </div>
          <div>
            <News />
          </div>
        </div>
      </div>
    );
  }
}

export default MainAdmin;