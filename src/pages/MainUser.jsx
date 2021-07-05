import UserProfile from "../components/User/UserProfile";
import UserInfo from "../components/User/UserInfo";
import UserNews from "../components/General/News";
import UserBar from "../components/User/UserBar";

import "../styles/MainUser.css";

function MainUser() {
  return (
    <div className="MainUser">
      <div className="ProfInfo-Block">
        <div>
          <UserProfile />
        </div>
        <div>
          <UserInfo />
        </div>
      </div>
      <div className="BarAndNews-Block">
        <div>
          <UserBar />
        </div>
        <div>
          <UserNews />
        </div>
      </div>
    </div>
  );
}
export default MainUser;
