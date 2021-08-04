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
              className="homeButton btn btn-primary btn-sm"
            >
              NEW EXERCISE
            </button>
          </label>
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              onClick={handleDelete}
            >
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
