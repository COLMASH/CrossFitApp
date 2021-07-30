import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCoach,
  assignCoachToDelete,
} from "../../store/selectCoachReducer";

function CoachList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoach());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignCoachToDelete(id));
  };

  const { coachList } = useSelector((state) => {
    return {
      coachList: state.selectCoachReducer.coachList,
    };
  });

  const renderTable = () => {
    return (
      !!coachList &&
      coachList.length > 0 &&
      coachList.map((coach) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={coach._id}
                name="coachToDelete"
                value={coach._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>
              {coach.name} {coach.lastname}
            </td>
            <td>{coach.phone}</td>
            <td>{coach.email}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>SELECT</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>E-MAIL</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default CoachList;
