import { updateCoachProfileInfo } from "../../store/selectCoachReducer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function CoachUpdateInformation() {
  const dispatch = useDispatch();
  const { coach } = useSelector((state) => {
    return {
      coach: state.selectCoachReducer.coach,
    };
  });
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dniType, setDNIType] = useState("");
  const [dni, setDNINumber] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateCoachProfileInfo(
        name,
        lastName,
        dniType,
        dni,
        phone,
        birthday
      )
    );
    Swal.fire({
      title: "Confirmation",
      icon: "success",
      text: `Your personal information has been updated successfully!`,
      button: "OK",
    });
  };

  return (
    <form
      onSubmit={handleUpdate}
    >
      <div
        className="modal fade"
        id="coachUpdateModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="staticBackdropLabel"
                style={{ color: "black" }}
              >
                Personal Information Update 📝
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name" style={{ color: "black" }}>
                <strong> Name: </strong>
              </label>
              <input
                autoFocus
                id="name"
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="lastName" style={{ color: "black" }}>
                <strong> Last Name: </strong>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <label htmlFor="dniType" style={{ color: "black" }}>
                <strong> DNI Type: </strong>
              </label>
              <input
                id="dniType"
                type="text"
                name="dniType"
                className="form-control"
                onChange={(e) => setDNIType(e.target.value)}
                value={dniType}
              />
              <label htmlFor="dni" style={{ color: "black" }}>
                <strong> DNI Number: </strong>
              </label>
              <input
                id="dni"
                type="text"
                name="dni"
                className="form-control"
                onChange={(e) => setDNINumber(e.target.value)}
                value={dni}
              />
              <label htmlFor="phone" style={{ color: "black" }}>
                <strong> Phone: </strong>
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                pattern="[0-9]+"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <label htmlFor="birthday" style={{ color: "black" }}>
                <strong> Birthday: </strong>
              </label>
              <input
                id="birthday"
                type="date"
                name="birthday"
                className="form-control"
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}
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
                  name === "" &&
                  lastName === "" &&
                  dniType === "" &&
                  dni === "" &&
                  birthday === "" &&
                  phone === ""
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

export default CoachUpdateInformation;
