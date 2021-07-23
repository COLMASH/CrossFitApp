import { useHistory } from "react-router-dom";
import React, { useState } from "react";


function EditWod() {
  const history = useHistory();
  const [notes, setNotes] = useState("")
  const [repeat, setRepeat] = useState("")


  return(
    <div className="editWod-container">
<div className="editForm-card" >
<div className="card-body">
  <h5 className="card-title">Create WOD</h5>
  <form 
    onSubmit={(e) => {
      e.preventDefault();
    }}>
      <div>
      <div><h6>Activity</h6></div>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Choose...</option>
        <option value="crossfit">Crossfit</option>
        <option value="running">Running</option>
        <option value="gymnastics">Gymnastics</option>
        <option value="weightlifting">Weightlifting</option>
      </select>
      </div>
      <div>
      <div><h6>Modality</h6></div>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Choose...</option>
        <option value="emom">EMOM</option>
        <option value="amrap">AMRAP</option>
        <option value="fortime">FORTIME</option>
        <option value="tabata">TABATA</option>
      </select>
      </div>
      <div className="exeRep-container">
      <div className="exercise-container">
      <div><h6>Exercises</h6></div>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Exercise...</option>
        <option value="400mrum">400m rum</option>
        <option value="airsquat">Air squat</option>
        <option value="barmuscleup">Bar muscle up</option>
        <option value="boxjump">Box jump</option>
        <option value="burpee">Burpee</option>
        <option value="chinup">Chin-up</option>
        <option value="pistol">Pistol</option>
        <option value="ropeclimb">Rope climb</option>
        <option value="toestobar">Toes to bar</option>
        <option value="backsquat">Back squat</option>
        <option value="deadlift">Deadlift</option>
        <option value="clean">Clean</option>
        <option value="snatch">Snatch</option>
        <option value="press">Press</option>
        <option value="thruster">Thruster</option>
      </select>
      </div>
      <div className="repeat-container">
      <div><h6>Repetitions</h6></div>
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
      <button 
        className="homeButton btn btn-primary btn-sm" 
        type="button"
      >
        Add
      </button>
      <div>
      <label htmlFor="notes"><h6>Notes:</h6></label>
      </div>
      <div>
      <input 
        id="notes" 
        type="text"
        name="notes"
        placeholder="Write some notes..."
        value={notes}
        className="notes-container form-control"
        onChange={(e) => setNotes(e.target.value)}
      />
      </div>
      <button 
        className="homeButton btn btn-primary"
        type="submit"  
      >
        Save
      </button>
  </form>
</div>
</div>
</div>
  )
}

export  default EditWod