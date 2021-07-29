import CoachProfile from "../components/Coach/CoachProfile";
import CoachBar from "../components/Coach/CoachBar";
import UsersList from "../components/User/UsersList";
import SeeUserManager from "../components/Coach/SeeUserManager"

import "../styles/AdminsView.css";

function coachUserView() {
  return (
    <div className="Admins">
      <div className="admins-blockNavInfo">
        <div>
          <CoachProfile />
        </div>
        <div>
          <CoachBar />
        </div>
      </div>
      <div className="admins-blockManager">
        <div>
          <SeeUserManager />
        </div>
        <div>
          <br />
          <h3>BOX USERS</h3>
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default coachUserView;
