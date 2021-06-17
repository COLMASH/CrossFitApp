function UserWod({ wod }) {
    return (
      <div class="container">
        <div class="main-body">
          <div className="card2">
            <div className="card2-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Program</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {wod.program}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Date</h6>
                </div>
                <div className="col-sm-9 text-secondary">{wod.date}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Schedule </h6>
                </div>
                <div className="col-sm-9 text-secondary">{wod.schedule}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Coach ID</h6>
                </div>
                <div className="col-sm-9 text-secondary">{wod.coachID}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Status</h6>
                </div>
                <div className="col-sm-9 text-secondary">{wod.statusWod}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <button className="btn btn-primary btn-sm" type="submit">
                    <strong>RESERVE</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserWod;
