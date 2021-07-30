import UserProfile from "../components/User/UserProfile";
import UserBar from "../components/User/UserBar";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import UserSuscriptionManager from "../components/User/UserSubscriptionManager";
import UserGeneralWodList from "../components/User/UserGeneralWodList";
import { getUser } from "../store/selectUserReducer";

import "../styles/MainUser.css";

function UserSuscribeWod() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
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
          <UserSuscriptionManager />
          <br />
          <h3 style={{ color: "white" }}>All Active Wods</h3>
          <UserGeneralWodList />
        </div>
      </div>
    </div>
  );
}

export default UserSuscribeWod;
