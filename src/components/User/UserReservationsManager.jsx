function UserReservationManager() {
  return (
    <div>
      <div>
        <div className="btn-group" role="group">
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              // onClick={handleDelete}
            >
              CANCEL RESERVATION
            </button>
          </label>
          <label>
            <button
              type="button"
              className="homeButton btn btn-primary btn-sm"
              // onClick={handleDelete}
            >
              PAY RESERVATIONS
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default UserReservationManager;
