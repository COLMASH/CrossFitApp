import { useSelector, useDispatch } from "react-redux";
import { userWodSuscription } from "../../store/selectUserReducer";

function UserSuscriptionManager() {
  const dispatch = useDispatch();
  const { wodToSuscribe } = useSelector((state) => {
    return {
      wodToSuscribe: state.selectUserReducer.wodToSuscribe,
    };
  });

  const handleSuscribe = () => {
    dispatch(userWodSuscription(wodToSuscribe));
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
