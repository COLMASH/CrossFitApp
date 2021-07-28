import { useSelector, useDispatch } from "react-redux";
import { userWodUnsuscription } from "../../store/selectUserReducer";

function UserReservationManager() {
  const dispatch = useDispatch();
  const { wodToUnsuscribe } = useSelector((state) => {
    return {
      wodToUnsuscribe: state.selectUserReducer.wodToUnsuscribe,
    };
  });

  const handleUnsuscribe = () => {
    dispatch(userWodUnsuscription(wodToUnsuscribe));
  };
  return (
    <div>
      <div>
        <div className="btn-group" role="group">
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              onClick={handleUnsuscribe}
            >
              CANCEL RESERVATION
            </button>
          </label>
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              // onClick={handlePayment}
            >
              PAY RESERVATIONS
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default UserReservationManager;
