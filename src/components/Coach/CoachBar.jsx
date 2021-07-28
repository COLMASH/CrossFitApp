import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { getAllUser } from "../../store/selectUserReducer"

function CoachBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  }
  const handleClickUsers = () => {
    dispatch(getAllUser())
  }

  return (
    <nav>
      <div className="coachNavContainer d-grid gap-3">
        <Link to="/MainCoach" className=" coachLinkButton btn btn-primary link">
          <strong>PROFILE</strong>
        </Link>
        <Link to="/CreateWod" className="coachLinkButton btn btn-primary link">
          <strong>CREATE WOD</strong>
        </Link>
        <Link
          to="/WodFactoryView"
          className="coachLinkButton btn btn-primary link"
        >
          <strong>WOD FACTORY</strong>
        </Link>
        <Link
          to="/Reservations"
          className="coachLinkButton btn btn-primary link"
        >
          <strong>RESERVATIONS</strong>
        </Link>
        <Link
          to="/coachUserView"
          className="coachLinkButton btn btn-primary link"
          onClick={handleClickUsers}
        >
          <strong>USERS</strong>
        </Link>
        <Link
          to="/ScheduleCoach"
          className="coachLinkButton btn btn-primary link"
        >
          <strong>MY SCHEDULE</strong>
        </Link>
        <button
          type="button"
          onClick={Logout}
          className="coachButton btn btn-primary"
        >
          <strong>LOG OUT</strong>
        </button>
      </div>
    </nav>
  );
}

export default CoachBar;
