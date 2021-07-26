import { useSelector, useDispatch } from "react-redux";

import CreateNewWod from "./CreateNewWod";
import UpdateWod from "./UpdateWod";
import { deleteWod } from "../../store/selectWodReducer";

function WodManager() {
  const dispatch = useDispatch();

  const { wodToDelete } = useSelector((state) => {
    return {
      wodToDelete: state.selectWodReducer.wodToDelete,
    };
  });

  const handleDelete = () => {
    dispatch(deleteWod(wodToDelete));
  };

  return (
    <div>
      <div>
        <div className="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#NewWodModal"
              className="homeButton btn btn-primary btn-sm"
            >
              NEW WOD
            </button>
          </label>
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              onClick={handleDelete}
            >
              DELETE WOD
            </button>
          </label>
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#UpdateWodModal"
              className="homeButton btn btn-primary btn-sm"
            >
              EDIT WOD
            </button>
          </label>
        </div>
      </div>
      <CreateNewWod />
      <UpdateWod />
    </div>
  );
}

export default WodManager;
