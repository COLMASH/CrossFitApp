import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser, assignUserToFind } from "../../store/selectUserReducer";

function UsersList() {
  const dispatch = useDispatch();
  const [checkedValue, setCheckedValue] = useState("");
  
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  
  const { userList } = useSelector((state) => {
    return {
      userList: state.selectUserReducer.userList,
    };
  });

  const handleSelect = (userId) => {
    setCheckedValue(userId)
    dispatch(assignUserToFind(userId))

  }
  
  const renderTable = () => {
    return (
      !!userList &&
      userList.length > 0 &&
      userList.map((user) => {
        return (
          <tr>
            <th>
              <input 
                type="radio" 
                id={user._id} 
                name="userSelected" 
                value={user._id} 
                onChange={ (e) => handleSelect(e.target.value) } 
              />
            </th>
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
          <th>Select</th>
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
