import { useSelector } from "react-redux";
import UpdateCoachProfilePic from "./CoachProfilePicUpdate";

function CoachProfile() {
	const { coach, coachPhoto } = useSelector((state) => {
		return {
			coach: state.selectCoachReducer.coach,
      coachPhoto: state.selectCoachReducer.coachPhoto,
		};
	});
	return (
		<div class="coach-container">
			<div class="coach-main-body">
				<div className="card1">
					<div className="card1-body">
						<div className="d-flex flex-column align-items-center text-center">
							<img
								src={coachPhoto}
								alt="Coach"
								className="rounded-circle"
								width="150"
							/>
							<button
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#staticBackdrop"
								className="homeButton btn btn-primary btn-sm"
							>
								Update
							</button>
							<div className="mt-3">
								<h1 style={{ fontSize: 25 }}>
									{coach.name} {coach.lastname}
								</h1>
								<p>{coach.email}</p>
								<p>{coach.phone}</p>
							</div>
						</div>
						<UpdateCoachProfilePic />
					</div>
				</div>
			</div>
		</div>
	);
}
export default CoachProfile;
