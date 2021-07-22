import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllAdmin } from "../../store/selectAdminReducer";
import { getAllCoach } from "../../store/selectCoachReducer";

function AdminBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const handleClicAdmins = () => {
    dispatch(getAllAdmin());
  };

  const handleClicCoaches = () => {
    dispatch(getAllCoach());
  };

  return (
    <nav>
      <div className="adminNavContainer d-grid gap-3">
        <Link to="/MainAdmin" className="adminLinkButton btn btn-primary link">
          <strong>PROFILE</strong>
        </Link>
        <Link to="/BoxStats" className="adminLinkButton btn btn-primary link">
          <strong>BOX STATS</strong>
        </Link>
        <Link to="/Users" className="adminLinkButton btn btn-primary link">
          <strong>USERS</strong>
        </Link>
        <Link
          to="/CoachesView"
          className="adminLinkButton btn btn-primary link"
          onClick={handleClicCoaches}
        >
          <strong>COACHES</strong>
        </Link>
        <Link
          to="/AdminsView"
          className="adminLinkButton btn btn-primary link"
          onClick={handleClicAdmins}
        >
          <strong>ADMINS</strong>
        </Link>
        <Link
          to="/TrainingSetup"
          className="adminLinkButton btn btn-primary link"
        >
          <strong>TRAINING SETUP</strong>
        </Link>
        <Link to="/Coaches" className="adminLinkButton btn btn-primary link">
          <strong>UPDATE NEWS</strong>
        </Link>
        <button
          type="button"
          onClick={Logout}
          className="adminButton btn btn-primary"
        >
          <strong>LOG OUT</strong>
        </button>
      </div>
    </nav>
  );
}

export default AdminBar;
