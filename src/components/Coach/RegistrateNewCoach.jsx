import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createNewCoach } from "../../store/selectCoachReducer";

function RegistrateNewCoach() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dniType, setDniType] = useState("");
  const [dni, setDniNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    dispatch(
      createNewCoach(
        name,
        lastname,
        dniType,
        dni,
        email,
        phone,
        birthday,
        password,
        active
      )
    );
    Swal.fire({
      title: "Confirmation",
      icon: "success",
      text: `Coach ${email} has successfully registered!`,
      button: "OK",
    });
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
        id="NewCoachModal"
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
                Coach Registration Form 🏋️‍♂️
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
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="Last-Name">
                <strong> *Last Name: </strong>
              </label>
              <input
                id="Last-Name"
                type="text"
                name="Last-Name"
                className="form-control"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
              <label htmlFor="DNI-Type">
                <strong> *DNI Type: </strong>
              </label>
              <input
                id="DNI-Type"
                type="text"
                name="DNI-Type"
                className="form-control"
                onChange={(e) => setDniType(e.target.value)}
                value={dniType}
              />
              <label htmlFor="DNI">
                <strong> *DNI Number: </strong>
              </label>
              <input
                id="DNI-Number"
                type="text"
                name="DNI-Number"
                className="form-control"
                onChange={(e) => setDniNumber(e.target.value)}
                value={dni}
              />
              <label htmlFor="email">
                <strong> *Email: </strong>
              </label>
              <input
                id="Email"
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                value={phone}
              />
              <label htmlFor="birthday">
                <strong> Birthday: </strong>
              </label>
              <input
                id="Birthday"
                type="text"
                name="Birthday"
                className="form-control"
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}
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
                value={password}
              />
              <label htmlFor="Active">
                <strong> *Active: </strong>
              </label>
              <input
                id="Active"
                type="Active"
                name="Active"
                className="form-control"
                onChange={(e) => setActive(e.target.value)}
                value={active}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={email === ""}
                className="btn btn-primary btn-sm"
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

export default RegistrateNewCoach;
