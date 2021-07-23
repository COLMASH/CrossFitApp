import CoachProfile from "../components/Coach/CoachProfile";
import CoachBar from "../components/Coach/CoachBar";
import EditWod from "../components/Coach/EditWod";
// import Schedule from "../components/Coach/Schedule"

import "../styles/CreateWod.css"

function CreateWod() {
  return (
    <div className="mainCreateWod">
      <div className="coach-blockNavInfo">
        <div>
          <CoachProfile />
        </div>
        <div>
          <CoachBar />
        </div>
      </div>
      <div className="containerWodSche">
      <div>
        <EditWod />
      </div>
      <div className="scheBox">
        {/* <Schedule /> */}
      </div>
      </div>
    </div>
  );
}

export default CreateWod;
