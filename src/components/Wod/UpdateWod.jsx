import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateWodInfo } from "../../store/selectWodReducer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  clearWodToUpdate,
  clearWodToDelete,
} from "../../store/selectWodReducer";

function UpdateWod() {
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
  const dispatch = useDispatch();

  const { wodToUpdate } = useSelector((state) => {
    return {
      wodToUpdate: state.selectWodReducer.wodToUpdate,
    };
  });

  const handleUpdate = () => {
    dispatch(
      updateWodInfo(
        wodToUpdate,
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
    dispatch(clearWodToUpdate());
    dispatch(clearWodToDelete());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div
        className="modal fade"
        id="UpdateWodModal"
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
                Edit Wod Form 🔁
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
                  <strong> Activity: </strong>
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
                  <strong> Modality: </strong>
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
                  <strong> Exercice 1: </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setExercice1(e.target.value)}
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
                  <strong> Repetitions (Ex1): </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setRepetition1(e.target.value)}
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

              <div>
                <h6>
                  <strong> Exercice 2: </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setExercice2(e.target.value)}
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
                  <strong> Repetitions (Ex2): </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setRepetition2(e.target.value)}
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

              <div>
                <h6>
                  <strong> Exercice 3: </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setExercice3(e.target.value)}
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
                  <strong> Repetitions (Ex3): </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setRepetition3(e.target.value)}
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

              <div>
                <h6>
                  <strong> Wod capacity (students): </strong>
                </h6>
              </div>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setCapacity(e.target.value)}
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
              <label htmlFor="Start Date">
                <strong> Start Date: </strong>
              </label>
              <div>
                <DatePicker
                  minDate={new Date()}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
              <label htmlFor="End Date">
                <strong> End Date: </strong>
              </label>
              <div>
                <DatePicker
                  minDate={new Date()}
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
              <label htmlFor="Notes">
                <strong> Notes: </strong>
              </label>
              <textarea
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
                disabled={
                  activity === "" &&
                  modality === "" &&
                  exercice1 === "" &&
                  repetition1 === "" &&
                  capacity === "" &&
                  startDate === "" &&
                  endDate === ""
                }
                className="homeButton btn btn-primary btn-sm"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateWod;
