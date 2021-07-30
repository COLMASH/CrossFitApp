import UserProfile from "../components/User/UserProfile";
import UserBar from "../components/User/UserBar";
import React from "react";
import UserReservationsManager from "../components/User/UserReservationsManager";
import UserReservationList from "../components/User/UserReservationList";

import "../styles/MainUser.css";

function UserSuscribeWod() {
  return (
    <div>
      <div className="mainUser">
        <div className="user-blockNavInfo">
          <div>
            <UserProfile />
          </div>
          <div>
            <UserBar />
          </div>
        </div>
        <div className="user-blockManager">
          <div>
            <UserReservationsManager />
            <br />
            <h3 style={{ color: "white" }}>Your Reservations</h3>
            <UserReservationList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSuscribeWod;
