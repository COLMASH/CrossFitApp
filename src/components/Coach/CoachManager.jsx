import { useSelector, useDispatch } from "react-redux";
import RegistrateNewCoach from "./RegistrateNewCoach";
import { deleteCoach } from "../../store/selectCoachReducer";

function CoachManager() {
  const dispatch = useDispatch();

  const { coachToDelete } = useSelector((state) => {
    return {
      coachToDelete: state.selectCoachReducer.coachToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteCoach(coachToDelete));
  };

  return (
    <div>
      <div>
        <div className="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewCoachModal"
              className="homeButton btn btn-primary btn-sm"
            >
              NEW COACH
            </button>
          </label>
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              onClick={handleDelete}
            >
              DELETE COACH
            </button>
          </label>
        </div>
      </div>
      <RegistrateNewCoach />
    </div>
  );
}

export default CoachManager;
