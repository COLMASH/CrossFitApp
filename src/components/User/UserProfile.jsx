import { useSelector } from "react-redux";

function ProfileCard() {
  const { user } = useSelector(({ selectUserReducer }) => {
    return {
      user: selectUserReducer.userLoad,
    };
  });
  return (
    <div className="container">
      <div className="main-body">
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
                <h1 style={{ fontSize: 25 }}>
                  {user.name} {user.lastname}
                </h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
