import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getAllActivities,
  getAllModalities,
  getAllExercises,
} from "../../store/selectAdminReducer";
import { useDispatch, useSelector } from "react-redux";

function EditWod() {
  const history = useHistory();
  const [notes, setNotes] = useState("");
  const [repeat, setRepeat] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllModalities());
    dispatch(getAllExercises());
  }, []);

  const { activityList, modalityList, exerciseList } = useSelector((state) => {
    return {
      activityList: state.selectAdminReducer.activityList,
      modalityList: state.selectAdminReducer.modalityList,
      exerciseList: state.selectAdminReducer.exerciseList,
    };
  });

  return (
    <div className="editWod-container">
      <div className="editForm-card">
        <div className="card-body">
          <h5 className="card-title">Create WOD</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <div>
                <h6>Activity</h6>
              </div>

              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Choose...</option>
                {!!activityList &&
                  activityList.length > 0 &&
                  activityList.map((activity) => (
                    <option value={activity.activity}>
                      {activity.activity}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <div>
                <h6>Modality</h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Choose...</option>
                {!!modalityList &&
                  modalityList.length > 0 &&
                  modalityList.map((modality) => (
                    <option value={modality.modality}>
                      {modality.modality}
                    </option>
                  ))}
              </select>
            </div>
            <div className="exeRep-container">
              <div className="exercise-container">
                <div>
                  <h6>Exercises</h6>
                </div>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Choose...</option>
                  {!!exerciseList &&
                    exerciseList.length > 0 &&
                    exerciseList.map((exercise) => (
                      <option value={exercise.exercise}>
                        {exercise.exercise}
                      </option>
                    ))}
                </select>
              </div>
              <div className="repeat-container">
                <div>
                  <h6>Repetitions</h6>
                </div>
                <input
                  id="repeat"
                  type="text"
                  name="repeat"
                  placeholder="Write the amount of repetitions ..."
                  className="form-control"
                  onChange={(e) => setRepeat(e.target.value)}
                  value={repeat}
                />
              </div>
            </div>
            <button className="homeButton btn btn-primary btn-sm" type="button">
              Add
            </button>
            <div>
              <label htmlFor="notes">
                <h6>Notes:</h6>
              </label>
            </div>
            <div>
              <textarea
                id="notes"
                type="text"
                name="notes"
                placeholder="Write some notes..."
                value={notes}
                className="notes-container form-control"
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <button className="homeButton btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditWod;
