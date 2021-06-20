import { Link } from "react-router-dom";

function CoachBar() {
  return (
    <div className="d-grid gap-3">
      <Link to="/MainCoach" className="btn btn-primary link">
        <strong>PROFILE</strong>
      </Link>
      <Link to="/CreateWod" className="btn btn-primary link">
        <strong>CREATE WOD</strong>
      </Link>
      <Link to="/Reservations" className="btn btn-primary link">
        <strong>RESERVATIONS</strong>
      </Link>
      <Link to="/Performance" className="btn btn-primary link">
        <strong>USERS</strong>
      </Link>
      <Link to="/ScheduleCoach" className="btn btn-primary link">
        <strong>MY SCHEDULE</strong>
      </Link>
      <Link to="/" className="btn btn-primary link">
        <strong>LOG OUT</strong>
      </Link>
    </div>
  );
}

export default CoachBar;
