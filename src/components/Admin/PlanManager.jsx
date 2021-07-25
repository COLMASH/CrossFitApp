import { useSelector, useDispatch } from "react-redux";
import RegistrateNewPlan from "./RegistrateNewPlan";
import { deletePlan } from "../../store/selectAdminReducer";

function PlanManager() {
  const dispatch = useDispatch();

  const { planToDelete } = useSelector((state) => {
    return {
      planToDelete: state.selectAdminReducer.planToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deletePlan(planToDelete));
  };

  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewPlanModal"
              className="admins-Button"
            >
              NEW PLAN
            </button>
          </label>

          <label>
            <button type="button" class="admins-Button" onClick={handleDelete}>
              DELETE PLAN
            </button>
          </label>
        </div>
      </div>
      <RegistrateNewPlan />
    </div>
  );
}

export default PlanManager;
