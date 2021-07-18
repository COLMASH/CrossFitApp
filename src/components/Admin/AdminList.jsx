import React from "react";
import { useSelector } from "react-redux";

function AdminList() {
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
