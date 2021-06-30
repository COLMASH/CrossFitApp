import { userBox } from "../../data";
import { admin } from "../../data";
import { coach } from "../../data";
import { useHistory } from "react-router-dom";
import { selectUser, saveUser } from "../../store/selectUserReducer";
import { selectAdmin } from "../../store/selectAdminReducer";
import { selectCoach } from "../../store/selectCoachReducer";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { userSignIn, getUserInfo } from "../../store/user/services";
import jwtDecode from "jwt-decode";

function FormInit() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignIn = () => {
    userSignIn(email, password).then((resUserSignIn) => {
      const { data: dataUserSignIn } = resUserSignIn;
      if (dataUserSignIn.token) {
        const tokenDecoded = jwtDecode(dataUserSignIn.token);
        console.log(tokenDecoded);
        getUserInfo(tokenDecoded.userId).then((resGetUserInfo) => {
          const { data: dataGetUserInfo } = resGetUserInfo;
          dispatch(saveUser(dataGetUserInfo));
          history.push("/MainUser");
          console.log(dataGetUserInfo);
        });
      }
    });

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
          <div className="bttn">
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              disabled={email === ""}
              onClick={handleSignIn}
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
