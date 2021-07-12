import RegistrateNewAdmin from "./RegistrateNewAdmin";

function AdminManager() {
  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <h1>Admin Manager</h1>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          className="btn btn-primary btn-sm"
        >
          New Admin
        </button>
        <button type="button" class="btn btn-primary">
          Update Admin
        </button>
        <button type="button" class="btn btn-primary">
          Delete Admin
        </button>
      </div>
      <RegistrateNewAdmin />
    </div>
  );
}

export default AdminManager;
