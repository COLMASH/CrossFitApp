import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllExercises,
  assignExerciseToDelete,
} from "../../store/selectAdminReducer";

function ExerciseList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExercises());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignExerciseToDelete(id));
  };

  const { exerciseList } = useSelector((state) => {
    return {
      exerciseList: state.selectAdminReducer.exerciseList,
    };
  });

  const renderTableExercise = () => {
    return (
      !!exerciseList &&
      exerciseList.length > 0 &&
      exerciseList.map((exercise) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={exercise._id}
                name="exerciseToDelete"
                value={exercise._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>{exercise.exercise}</td>
            <td>{exercise.unitMeasurement}</td>
            <td>{exercise.video}</td>
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
          <th>MEASURMENT</th>
          <th>VIDEO</th>
        </tr>
      </thead>
      <tbody>{renderTableExercise()}</tbody>
    </table>
  );
}

export default ExerciseList;
