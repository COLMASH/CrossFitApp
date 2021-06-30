import { useSelector } from "react-redux";

function CoachProfile() {
  const { coach } = useSelector(({ selectCoachReducer }) => {
    return {
      coach: selectCoachReducer.coach,
    };
  });
  return (
    <div class="container">
      <div class="main-body">
        <div className="card1">
          <div className="card1-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                className="rounded-circle"
                width="150"
              />
              <div className="mt-3">
                <h1 style={{ fontSize: 25 }}>
                  {coach.name} {coach.lastname}
                </h1>
                <p>{coach.email}</p>
                <p>{coach.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoachProfile;
