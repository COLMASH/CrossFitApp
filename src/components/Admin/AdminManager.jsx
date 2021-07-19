import Swal from "sweetalert2";
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
    Swal.fire({
      title: "Confirmation",
      icon: "success",
      text: `Admin has successfully deleted!`,
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
              data-bs-target="#NewAdminModal"
              className="admins-Button"
            >
              NEW ADMIN
            </button>
          </label>
          <label>
            <button type="button" class="admins-Button" onClick={handleDelete}>
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
