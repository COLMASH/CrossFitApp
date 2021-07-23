import CoachProfile from "../components/Coach/CoachProfile";
import CoachBar from "../components/Coach/CoachBar";
import WodManager from "../components/Wod/WodManager";
import WodList from "../components/Wod/WodList";
import { getWod, getAllWod } from "../store/selectWodReducer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "../styles/CreateWod.css";
import "../styles/AdminsView.css";

function WodFactoryView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWod());
    dispatch(getAllWod());
  }, []);
  return (
    <div className="mainCreateWod">
      <div className="coach-blockNavInfo">
        <div>
          <CoachProfile />
        </div>
        <div>
          <CoachBar />
        </div>
      </div>
      <div className="admins-blockManager">
        <div>
          <WodManager />
          <br />
          <h3>Active Wods</h3>
          <WodList />
        </div>
      </div>
    </div>
  );
}
export default WodFactoryView;
