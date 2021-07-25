import { useSelector, useDispatch } from "react-redux";
import RegistrateNewActivity from "./RegistrateNewActivity";
import { deleteActivity } from "../../store/selectAdminReducer";

function ActivityManager() {
  const dispatch = useDispatch();

  const { activityToDelete } = useSelector((state) => {
    return {
      activityToDelete: state.selectAdminReducer.activityToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteActivity(activityToDelete));
  };

  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewActivityModal"
              className="admins-Button"
            >
              NEW ACTIVITY
            </button>
          </label>
          <label>
            <button type="button" class="admins-Button" onClick={handleDelete}>
              DELETE ACTIVITY
            </button>
          </label>
        </div>
      </div>
      <RegistrateNewActivity />
    </div>
  );
}

export default ActivityManager;
