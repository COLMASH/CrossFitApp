import { useSelector } from "react-redux";
import AdminProfilePicUpdate from "./AdminProfilePicUpdate";

function AdminProfile() {
  const { admin } = useSelector((state) => {
    return {
      admin: state.selectAdminReducer.admin,
    };
  });

  return (
    <div class="admin-container">
      <div class="admin-main-body">
        <div className="card1">
          <div className="card1-body">
            <div className="card1-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={admin.profilePicture}
                  alt="AdminProfile"
                  className="rounded-circle"
                  width="150"
                />
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#AdminProfilePicUpdate"
                  className="homeButton btn btn-primary btn-sm"
                >
                  Update
                </button>
                <div className="mt-3">
                  <h1 style={{ fontSize: 25 }}>
                    {admin.name} {admin.lastname}
                  </h1>
                  <p>Administrator</p>
                </div>
              </div>
              <AdminProfilePicUpdate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
