import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllModalities,
  assignModalityToDelete,
} from "../../store/selectAdminReducer";

function ModalityList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllModalities());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignModalityToDelete(id));
  };

  const { modalityList } = useSelector((state) => {
    return {
      modalityList: state.selectAdminReducer.modalityList,
    };
  });

  const renderTableModality = () => {
    return (
      !!modalityList &&
      modalityList.length > 0 &&
      modalityList.map((modality) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={modality._id}
                name="modalityToDelete"
                value={modality._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>{modality.modality}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Select</th>
          <th>Modality</th>
        </tr>
      </thead>
      <tbody>{renderTableModality()}</tbody>
    </table>
  );
}

export default ModalityList;
