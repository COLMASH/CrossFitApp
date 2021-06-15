import { Link } from "react-router-dom";

function UserBar() {
  return (
    <div className="d-grid gap-3">
      <Link to="/Reservations" className="btn btn-primary link">
        <strong>YOUR RESERVATIONS</strong>
      </Link>
      <Link to="/WodUser" className="btn btn-primary link">
        <strong>WODs</strong>
      </Link>
      <Link to="/Performance" className="btn btn-primary link">
        <strong>YOUR PERFORMANCE</strong>
      </Link>
      <Link to="/Penalties" className="btn btn-primary link">
        <strong>RESERVATIONS PENALTIES</strong>
      </Link>
    </div>
  );
}

export default UserBar;
