import AdminProfile from "../components/Admin/AdminProfile";
import AdminBar from "../components/Admin/AdminBar";
import ActivityManager from "../components/Admin/ActivityManager";
import ActivityList from "../components/Admin/ActivityList";
import ModalityManager from "../components/Admin/ModalityManager";
import ModalityList from "../components/Admin/ModalityList";
import ExerciseManager from "../components/Admin/ExerciseManager";
import ExerciseList from "../components/Admin/ExereciseList";
import PlanManager from "../components/Admin/PlanManager";
import PlanList from "../components/Admin/PlanList";

import "../styles/AdminsView.css";

function TrainingSetupView() {
  return (
    <div className="Admins">
      <div className="admins-blockNavInfo">
        <div>
          <AdminProfile />
        </div>
        <div>
          <AdminBar />
        </div>
      </div>
      <div className="admins-blockManager">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="homeButton btn btn-primary btn-sm"
              id="nav-training-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-training"
              type="button"
              role="tab"
              aria-controls="nav-training"
              aria-selected="true"
            >
              TRAINING
            </button>
            <button
              class="homeButton btn btn-primary btn-sm"
              id="nav-membership-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-membership"
              type="button"
              role="tab"
              aria-controls="nav-membership"
              aria-selected="false"
            >
              MEMBERSHIP
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-training"
            role="tabpanel"
            aria-labelledby="nav-training-tab"
          >
            <div>
              <br />
              <h3>BOX ACTIVITIES</h3>
              <ActivityManager />
              <br />
              <ActivityList />
              <br />
              <h3>TRAINING MODALITIES</h3>
              <ModalityManager />
              <br />
              <ModalityList />
              <br />
              <h3>EXERCISES</h3>
              <ExerciseManager />
              <br />
              <ExerciseList />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-membership"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div>
              <br />
              <h3>BOX MEMBERSHIPS</h3>
              <PlanManager />
              <br />
              <PlanList />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSetupView;
