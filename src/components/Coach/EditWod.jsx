import { useHistory } from "react-router-dom";
import React, { useState } from "react";


function EditWod() {
  const history = useHistory();
  const [notes, setNotes] = useState("")


  return(
    <div className="editWod-container">
<div className="editForm-card" >
<div className="card-body">
  <h5 className="card-title">Create WOD</h5>
  <form 
    onSubmit={(e) => {
      e.preventDefault();
      // handleSignIn();
    }}>
      <div><h6>Activity</h6></div>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div><h6>Modality</h6></div>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div><h6>Exercises</h6></div>
      <div className="exeRep-container">
      <select class="ey form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Exercise...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="ey form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Repetitions...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      </div>
      <button 
        className="homeButton btn btn-primary btn-sm" 
        type="button"
      >
        Add exercise
      </button>
      <div>
      <label htmlFor="notes"><h6>Notes:</h6></label>
      </div>
      <div>
      <textarea 
        id="notes" 
        name="notes"
        placeholder="Write some notes..."
        value={notes}
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