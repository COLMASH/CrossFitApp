import AdminProfile from "../components/Admin/AdminProfile";
import AdminInfo from "../components/Admin/AdminInfo";
import News from "../components/General/News";
import AdminBar from "../components/Admin/AdminBar";

import "../styles/Admin.css";

function MainAdmin() {
  return (
    <div className="AdminUser">
      <div className="ProfInfo-Block">
        <div>
          <AdminProfile />
        </div>
        <div>
          <AdminInfo />
        </div>
      </div>
      <div className="BarAndNews-Block">
        <div>
          <AdminBar />
        </div>
        <div>
          <News />
        </div>
      </div>
    </div>
  );
}

export default MainAdmin;
