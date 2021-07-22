import AdminProfile from "../components/Admin/AdminProfile";
import AdminBar from "../components/Admin/AdminBar";
import CoachManager from "../components/Coach/CoachManager";
import CoachList from "../components/Coach/CoachList";

import "../styles/AdminsView.css";

function MainCoach() {
  return (
    <div className="Admins">
      <div className="admins-blockNavInfo">
        <div>
          <AdminProfile />
        </div>
        <div>
          <AdminBar />
        </div>
      </div>
      <div className="admins-blockManager">
        <div>
          <CoachManager />
          <br />
          <h3>Active coaches</h3>
          <CoachList />
        </div>
      </div>
    </div>
  );
}

export default MainCoach;
