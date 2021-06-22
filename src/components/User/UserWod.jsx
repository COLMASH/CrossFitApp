import React, { useContext } from "react";
import GeneralUserContext from "../../contexts/generalUserContext";

function UserWod(props) {
  const { userWod } = useContext(GeneralUserContext);
  return (
    <div class="container">
      <div class="main-body">
        <div className="card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Program</h2>
              </div>
              <div className="col-sm-9 text-secondary">{userWod.program}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Date</h2>
              </div>
              <div className="col-sm-9 text-secondary">{userWod.date}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Schedule </h2>
              </div>
              <div className="col-sm-9 text-secondary">{userWod.schedule}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Coach ID</h2>
              </div>
              <div className="col-sm-9 text-secondary">{userWod.coachID}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Status</h2>
              </div>
              <div className="col-sm-9 text-secondary">{userWod.statusWod}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button className="btn btn-primary btn-sm" type="submit">
                  <strong>RESERVE</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWod;
