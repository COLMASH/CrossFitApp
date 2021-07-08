import { useHistory } from "react-router-dom";
import { saveUser } from "../../store/selectUserReducer";
import { saveAdmin } from "../../store/selectAdminReducer";
import { saveCoach } from "../../store/selectCoachReducer";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { userSignIn, getUserInfo } from "../../store/user/services";
import { adminSignIn, getAdminInfo } from "../../store/admin/services";
import { coachSignIn, getCoachInfo } from "../../store/coach/services";
import RegModal from "./RegistrationModal";
import logo from "../../assets/images/logo.png";

function FormInit() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const [checkedValue, setIsChecked] = useState("");

  const handleSignIn = () => {
    if (checkedValue === "user") {
      userSignIn(email, password).then((resUserSignIn) => {
        const { data: dataUserSignIn } = resUserSignIn;
        if (dataUserSignIn.token) {
          localStorage.setItem("token", dataUserSignIn.token);
          getUserInfo(dataUserSignIn.token).then((resGetUserInfo) => {
            const { data: dataGetUserInfo } = resGetUserInfo;
            dispatch(saveUser(dataGetUserInfo));
            history.push("/MainUser");
          });
        }
      });
    } else if (checkedValue === "admin") {
      adminSignIn(email, password).then((resAdminSignIn) => {
        const { data: dataAdminSignIn } = resAdminSignIn;
        if (dataAdminSignIn.token) {
          localStorage.setItem("token", dataAdminSignIn.token);
          getAdminInfo(dataAdminSignIn.token).then((resGetAdminInfo) => {
            const { data: dataGetAdminInfo } = resGetAdminInfo;
            dispatch(saveAdmin(dataGetAdminInfo));
            history.push("/MainAdmin");
          });
        }
      });
    } else {
      coachSignIn(email, password).then((resCoachSignIn) => {
        const { data: dataCoachSignIn } = resCoachSignIn;
        if (dataCoachSignIn.token) {
          localStorage.setItem("token", dataCoachSignIn.token);
          getCoachInfo(dataCoachSignIn.token).then((resGetCoachInfo) => {
            const { data: dataGetCoachInfo } = resGetCoachInfo;
            console.dir(resGetCoachInfo);
            dispatch(saveCoach(dataGetCoachInfo));
            history.push("/MainCoach");
          });
        }
      });
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
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password: </strong>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
            />
            <div className="form-check">
              <input
                type="radio"
                id="user"
                name="userType"
                value="user"
                checked={checkedValue === "user"}
                onChange={(e) => setIsChecked(e.target.value)}
              />
              <label htmlFor="user">User</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="coach"
                name="userType"
                value="coach"
                checked={checkedValue === "coach"}
                onChange={(e) => setIsChecked(e.target.value)}
              />
              <label htmlFor="coach">Coach</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="admin"
                name="userType"
                value="admin"
                checked={checkedValue === "admin"}
                onChange={(e) => setIsChecked(e.target.value)}
              />
              <label htmlFor="admin">Admin</label>
            </div>
          </div>

          <div className="bttn">
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              disabled={email === ""}
            >
              Sign In
            </button>

            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="btn btn-primary btn-sm"
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
