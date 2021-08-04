import { useSelector, useDispatch } from "react-redux";
import SeeUserProfile from "./SeeUserProfile";
import { findUserToShow } from "../../store/selectUserReducer";

function SeeUserManager() {
  const dispatch = useDispatch();

  const { userToFind } = useSelector((state) => {
    return {
      userToFind: state.selectUserReducer.userToFind,
    };
  });

  const findUser = () => {
    dispatch(findUserToShow(userToFind));
  };

  return (
    <div>
      <div>
        <div className="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#SeeUserProfileModal"
              className="homeButton btn btn-primary btn-sm"
              onClick={findUser}
            >
              SEE USER
            </button>
          </label>
        </div>
      </div>
      <SeeUserProfile />
    </div>
  );
}

export default SeeUserManager;
