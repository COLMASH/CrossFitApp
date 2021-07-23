import UserProfile from "../components/User/UserProfile";
import UserWod from "../components/User/UserWod";
import UserBar from "../components/User/UserBar";

import "../styles/MainUser.css";

function WodUser() {
  return (
    <div className="MainUser">
      <div className="ProfInfo-Block">
        <div>
          <UserProfile />
        </div>
        <div>
          <UserWod />
        </div>
      </div>
      <div className="BarAndNews-Block">
        <div>
          <UserBar />
        </div>
      </div>
    </div>
  );
}
export default WodUser;
