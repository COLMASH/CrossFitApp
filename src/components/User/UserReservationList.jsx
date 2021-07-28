import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignWodToSuscribe } from "../../store/selectUserReducer";
import { getUserWod } from "../../store/selectUserReducer";

function UserReservationList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  // const handleSelect = (id) => {
  //   setIsChecked(id);
  //   dispatch(assignWodToSuscribe(id));
  // };

  const { userWods } = useSelector((state) => {
    return {
      userWods: state.selectUserReducer.userWods,
    };
  });

  const { user } = useSelector((state) => {
    return {
      user: state.selectUserReducer.user,
    };
  });

  useEffect(() => {
    dispatch(getUserWod());
  }, []);

  // console.log(userWods); ///////////////////////////////////////////////
  console.log(user); ///////////////////////////////////////////////

  const renderUserWodsTable = () => {
    return (
      !!userWods.wods &&
      userWods.wods.length > 0 &&
      userWods.wods.map((wod) => (
        <tr key={wod._id}>
          <th>
            <input
              type="radio"
              id={wod._id}
              name="wodToSelect"
              value={wod._id}
              // onChange={(e) => handleSelect(e.target.value)}
            />
          </th>
          <td>
            <img
              src={wod.creator.profilePicture}
              alt="CoachProfile"
              className="rounded-circle"
              width="100"
            />
          </td>
          <td>
            {wod.creator.name} {wod.creator.lastname}
          </td>
          <td>{wod.activity}</td>
          <td>{wod.modality}</td>
          <td>
            {wod.exercice1}({wod.repetition1})
            {!!wod.exercice2 && ` - ${wod.exercice2}`}
            {!!wod.repetition2 && `(${wod.repetition2})`}
            {!!wod.exercice3 && ` - ${wod.exercice3}`}
            {!!wod.repetition3 && `(${wod.repetition3})`}
          </td>
          <td>{wod.capacity}</td>
          <td>{new Date(wod.startDate).toUTCString()}</td>
          <td>{new Date(wod.endDate).toUTCString()}</td>
          <td>{wod.notes}</td>
        </tr>
      ))
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Select</th>
          <th>CoachPic</th>
          <th>Coach</th>
          <th>Activity</th>
          <th>Modality</th>
          <th>Exercices (Reps)</th>
          <th>Capacity</th>
          <th>Start</th>
          <th>Finish</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>{renderUserWodsTable()}</tbody>
    </table>
  );
}

export default UserReservationList;
