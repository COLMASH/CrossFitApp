import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewExercise } from "../../store/selectAdminReducer";

function RegistrateNewExercise() {
  const [exercise, setExercise] = useState("");
  const [unitMeasurement, setUnitMeasurement] = useState("");
  const [video, setVideo] = useState("");

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    dispatch(createNewExercise(exercise, unitMeasurement, video));
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
        id="NewExerciseModal"
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
                Exercise Registration Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="exercise">
                <strong> *Exercise: </strong>
              </label>
              <input
                autoFocus
                id="exercise"
                type="text"
                name="exercise"
                className="form-control"
                onChange={(e) => setExercise(e.target.value)}
                value={exercise}
              />
              <label htmlFor="unitMeasurement">
                <strong> Unit of Measurement: </strong>
              </label>
              <input
                id="unitMeasurement"
                type="text"
                name="unitMeasurement"
                className="form-control"
                onChange={(e) => setUnitMeasurement(e.target.value)}
                value={unitMeasurement}
              />
              <label htmlFor="video">
                <strong> Link to Video: </strong>
              </label>
              <input
                id="video"
                type="text"
                name="video"
                className="form-control"
                onChange={(e) => setVideo(e.target.value)}
                value={video}
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
                disabled={exercise === ""}
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

export default RegistrateNewExercise;
