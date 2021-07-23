import React, { useState } from "react";
import { useDispatch } from "react-redux";

function EditWod() {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");
	const [modality, setModality] = useState("");
	const [exercise, setExercise] = useState("");
	const [notes, setNotes] = useState("");
	const [repeat, setRepeat] = useState("");

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
                onChange={(e) => setActivity(e.target.value)}
							>
								<option selected>Choose...</option>
								<option value="Crossfit">Crossfit</option>
								<option value="Running">Running</option>
								<option value="Gymnastics">Gymnastics</option>
								<option value="Weightlifting">Weightlifting</option>
							</select>
						</div>
						<div>
							<div>
								<h6>Modality</h6>
							</div>
							<select
								class="form-select form-select-sm"
								aria-label=".form-select-sm example"
                onChange={(e) => setModality(e.target.value)}
							>
								<option selected>Choose...</option>
								<option value="EMOM">EMOM</option>
								<option value="AMRAP">AMRAP</option>
								<option value="FORTIME">FORTIME</option>
								<option value="TABATA">TABATA</option>
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
                  onChange={(e) => setExercise(e.target.value)}
								>
									<option selected>Exercise...</option>
									<option value="400mrum">400m rum</option>
									<option value="Airsquat">Air squat</option>
									<option value="Barmuscleup">Bar muscle up</option>
									<option value="Boxjump">Box jump</option>
									<option value="Burpee">Burpee</option>
									<option value="Chinup">Chin-up</option>
									<option value="Pistol">Pistol</option>
									<option value="Ropeclimb">Rope climb</option>
									<option value="Toestobar">Toes to bar</option>
									<option value="Backsquat">Back squat</option>
									<option value="Deadlift">Deadlift</option>
									<option value="Clean">Clean</option>
									<option value="Snatch">Snatch</option>
									<option value="Press">Press</option>
									<option value="Thruster">Thruster</option>
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
            <div className="buttonContainer">
						<button className="homeButton btn btn-primary btn-sm" type="button">
							Add
						</button>
            </div>
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
            <div className="buttonContainer">
						<button className="homeButton btn btn-primary" type="submit">
							Save
						</button>
            </div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditWod;
