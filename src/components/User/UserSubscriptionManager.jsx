import { useSelector, useDispatch } from "react-redux";
import {
  userWodSuscription,
  clearUserToSuscribe,
} from "../../store/selectUserReducer";
import React, { useEffect } from "react";

function UserSuscriptionManager() {
  const dispatch = useDispatch();
  const { wodToSuscribe } = useSelector((state) => {
    return {
      wodToSuscribe: state.selectUserReducer.wodToSuscribe,
    };
  });

  const handleSuscribe = () => {
    dispatch(userWodSuscription(wodToSuscribe));
    // dispatch(clearUserToSuscribe());
  };

  return (
    <div>
      <div>
        <div className="btn-group" role="group">
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              onClick={handleSuscribe}
            >
              SUSCRIBE
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default UserSuscriptionManager;
