import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewPlan } from "../../store/selectAdminReducer";

function RegistrateNewPlan() {
  const [plan, setPlan] = useState("");
  const [validity, setValidity] = useState("");
  const [credits, setCredits] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    dispatch(createNewPlan(plan, validity, credits, price));
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
        id="NewPlanModal"
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
                Plan Registration Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="plan">
                <strong> *Plan Name: </strong>
              </label>
              <input
                autoFocus
                id="plan"
                type="text"
                name="plan"
                className="form-control"
                onChange={(e) => setPlan(e.target.value)}
                value={plan}
              />
              <label htmlFor="validity">
                <strong> *Validity: </strong>
              </label>
              <input
                id="validity"
                type="text"
                name="validity"
                className="form-control"
                onChange={(e) => setValidity(e.target.value)}
                value={validity}
              />
              <label htmlFor="credits">
                <strong> *Credits: </strong>
              </label>
              <input
                id="credits"
                type="text"
                name="credits"
                className="form-control"
                onChange={(e) => setCredits(e.target.value)}
                value={credits}
              />
              <label htmlFor="price">
                <strong> *Price: </strong>
              </label>
              <input
                id="price"
                type="number"
                name="price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
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
                disabled={plan === ""}
                disabled={validity === ""}
                disabled={credits === ""}
                disabled={price === ""}
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

export default RegistrateNewPlan;
