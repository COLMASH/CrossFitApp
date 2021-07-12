import CoachProfile from "../components/Coach/CoachProfile";
import CoachBar from "../components/Coach/CoachBar";
import EditWod from "../components/Coach/EditWod";

import "../styles/CreateWod.css";

function CreateWod() {
	return (
		<div className="mainCoach">
			<div className="coach-blockNavInfo">
				<div>
					<CoachProfile />
				</div>
				<div>
					<CoachBar />
				</div>
			</div>
      <div>
        <EditWod />
      </div>
		
		</div>
	);
}

export default CreateWod;
