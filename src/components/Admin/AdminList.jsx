import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllAdmin,
  assignAdminToDelete,
} from "../../store/selectAdminReducer";

function AdminList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdmin());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignAdminToDelete(id));
  };

  const { adminList } = useSelector((state) => {
    return {
      adminList: state.selectAdminReducer.adminList,
    };
  });

  const renderTable = () => {
    return (
      !!adminList &&
      adminList.length > 0 &&
      adminList.map((admin) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={admin._id}
                name="adminToDelete"
                value={admin._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>
              {admin.name} {admin.lastname}
            </td>
            <td>{admin.phone}</td>
            <td>{admin.email}</td>
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
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default AdminList;
