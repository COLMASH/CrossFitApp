import React, { useContext } from "react";
import GeneralUserContext from "../../contexts/generalUserContext";

function UserInfo(props) {
  const { user } = useContext(GeneralUserContext);
  return (
    <div class="container">
      <div class="main-body">
        <div className="card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user.name} {user.lastname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">{user.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Mobile </h6>
              </div>
              <div className="col-sm-9 text-secondary">{user.phone}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Neighborhood</h6>
              </div>
              <div className="col-sm-9 text-secondary">{user.neighborhood}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
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
                <h6 className="mb-0">Id Type</h6>
              </div>
              <div className="col-sm-9 text-secondary">CC</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Id Number</h6>
              </div>
              <div className="col-sm-9 text-secondary">{user.dni}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Birthday</h6>
              </div>
              <div className="col-sm-9 text-secondary">{user.birthday}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Height</h6>
              </div>
              <div className="col-sm-9 text-secondary">{user.height}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Weight</h6>
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
