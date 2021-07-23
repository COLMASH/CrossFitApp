import { Link, useHistory } from "react-router-dom";

function CoachBar() {
  const history = useHistory();

  function Logout() {
    localStorage.removeItem("token");
    history.push("/");
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
          to="/Performance"
          className="coachLinkButton btn btn-primary link"
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
