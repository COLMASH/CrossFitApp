import { userBox } from "../../data";
import { admin } from "../../data";
import { coach } from "../../data";
import { useHistory } from "react-router-dom";
import { saveUser } from "../../store/selectUserReducer";
import { saveCoach } from "../../store/selectCoachReducer";
import { selectAdmin } from "../../store/selectAdminReducer";
import { selectCoach } from "../../store/selectCoachReducer";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { userSignIn, getUserInfo } from "../../store/user/services";
import { coachSignIn, getCoachInfo } from "../../store/coach/services";


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
    }
    if (checkedValue === "coach") {
      coachSignIn(email, password).then((resCoachSignIn) => {
        const { data: dataCoachSignIn } = resCoachSignIn;
        if (dataCoachSignIn.token) {
          localStorage.setItem("token", dataCoachSignIn.token);
          getCoachInfo(dataCoachSignIn.token).then((resGetCoachInfo) => {
            const { data: dataGetCoachInfo } = resGetCoachInfo;
            console.dir(resGetCoachInfo)
            dispatch(saveCoach(dataGetCoachInfo));
            history.push("/MainCoach");
          });
        }
      });
    }
    if (userBox.filter((user) => user.email === email).length > 0) {
    } else if (admin.filter((admin) => admin.email === email).length > 0) {
      dispatch(selectAdmin(email));
      return history.push("/MainAdmin");
    } else if (coach.filter((coach) => coach.email === email).length > 0) {
      dispatch(selectCoach(email));
      return history.push("/MainCoach");
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
          </div>
          <div>
            <input
              type="radio"
              id="user"
              name="userType"
              value="user"
              checked={checkedValue === "user"}
              onChange={(e) => setIsChecked(e.target.value)}
            />
            <label htmlFor="user">User</label>

            <input
              type="radio"
              id="coach"
              name="userType"
              value="coach"
              checked={checkedValue === "coach"}
              onChange={(e) => setIsChecked(e.target.value)}
            />
            <label htmlFor="coach">Coach</label>

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

          <div className="bttn">
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              disabled={email === ""}
            >
              Sign In
            </button>
            <button className="btn btn-primary btn-sm">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormInit;
