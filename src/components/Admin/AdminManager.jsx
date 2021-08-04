import { useSelector, useDispatch } from "react-redux";
import RegistrateNewAdmin from "./RegistrateNewAdmin";
import { deleteAdmin } from "../../store/selectAdminReducer";

function AdminManager() {
  const dispatch = useDispatch();

  const { adminToDelete } = useSelector((state) => {
    return {
      adminToDelete: state.selectAdminReducer.adminToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteAdmin(adminToDelete));
  };

  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewAdminModal"
              className="homeButton btn btn-primary btn-sm"
            >
              NEW ADMIN
            </button>
          </label>
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              onClick={handleDelete}
            >
              DELETE ADMIN
            </button>
          </label>
        </div>
      </div>
      <RegistrateNewAdmin />
    </div>
  );
}

export default AdminManager;
