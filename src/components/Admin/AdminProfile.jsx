import { useSelector } from "react-redux";

function AdminProfile() {
  const { admin } = useSelector(({ selectAdminReducer }) => {
    return {
      admin: selectAdminReducer.admin,
    };
  });
  return (
    <div class="container">
      <div class="main-body">
        <div className="card1">
          <div className="card1-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                className="rounded-circle"
                width="150"
              />
              <div className="mt-3">
                <h1 style={{ fontSize: 25 }}>
                  {admin.name} {admin.lastname}
                </h1>
                <p>Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
