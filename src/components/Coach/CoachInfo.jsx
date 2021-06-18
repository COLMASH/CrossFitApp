function CoachInfo({ coach }) {
	return (
		<div class="container">
			<div class="main-body">
				<div className="card2">
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
							<div className="col-sm-9 text-secondary">{coach.dni}</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<h6 className="mb-0">Full Name</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								{coach.name} {coach.lastname}
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<h6 className="mb-0">Birthday</h6>
							</div>
							<div className="col-sm-9 text-secondary">{coach.birthday}</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<h6 className="mb-0">Email</h6>
							</div>
							<div className="col-sm-9 text-secondary">{coach.email}</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-sm-3">
								<h6 className="mb-0">Mobile </h6>
							</div>
							<div className="col-sm-9 text-secondary">{coach.phone}</div>
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

export default CoachInfo;
