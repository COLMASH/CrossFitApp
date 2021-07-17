import { useSelector } from "react-redux";

function CoachProfile() {
  const { coach } = useSelector((state) => {
    return {
      coach: state.selectCoachReducer.coach,
    };
  });
  return (
    <div class="coach-container">
      <div class="coach-main-body">
        <div className="card1">
          <div className="card1-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="CoachPhoto"
                className="rounded-circle"
                width="150"
              />
              <div className="mt-3">
                <h1 style={{ fontSize: 25 }}>
                  {coach.name} {coach.lastname}
                </h1>
                <p>Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoachProfile;
