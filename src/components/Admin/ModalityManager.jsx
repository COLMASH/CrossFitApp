import { useSelector, useDispatch } from "react-redux";
import RegistrateNewModality from "./RegistrateNewModality";
import { deleteModality } from "../../store/selectAdminReducer";

function ModalityManager() {
  const dispatch = useDispatch();

  const { modalityToDelete } = useSelector((state) => {
    return {
      modalityToDelete: state.selectAdminReducer.modalityToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteModality(modalityToDelete));
  };

  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewModalityModal"
              className="admins-Button"
            >
              NEW MODALITY
            </button>
          </label>
          <label>
            <button type="button" class="admins-Button" onClick={handleDelete}>
              DELETE MODALITY
            </button>
          </label>
        </div>
      </div>
      <RegistrateNewModality />
    </div>
  );
}

export default ModalityManager;
