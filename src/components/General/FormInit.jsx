import React, { useContext } from "react";
import GeneralUserContext from "../../contexts/generalUserContext";
import { useHistory } from "react-router-dom";

function FormInit(props) {
  const { formInputs, handleSelectUser, handleChange, handleSubmit } =
    useContext(GeneralUserContext);
  const history = useHistory();

  return (
    <div>
      <div className="form-gen">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <strong> Email: </strong>
            </label>
            <input
              autoFocus
              id="email"
              type="text"
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
              value={formInputs.email}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password: </strong>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={formInputs.password}
              className="form-control"
            />
          </div>
          <div className="bttn">
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              disabled={formInputs.email === ""}
              onClick={() => {
                handleSelectUser();
                history.push("/MainUser");
              }}
            >
              Log In
            </button>
            <button className="btn btn-primary btn-sm">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormInit;
