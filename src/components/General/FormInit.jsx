import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RegModal from "./RegistrationModal";
import logo from "../../assets/images/logo.png";
import { accessAdmin } from "../../store/selectAdminReducer";
import { accessCoach } from "../../store/selectCoachReducer";
import { accessUser } from "../../store/selectUserReducer";

function FormInit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkedValue, setIsChecked] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (checkedValue === "admin") {
      dispatch(accessAdmin(email, password, history));
    } else if (checkedValue === "coach") {
      dispatch(accessCoach(email, password, history));
    } else {
      dispatch(accessUser(email, password, history));
    }
  };

  return (
    <div>
      <div className="form-gen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <div className="app-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="form-group">
            <div
              className="formItem
          "
            >
              <label htmlFor="email">
                <strong> Email: </strong>
              </label>
              <input
                autoFocus
                id="email"
                type="text"
                name="email"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
              />
            </div>
            <div
              className="formItem
          "
            >
              <label htmlFor="password">
                <strong>Password: </strong>
              </label>
              <input
                id="password"
                type="password"
                disabled={email === ""}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
              />
              <div className="form-check">
                <div className="radioItem">
                  <input
                    type="radio"
                    id="user"
                    name="userType"
                    value="user"
                    checked={checkedValue === "user"}
                    onChange={(e) => setIsChecked(e.target.value)}
                  />
                  <label htmlFor="user"> User</label>
                </div>
                <div className="radioItem">
                  <input
                    type="radio"
                    id="coach"
                    name="userType"
                    value="coach"
                    checked={checkedValue === "coach"}
                    onChange={(e) => setIsChecked(e.target.value)}
                  />
                  <label htmlFor="coach"> Coach</label>
                </div>
                <div className="radioItem">
                  <input
                    type="radio"
                    id="admin"
                    name="userType"
                    value="admin"
                    checked={checkedValue === "admin"}
                    onChange={(e) => setIsChecked(e.target.value)}
                  />
                  <label htmlFor="admin"> Admin</label>
                </div>
              </div>
            </div>
          </div>

          <div className="homeButton-container bttn">
            <button
              className="homeButton btn btn-primary btn-sm"
              type="submit"
              disabled={password === ""}
            >
              Sign In
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="homeButton btn btn-primary btn-sm"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <RegModal />
    </div>
  );
}

export default FormInit;
