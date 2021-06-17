import { Link } from "react-router-dom";

function AdminBar() {
  return (
    <div className="d-grid gap-3">
      <Link to="/BoxStats" className="btn btn-primary link">
        <strong>BOX STATS</strong>
      </Link>
      <Link to="/Users" className="btn btn-primary link">
        <strong>USERS</strong>
      </Link>
      <Link to="/Coaches" className="btn btn-primary link">
        <strong>COACHES</strong>
      </Link>
      <Link to="/Coaches" className="btn btn-primary link">
        <strong>UPDATE NEWS</strong>
      </Link>
    </div>
  );
}

export default AdminBar;