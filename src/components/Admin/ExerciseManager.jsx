import { useSelector, useDispatch } from "react-redux";
import RegistrateNewExercise from "./RegistrateNewExercise";
import { deleteExercise } from "../../store/selectAdminReducer";

function ExerciseManager() {
  const dispatch = useDispatch();

  const { exerciseToDelete } = useSelector((state) => {
    return {
      exerciseToDelete: state.selectAdminReducer.exerciseToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteExercise(exerciseToDelete));
  };

  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewExerciseModal"
              className="admins-Button"
            >
              NEW EXERCISE
            </button>
          </label>
          <label>
            <button type="button" class="admins-Button" onClick={handleDelete}>
              DELETE EXERCISE
            </button>
          </label>
        </div>
      </div>
      <RegistrateNewExercise />
    </div>
  );
}

export default ExerciseManager;
