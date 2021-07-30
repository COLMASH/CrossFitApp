import AdminProfile from "../components/Admin/AdminProfile";
import AdminBar from "../components/Admin/AdminBar";
import NewsManager from "../components/Admin/NewsManager";
import NewsList from "../components/Admin/NewsList";

import "../styles/AdminsView.css";

function MainNews() {
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
          <NewsManager />
          <br />
          <h3>BOX NEWS CONTROLLER</h3>
          <NewsList />
        </div>
      </div>
    </div>
  );
}

export default MainNews;
