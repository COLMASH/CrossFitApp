function UserInfo() {
  return (
    <div class="container">
      <div class="main-body">
        <div className="card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">Kenneth Valdez</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">(239) 816-9029</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Mobile</h6>
              </div>
              <div className="col-sm-9 text-secondary">(320) 380-4539</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                Bay Area, San Francisco, CA
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button className="btn btn-primary btn-sm" type="submit">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
