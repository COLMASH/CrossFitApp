function AdminInfo({ admin }) {
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
                                {admin.name} {admin.lastname}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">{admin.email}</div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Mobile </h6>
                            </div>
                            <div className="col-sm-9 text-secondary">{admin.phone}</div>
                        </div>             
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Birthday</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">{admin.birthday}</div>
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
            </div>
        </div>
    );
}

export default AdminInfo;
  