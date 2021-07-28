import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCoach } from "../../store/selectCoachReducer";
import CoachUpdateInformation from "./CoachUpdateInformation";

function CoachInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoach());
  }, []);

  const { coach } = useSelector((state) => {
    return {
      coach: state.selectCoachReducer.coach,
    };
  });

  return (
    <div className="coach-container">
      <div className="coach-main-body">
        <div className="coachInfo card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> DNI Type: </h2>
              </div>
              <div className="col-sm-9">{coach.dniType}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> DNI Number: </h2>
              </div>
              <div className="col-sm-9">{coach.dni}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> Full Name: </h2>
              </div>
              <div className="col-sm-9">
                {coach.name} {coach.lastname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> Birthday: </h2>
              </div>
              <div className="col-sm-9">
                {new Date(coach.birthday + "GMT-5:00").toDateString()}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> Email: </h2>
              </div>
              <div className="col-sm-9">{coach.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> Phone: </h2>
              </div>
              <div className="col-sm-9">{coach.phone}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button
                  className="homeButton btn btn-primary btn-sm"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#coachUpdateModal"
                >
                  <strong>EDIT</strong>
                </button>
              </div>
              <CoachUpdateInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachInfo;
