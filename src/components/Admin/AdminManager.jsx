import RegistrateNewAdmin from "./RegistrateNewAdmin";

function AdminManager() {
  return (
    <div>
      <div>
        <div class="btn-group" role="group">
          <label>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="admins-Button"
            >
              NEW ADMIN
            </button>
          </label>
          <label>
            <button type="button" class="admins-Button">
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
