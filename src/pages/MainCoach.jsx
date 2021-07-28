import CoachProfile from "../components/Coach/CoachProfile";
import CoachInfo from "../components/Coach/CoachInfo";
import News from "../components/General/News";
import CoachBar from "../components/Coach/CoachBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faCalendarPlus, faDumbbell, faUserFriends, faCalendarAlt ,faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
							<div>
								<FontAwesomeIcon icon={faUserAlt} />
							</div>
							<h3>Profile</h3>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<div>
								<FontAwesomeIcon icon={faDumbbell} />
							</div>
							<h3>Create Wod</h3>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<div>
								<FontAwesomeIcon icon={faUserAlt} />
							</div>
							<h3>Wod factory</h3>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<div>
								<FontAwesomeIcon icon={faCalendarPlus} />
							</div>
							<h3>Reservation</h3>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<div>
								<FontAwesomeIcon icon={faUserFriends} />
							</div>
							<h3>Users</h3>
						</div>
					</div>
          <div className="coach-menu-item">
						<div className="coach-item-content">
							<div>
								<FontAwesomeIcon icon={faCalendarAlt} />
							</div>
							<h3>Schedule</h3>
						</div>
					</div>
          <div className="coach-menu-item">
						<div className="coach-item-content">
							<div>
								<FontAwesomeIcon icon={faSignOutAlt} />
							</div>
							<h3>Logout</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainCoach;
