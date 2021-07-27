import CoachProfile from "../components/Coach/CoachProfile";
import CoachInfo from "../components/Coach/CoachInfo";
import News from "../components/General/News";
import CoachBar from "../components/Coach/CoachBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

import "../styles/MainCoach.css";

function MainCoach() {
  return (
    <div className="mainCoach">
      <div className="coach-blockNavInfo">
        <div>
          <CoachProfile />
        </div>
        <div className="coachBar-desktop">
          <CoachBar />
        </div>
      </div>
      <div className="coach-blockInfo">
        <div>
          <CoachInfo />
        </div>
        <div className="news-container">
          <News />
        </div>
      </div>
      <div className="coachBar-mobile">
        <div className="coach-menu">
          <div className="coach-menu-item">
            <div className="coach-item-content">
              {/* <div><FontAwesomeIcon icon={faUserAlt}/></div> */}
              <h3>Profile</h3>
            </div>
          </div>
          <div className="coach-menu-item">Create od</div>
          <div className="coach-menu-item">Wod factory</div>
          <div className="coach-menu-item">Reservation</div>
          <div className="coach-menu-item">Users</div>
        </div>
      </div>
    </div>
  );
}

export default MainCoach;
