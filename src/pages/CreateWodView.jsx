import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CoachProfile from "../components/Coach/CoachProfile";
import CoachBar from "../components/Coach/CoachBar";
import CreateWod from "../components/Coach/CreateWod";
import WodList from "../components/Wod/WodList";
import UpdateWod from "../components/Wod/UpdateWod";
import { deleteWod } from "../store/selectWodReducer";
import { getAllUser } from "../store/selectUserReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserAlt,
	faCalendarPlus,
	faDumbbell,
	faUserFriends,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/CreateWod.css";
import "../styles/AdminsView.css";

function CreateWodView() {
  const history = useHistory();
	const dispatch = useDispatch();

	const { wodToDelete } = useSelector((state) => {
		return {
			wodToDelete: state.selectWodReducer.wodToDelete,
		};
	});

  const Logout = () => {
		localStorage.removeItem("token");
		history.push("/");
	};
  const handleClickUsers = () => {
		dispatch(getAllUser());
	};

	const handleDelete = () => {
		dispatch(deleteWod(wodToDelete));
	};

	return (
		<div className="mainCreateWod">
			<div className="coach-blockNavInfo">
				<div>
					<CoachProfile />
				</div>
				<div className="coachBar-desktop">
					<CoachBar />
				</div>
			</div>
			<div className="containerWodSche">
				<div>
					<CreateWod />
					<UpdateWod />
					<div className="deleteButton">
						<label>
							<button
								type="button"
								className="homeButton btn btn-primary btn-sm"
								onClick={handleDelete}
							>
								DELETE WOD
							</button>
						</label>
						<label>
							<button
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#UpdateWodModal"
								className="homeButton btn btn-primary btn-sm"
							>
								EDIT WOD
							</button>
						</label>
					</div>
          <div>
					<div className="coach-blockManager">
						<h3>Active Wods</h3>
						<WodList />
					</div>
          </div>
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

export default CreateWodView;
