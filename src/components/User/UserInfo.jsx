import { useSelector } from "react-redux";
import InformationUpdate from "../General/InformationUpdate";

function UserInfo() {
  const { user } = useSelector((state) => {
    return {
      user: state.selectUserReducer.user,
    };
  });
  return (
    <div className="user-container">
      <div className="user-main-body">
        <div className="userCard card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Full Name</h2>
              </div>
              <div className="col-sm-9">
                {user.name} {user.lastname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Email</h2>
              </div>
              <div className="col-sm-9">{user.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Mobile </h2>
              </div>
              <div className="col-sm-9">{user.phone}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Neighborhood</h2>
              </div>
              <div className="col-sm-9">{user.neighborhood}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Address</h2>
              </div>
              <div className="col-sm-9">{user.address}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button

                 

                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#userUpdateModal"
                  className="homeButton btn btn-primary btn-sm"

                >
                  <strong>EDIT</strong>
                </button>
              </div>
              <InformationUpdate />
            </div>
          </div>
        </div>
      </div>
      <div className="userCard card3">
        <div className="card2-body">
          <div className="row">
            <div className="col-sm-3">
              <h2 className="mb-0">Id Type</h2>
            </div>
            <div className="col-sm-9">CC</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h2 className="mb-0">Id Number</h2>
            </div>
            <div className="col-sm-9">{user.dni}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h2 className="mb-0">Birthday</h2>
            </div>
            <div className="col-sm-9">{user.birthday}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h2 className="mb-0">Height</h2>
            </div>
            <div className="col-sm-9">{user.height}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h2 className="mb-0">Weight</h2>
            </div>
            <div className="col-sm-9">{user.weight}</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
