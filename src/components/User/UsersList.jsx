import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllUser } from "../../store/selectUserReducer";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const { userList } = useSelector((state) => {
    return {
      userList: state.selectUserReducer.userList,
    };
  });

  const renderTable = () => {
    return (
      !!userList &&
      userList.length > 0 &&
      userList.map((user) => {
        return (
          <tr>
            <td>
              {user.name} {user.lastname}
            </td>
            <td>{user.email}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Plan</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default UsersList;
