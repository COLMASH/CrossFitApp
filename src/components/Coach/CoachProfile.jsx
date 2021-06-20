import React, { useContext } from "react";
import GeneralUserContext from "../../contexts/generalUserContext";

function ProfileCard(props) {
  const { userCoach } = useContext(GeneralUserContext);
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
                <h4>{`${userCoach.name} ${userCoach.lastname}`}</h4>
                <p>{userCoach.email}</p>
                <p>{userCoach.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
