import Swal from "sweetalert2";
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
    Swal.fire({
      title: "Confirmation",
      icon: "success",
      text: `Coach has successfully deleted!`,
      button: "OK",
    });
  };

  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewCoachModal"
              className="admins-Button"
            >
              NEW COACH
            </button>
          </label>
          <label>
            <button type="button" class="admins-Button" onClick={handleDelete}>
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
