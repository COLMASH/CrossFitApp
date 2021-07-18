import { userRegister } from "../../store/user/services";
import React, { useState } from "react";

function RegistrationModal() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = () => {
    userRegister(FirstName, LastName, Email, Address, Phone, Password).then(
      (resUserRegister) => {
        const { data: dataUserRegister } = resUserRegister;
        alert(`${Email} se ha registrado exitosamente!`);
      }
    );
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
        id="staticBackdrop"
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
                Registration Form 🏋️‍♂️
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="First-Name">
                <strong> *First Name: </strong>
              </label>
              <input
                autoFocus
                id="First-Name"
                type="text"
                name="First-Name"
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
                value={FirstName}
              />
              <label htmlFor="Last-Name">
                <strong> *Last Name: </strong>
              </label>
              <input
                id="Last-Name"
                type="text"
                name="Last-Name"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}
              />
              <label htmlFor="email">
                <strong> *email: </strong>
              </label>
              <input
                id="Email"
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
              <label htmlFor="address">
                <strong> *Address: </strong>
              </label>
              <input
                id="address"
                type="text"
                name="address"
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
                value={Address}
              />
              <label htmlFor="phone">
                <strong> *Phone: </strong>
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                value={Phone}
              />
              <label htmlFor="Password">
                <strong> *Password: </strong>
              </label>
              <input
                id="Password"
                type="password"
                name="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
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
                disabled={Email === ""}
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

export default RegistrationModal;
