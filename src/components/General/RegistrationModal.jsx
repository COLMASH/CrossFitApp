import { userRegister } from "../../store/user/services";
import React, { useState } from "react";

function RegistrationModal() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DNIType, setDNIType] = useState("");
  const [DNINumber, setDNINumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Neighborhood, setNeighborhood] = useState("");
  const [Phone, setPhone] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = () => {
    userRegister(
      FirstName,
      LastName,
      DNIType,
      DNINumber,
      Email,
      Address,
      Neighborhood,
      Phone,
      Height,
      Weight,
      Birthday,
      Password
    ).then((resUserRegister) => {
      const { data: dataUserRegister } = resUserRegister;
      alert(`${Email} se ha registrado exitosamente!`);
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
        id="staticBackdrop"
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
              <label htmlFor="DNI-Type">
                <strong> *DNI Type: </strong>
              </label>
              <input
                id="DNI-Type"
                type="text"
                name="DNI-Type"
                className="form-control"
                onChange={(e) => setDNIType(e.target.value)}
                value={DNIType}
              />
              <label htmlFor="DNI">
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
              <label htmlFor="neighborhood">
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
              <label htmlFor="height">
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
              <label htmlFor="weight">
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
              <label htmlFor="birthday">
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
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={Email === ""}
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

export default RegistrationModal;
