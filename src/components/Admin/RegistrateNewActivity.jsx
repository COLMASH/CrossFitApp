import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewActivity } from "../../store/selectAdminReducer";

function RegistrateNewActivity() {
  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    dispatch(createNewActivity(activity));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
    >
      <div
        className="modal fade"
        id="NewActivityModal"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Activity Registration Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="activity">
                <strong> *Activity Name: </strong>
              </label>
              <input
                autoFocus
                id="activity"
                type="text"
                name="activity"
                className="form-control"
                onChange={(e) => setActivity(e.target.value)}
                value={activity}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="homeButton btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={activity === ""}
                className="homeButton btn btn-primary btn-sm"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegistrateNewActivity;
