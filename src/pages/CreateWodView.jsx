import { useSelector, useDispatch } from "react-redux";
import CoachProfile from "../components/Coach/CoachProfile";
import CoachBar from "../components/Coach/CoachBar";
import CreateWod from "../components/Coach/CreateWod";
import WodList from "../components/Wod/WodList";
import UpdateWod from "../components/Wod/UpdateWod";
import { deleteWod } from "../store/selectWodReducer";

import "../styles/CreateWod.css";
import "../styles/AdminsView.css";

function CreateWodView() {
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
		<div className="mainCreateWod">
			<div className="coach-blockNavInfo">
				<div>
					<CoachProfile />
				</div>
				<div>
					<CoachBar />
				</div>
			</div>
			<div className="containerWodSche">
				<div>
					<CreateWod />
          <UpdateWod />
          <div className="deleteButton">
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
					<div className="admins-blockManager">
						<h3>Active Wods</h3>
						<WodList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateWodView;
