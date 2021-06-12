function ProfileCard() {
  return (
    <div class="container">
      <div class="main-body">
        <div className="card1">
          <div className="card1-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                className="rounded-circle"
                width="150"
              />
              <div className="mt-3">
                <h4>John Doe</h4>
                <p className="text-secondary mb-1">Full Stack Developer</p>
                <p className="text-muted font-size-sm">
                  Bay Area, San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
