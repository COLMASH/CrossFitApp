import RegistrateNewAdmin from "./RegistrateNewAdmin";

function AdminManager() {
  return (
    <div>
      <div>
        <h1>Admin Manager</h1>
        <div class="btn-group" role="group">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn btn-primary btn-sm"
          >
            New Admin
          </button>
          <button type="button" class="btn btn-primary btn-sm">
            Update Admin
          </button>
          <button type="button" class="btn btn-primary btn-sm">
            Delete Admin
          </button>
        </div>
      </div>

      <RegistrateNewAdmin />
    </div>
  );
}

export default AdminManager;
