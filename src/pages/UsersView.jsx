import AdminProfile from "../components/Admin/AdminProfile";
import AdminBar from "../components/Admin/AdminBar";
import UsersList from "../components/User/UsersList";

import "../styles/AdminsView.css";

function MainAdmin() {
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
          <h3>BOX USERS</h3>
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default MainAdmin;
