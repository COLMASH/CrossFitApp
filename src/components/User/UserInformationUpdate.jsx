import { updateUserProfileInfo } from "../../store/selectUserReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function UserInformationUpdate() {
  const dispatch = useDispatch();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DNIType, setDNIType] = useState("");
  const [DNINumber, setDNINumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Neighborhood, setNeighborhood] = useState("");
  const [Phone, setPhone] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Birthday, setBirthday] = useState("");

  const handleUpdate = () => {
    dispatch(
      updateUserProfileInfo(
        FirstName,
        LastName,
        DNIType,
        DNINumber,
        Address,
        Neighborhood,
        Phone,
        Height,
        Weight,
        Birthday
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
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div
        className="modal fade"
        id="userUpdateModal"
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
              <label htmlFor="First-Name" style={{ color: "black" }}>
                <strong> First Name: </strong>
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
              <label htmlFor="Last-Name" style={{ color: "black" }}>
                <strong> Last Name: </strong>
              </label>
              <input
                id="Last-Name"
                type="text"
                name="Last-Name"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}
              />
              <label htmlFor="DNI-Type" style={{ color: "black" }}>
                <strong> DNI Type: </strong>
              </label>
              <input
                id="DNI-Type"
                type="text"
                name="DNI-Type"
                className="form-control"
                onChange={(e) => setDNIType(e.target.value)}
                value={DNIType}
              />
              <label htmlFor="DNI" style={{ color: "black" }}>
                <strong> DNI Number: </strong>
              </label>
              <input
                id="DNI-Number"
                type="text"
                name="DNI-Number"
                className="form-control"
                onChange={(e) => setDNINumber(e.target.value)}
                value={DNINumber}
              />
              <label htmlFor="address" style={{ color: "black" }}>
                <strong> Address: </strong>
              </label>
              <input
                id="address"
                type="text"
                name="address"
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
                value={Address}
              />
              <label htmlFor="neighborhood" style={{ color: "black" }}>
                <strong> Neighborhood: </strong>
              </label>
              <input
                id="neighborhood"
                type="text"
                name="neighborhood"
                className="form-control"
                onChange={(e) => setNeighborhood(e.target.value)}
                value={Neighborhood}
              />
              <label htmlFor="phone" style={{ color: "black" }}>
                <strong> Phone: </strong>
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                value={Phone}
              />
              <label htmlFor="height" style={{ color: "black" }}>
                <strong> Height: </strong>
              </label>
              <input
                id="height"
                type="text"
                name="height"
                className="form-control"
                onChange={(e) => setHeight(e.target.value)}
                value={Height}
              />
              <label htmlFor="weight" style={{ color: "black" }}>
                <strong> Weight: </strong>
              </label>
              <input
                id="weight"
                type="text"
                name="weight"
                className="form-control"
                onChange={(e) => setWeight(e.target.value)}
                value={Weight}
              />
              <label htmlFor="birthday" style={{ color: "black" }}>
                <strong> Birthday: </strong>
              </label>
              <input
                id="Birthday"
                type="text"
                name="Birthday"
                className="form-control"
                onChange={(e) => setBirthday(e.target.value)}
                value={Birthday}
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
                  FirstName === "" &&
                  LastName === "" &&
                  DNIType === "" &&
                  DNINumber === "" &&
                  Weight === "" &&
                  Height === "" &&
                  Birthday === "" &&
                  Phone === "" &&
                  Neighborhood === "" &&
                  Address === ""
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

export default UserInformationUpdate;
