import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import CoachProfile from "../components/Coach/CoachProfile";
import CoachInfo from "../components/Coach/CoachInfo";
import News from "../components/General/News";
import CoachBar from "../components/Coach/CoachBar";
import { getAllUser } from "../store/selectUserReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserAlt,
	faCalendarPlus,
	faDumbbell,
	faUserFriends,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/MainCoach.css";

function MainCoach() {
	const history = useHistory();
	const dispatch = useDispatch();

	const Logout = () => {
		localStorage.removeItem("token");
		history.push("/");
	};
	const handleClickUsers = () => {
		dispatch(getAllUser());
	};

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
							<Link
								to="/MainCoach"
								className="phoneButton coachLinkButton btn btn-primary link"
							>
								<div>
									<FontAwesomeIcon icon={faUserAlt} />
								</div>
								<h3>Profile</h3>
							</Link>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<Link
								to="/CreateWodView"
								className="phoneButton coachLinkButton btn btn-primary link"
							>
								<div>
									<FontAwesomeIcon icon={faDumbbell} />
								</div>
								<h3>Create Wod</h3>
							</Link>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<Link
								to="/WodFactoryView"
								className="phoneButton coachLinkButton btn btn-primary link"
							>
								<div>
									<FontAwesomeIcon icon={faUserAlt} />
								</div>
								<h3>Wod factory</h3>
							</Link>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<Link
								to="/Reservations"
								className="phoneButton coachLinkButton btn btn-primary link"
							>
								<div>
									<FontAwesomeIcon icon={faCalendarPlus} />
								</div>
								<h3>Reservation</h3>
							</Link>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<Link
								to="/coachUserView"
								className="phoneButton coachLinkButton btn btn-primary link"
								onClick={handleClickUsers}
							>
								<div>
									<FontAwesomeIcon icon={faUserFriends} />
								</div>
								<h3>Users</h3>
							</Link>
						</div>
					</div>
					<div className="coach-menu-item">
						<div className="coach-item-content">
							<Link
								type="button"
								onClick={Logout}
								className="phoneButton coachLinkButton btn btn-primary"
							>
								<div>
									<FontAwesomeIcon icon={faSignOutAlt} />
								</div>
								<h3>Logout</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainCoach;
