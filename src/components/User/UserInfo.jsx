import { useSelector } from "react-redux";

function UserInfo() {
  const { user } = useSelector(({ selectUserReducer }) => {
    return {
      user: selectUserReducer.user,
    };
  });
  return (
    <div class="container">
      <div class="main-body">
        <div className="card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Full Name</h2>
              </div>
              <div className="col-sm-9 text-secondary">
                {user.name} {user.lastname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Email</h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Mobile </h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.phone}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Neighborhood</h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.neighborhood}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Address</h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.address}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button className="btn btn-primary btn-sm" type="submit">
                  <strong>EDIT</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Id Type</h2>
              </div>
              <div className="col-sm-9 text-secondary">CC</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Id Number</h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.dni}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Birthday</h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.birthday}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Height</h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.height}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Weight</h2>
              </div>
              <div className="col-sm-9 text-secondary">{user.weight}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
