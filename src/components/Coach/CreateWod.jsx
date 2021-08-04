import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getAllActivities,
  getAllModalities,
  getAllExercises,
} from "../../store/selectAdminReducer";
import { createNewWod } from "../../store/selectWodReducer";

function CreateWod() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllModalities());
    dispatch(getAllExercises());
  }, []);

  const [activity, setActivity] = useState("");
  const [modality, setModality] = useState("");
  const [exercice1, setExercice1] = useState("");
  const [exercice2, setExercice2] = useState("");
  const [exercice3, setExercice3] = useState("");
  const [repetition1, setRepetition1] = useState("");
  const [repetition2, setRepetition2] = useState("");
  const [repetition3, setRepetition3] = useState("");
  const [capacity, setCapacity] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [notes, setNotes] = useState("");

  const { activityList, modalityList, exerciseList } = useSelector((state) => {
    return {
      activityList: state.selectAdminReducer.activityList,
      modalityList: state.selectAdminReducer.modalityList,
      exerciseList: state.selectAdminReducer.exerciseList,
    };
  });

  const handleCreate = () => {
    dispatch(
      createNewWod(
        activity,
        modality,
        exercice1,
        exercice2,
        exercice3,
        repetition1,
        repetition2,
        repetition3,
        capacity,
        startDate,
        endDate,
        notes
      )
    );
  };

  return (
    <div className="editWod-container">
      <div className="editForm-card">
        <div className="card-body">
          <h5 className="card-title">Create WOD</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreate();
            }}
          >
            <div>
              <div>
                <label htmlFor="activity">
                  <strong>
                    <h6> Activity </h6>
                  </strong>
                </label>
              </div>

              <select
                id="activity"
                name="activity"
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setActivity(e.target.value)}
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
                <label htmlFor="modality">
                  <strong>
                    <h6> Modality </h6>
                  </strong>
                </label>
              </div>
              <select
                id="modality"
                name="modality"
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setModality(e.target.value)}
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
                  <label htmlFor="exercise1">
                    <strong>
                      <h6> Exercise 1 </h6>
                    </strong>
                  </label>
                </div>
                <select
                  id="exercise1"
                  name="exercise1"
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onChange={(e) => setExercice1(e.target.value)}
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
                  <label htmlFor="repetition1">
                    <strong>
                      <h6> Repetitions (Ex1) </h6>
                    </strong>
                  </label>
                </div>
                <input
                  id="repetition1"
                  type="text"
                  name="repetition1"
                  pattern="[0-9]+"
                  placeholder="Write the amount of repetitions ..."
                  className="form-control"
                  onChange={(e) => setRepetition1(e.target.value)}
                  value={repetition1}
                />
              </div>
            </div>
            <div className="exeRep-container">
              <div className="exercise-container">
                <div>
                  <label htmlFor="exercise2">
                    <strong>
                      <h6> Exercise 2 </h6>
                    </strong>
                  </label>
                </div>
                <select
                  id="exercise2"
                  name="exercise2"
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onChange={(e) => setExercice2(e.target.value)}
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
                  <label htmlFor="repetition2">
                    <strong>
                      <h6> Repetitions (Ex2) </h6>
                    </strong>
                  </label>
                </div>
                <input
                  id="repetition2"
                  type="text"
                  name="repetition2"
                  pattern="[0-9]+"
                  placeholder="Write the amount of repetitions ..."
                  className="form-control"
                  onChange={(e) => setRepetition2(e.target.value)}
                  value={repetition2}
                />
              </div>
            </div>
            <div className="exeRep-container">
              <div className="exercise-container">
                <div>
                  <label htmlFor="exercise3">
                    <strong>
                      <h6> Exercise 3 </h6>
                    </strong>
                  </label>
                </div>
                <select
                  id="exercise3"
                  name="exercise3"
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onChange={(e) => setExercice3(e.target.value)}
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
                  <label htmlFor="repetition3">
                    <strong>
                      <h6> Repetitions (Ex3) </h6>
                    </strong>
                  </label>
                </div>
                <input
                  id="repetition3"
                  type="text"
                  name="repetition3"
                  pattern="[0-9]+"
                  placeholder="Write the amount of repetitions ..."
                  className="form-control"
                  onChange={(e) => setRepetition3(e.target.value)}
                  value={repetition3}
                />
              </div>
            </div>
            <div>
              <label htmlFor="capacity">
                <strong>
                  <h6> Wod capacity (students) </h6>
                </strong>
              </label>
              <input
                id="capacity"
                type="text"
                name="capacity"
                pattern="[0-9]+"
                placeholder="Write the number of people who can sign up ..."
                className="form-control"
                onChange={(e) => setCapacity(e.target.value)}
                value={capacity}
              />
            </div>
            <div className="exeRep-container">
              <div className="exercise-container">
                <label htmlFor="startDate">
                  <strong>
                    <h6> Start Date </h6>
                  </strong>
                </label>
                <div>
                  <DatePicker
                    id="startDate"
                    name="startDate"
                    minDate={new Date()}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </div>
              </div>
              <div className="exercise-container">
                <label htmlFor="endDate">
                  <strong>
                    <h6> End Date </h6>
                  </strong>
                </label>
                <div>
                  <DatePicker
                    id="endDate"
                    name="endDate"
                    minDate={new Date()}
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="notes">
                <strong>
                  <h6> Notes </h6>
                </strong>
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
            <div className="buttonContainer">
              <button
                className="homeButton btn btn-primary btn-sm"
                type="button"
              >
                ADD
              </button>
              <button
                disabled={
                  activity === "" ||
                  modality === "" ||
                  exercice1 === "" ||
                  repetition1 === "" ||
                  capacity === "" ||
                  startDate === "" ||
                  endDate === ""
                }
                className="homeButton btn btn-primary"
                type="submit"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateWod;
