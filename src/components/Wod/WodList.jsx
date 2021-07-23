import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignWodToDelete } from "../../store/selectWodReducer";
import { getWod, getAllWod } from "../../store/selectWodReducer";

function WodList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignWodToDelete(id));
  };

  const { wod } = useSelector((state) => {
    return {
      wod: state.selectWodReducer.wod,
    };
  });

  useEffect(() => {
    dispatch(getWod());
    dispatch(getAllWod());
  }, []);

  const renderWodsTable = () => {
    return (
      !!wod &&
      wod.length > 0 &&
      wod.map((wod) => (
        <tr key={wod._id}>
          <th>
            <input
              type="radio"
              id={wod._id}
              name="wodToDelete"
              value={wod._id}
              onChange={(e) => handleDelete(e.target.value)}
            />
          </th>
          <td>{wod.activity}</td>
          <td>{wod.modality}</td>
          <td>{wod.exercices}</td>
          <td>{wod.repetitions}</td>
          <td>{wod.date}</td>
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
          <th>Activity</th>
          <th>Modality</th>
          <th>Exercices</th>
          <th>Repetitions</th>
          <th>Date</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>{renderWodsTable()}</tbody>
    </table>
  );
}

export default WodList;
