import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminProfilePicUpdate from "./AdminProfilePicUpdate";
import { getAdmin } from "../../store/selectAdminReducer";

function AdminProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmin());
  }, []);

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
                <div className="portrait">
                  <img
                    src={admin.profilePicture}
                    alt="AdminProfile"
                    className="imageProfile rounded-circle"
                    width="150"
                  />
                </div>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#AdminProfilePicUpdate"
                  className="homeButton btn btn-primary btn-sm"
                >
                  UPDATE
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
