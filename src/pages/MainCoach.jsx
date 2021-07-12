import CoachProfile from "../components/Coach/CoachProfile";
import CoachInfo from "../components/Coach/CoachInfo";
import News from "../components/General/News";
import CoachBar from "../components/Coach/CoachBar";

import "../styles/MainCoach.css";

function MainCoach() {
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
			<div className="coach-blockInfo">
				<div>
					<CoachInfo />
				</div>
				<div>
					<News />
				</div>
			</div>
		</div>
	);
}

export default MainCoach;
