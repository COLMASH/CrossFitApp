import CoachProfile from "../components/Coach/CoachProfile";
import CoachInfo from "../components/Coach/CoachInfo";
import News from "../components/General/News";
import CoachBar from "../components/Coach/CoachBar";

import "../styles/MainCoach.css";

function MainCoach() {
  return (
    <div className="MainCoach">
      <div className="ProfInfo-Block">
        <div>
          <CoachProfile />
        </div>
        <div>
          <CoachInfo />
        </div>
      </div>
      <div className="BarAndNews-Block">
        <div>
          <CoachBar />
        </div>
        <div>
          <News />
        </div>
      </div>
    </div>
  );
}

export default MainCoach;
