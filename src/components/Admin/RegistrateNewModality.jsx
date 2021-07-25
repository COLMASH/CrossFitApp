import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewModality } from "../../store/selectAdminReducer";

function RegistrateNewModality() {
  const [modality, setModality] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    dispatch(createNewModality(modality));
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
        id="NewModalityModal"
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
                Training Modality Registration Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="modality">
                <strong> *Modality Name: </strong>
              </label>
              <input
                autoFocus
                id="modality"
                type="text"
                name="modality"
                className="form-control"
                onChange={(e) => setModality(e.target.value)}
                value={modality}
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
                disabled={modality === ""}
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

export default RegistrateNewModality;
