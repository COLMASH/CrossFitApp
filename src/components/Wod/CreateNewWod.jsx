import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewWod } from "../../store/selectWodReducer";

function CreateNewWod() {
  const [activity, setActivity] = useState("");
  const [modality, setModality] = useState("");
  const [exercices, setExercices] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(
      createNewWod(activity, modality, exercices, repetitions, date, notes)
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div
        className="modal fade"
        id="NewWodModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Wod Creation Form 🏋️‍♂️
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h6>
                  <strong> *Activity: </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setActivity(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="Crossfit">Crossfit</option>
                <option value="Running">Running</option>
                <option value="Gymnastics">Gymnastics</option>
                <option value="Weightlifting">Weightlifting</option>
              </select>
              <div>
                <h6>
                  <strong> *Modality: </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setModality(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="AMRAP">AMRAP</option>
                <option value="EMOM">EMOM</option>
                <option value="FOR TIME">FOR TIME</option>
                <option value="TABATA">TABATA</option>
              </select>
              <div>
                <h6>
                  <strong> *Exercices: </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setExercices(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="400m run">400m run</option>
                <option value="Air squat">Air squat</option>
                <option value="Bar muscle up">Bar muscle up</option>
                <option value="Box jump">Box jump</option>
                <option value="Burpiee">Burpiee</option>
                <option value="Chin-up">Chin-up</option>
                <option value="Pistol">Pistol</option>
                <option value="Rope climb">Rope climb</option>
                <option value="Toes to bar">Toes to bar</option>
                <option value="Back squat">Back squat</option>
                <option value="Deadlift">Deadlift</option>
                <option value="Clean">Clean</option>
                <option value="Snatch">Snatch</option>
                <option value="Press">Press</option>
                <option value="Thruster">Thruster</option>
              </select>

              <div>
                <h6>
                  <strong> *Repetitions: </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setRepetitions(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
              <label htmlFor="Date">
                <strong> *Date: </strong>
              </label>
              <input
                id="Date"
                type="date"
                name="Date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <label htmlFor="Notes">
                <strong> Notes: </strong>
              </label>
              <input
                id="Notes"
                type="text"
                name="Notes"
                className="form-control"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
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
                disabled={
                  activity === "" ||
                  modality === "" ||
                  exercices === "" ||
                  repetitions === "" ||
                  date === ""
                }
                className="homeButton btn btn-primary btn-sm"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateNewWod;
