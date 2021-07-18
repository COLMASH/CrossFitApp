import { useSelector } from "react-redux";

function CoachInfo() {
  const { coach } = useSelector((state) => {
    return {
      coach: state.selectCoachReducer.coach,
    };
  });
  return (
    <div class="coach-container">
      <div class="coach-main-body">
        <div className="card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Id Type</h2>
              </div>
              <div className="col-sm-9">CC</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Id Number</h2>
              </div>
              <div className="col-sm-9">{coach.dni}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Full Name</h2>
              </div>
              <div className="col-sm-9">
                {coach.name} {coach.lastname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Birthday</h2>
              </div>
              <div className="col-sm-9">{coach.birthday}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Email</h2>
              </div>
              <div className="col-sm-9">{coach.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Mobile </h2>
              </div>
              <div className="col-sm-9">{coach.phone}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button
                  className="homeButton btn btn-primary btn-sm"
                  type="submit"
                >
                  <strong>EDIT</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachInfo;
