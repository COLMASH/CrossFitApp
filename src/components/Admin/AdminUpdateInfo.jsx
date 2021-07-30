import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminProfileInfo } from "../../store/selectAdminReducer";

function AdminUpdateInformation() {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => {
    return {
      admin: state.selectAdminReducer.admin,
    };
  });

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dniType, setDniType] = useState("");
  const [dni, setDniNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateAdminProfileInfo(name, lastname, dniType, dni, phone, birthday)
    );
  };

  return (
    <form onSubmit={handleUpdate}>
      <div
        className="modal fade"
        id="AdminUpdateInfo"
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
                <strong> First Name: </strong>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder={admin.name}
              />
              <label htmlFor="lastname" style={{ color: "black" }}>
                <strong> Last Name: </strong>
              </label>
              <input
                placeholder={admin.lastname}
                id="lastname"
                type="text"
                name="lastname"
                className="form-control"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
              <label htmlFor="DNI-Type" style={{ color: "black" }}>
                <strong> DNI Type: </strong>
              </label>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setDniType(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="PP">PP</option>
                <option value="TI">TI</option>
              </select>
              <label htmlFor="DNI" style={{ color: "black" }}>
                <strong> DNI Number: </strong>
              </label>
              <input
                placeholder={admin.dni}
                id="DNI-Number"
                type="text"
                name="DNI-Number"
                className="form-control"
                onChange={(e) => setDniNumber(e.target.value)}
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
                id="Birthday"
                type="date"
                name="Birthday"
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
                  lastname === "" &&
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

export default AdminUpdateInformation;
