import AdminProfile from "../components/Admin/AdminProfile";
import AdminBar from "../components/Admin/AdminBar";
import AdminManager from "../components/Admin/AdminManager";

import "../styles/Admin.css";

function MainAdmin() {
  return (
    <div className="AdminUser">
      <div className="ProfInfo-Block">
        <div>
          <AdminProfile />
        </div>
        <div>
          <AdminManager />
        </div>
      </div>
      <div className="BarAndNews-Block">
        <div>
          <AdminBar />
        </div>
      </div>
    </div>
  );
}

export default MainAdmin;
