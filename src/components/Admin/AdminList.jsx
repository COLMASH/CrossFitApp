import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdmin } from "../../store/selectAdminReducer";

function AdminList() {
  const { adminList } = useSelector((state) => {
    return {
      adminList: state.selectAdminReducer.adminList,
    };
  });

  // dispatch = useDispatch();
  // const { adminList } = useSelector((state) => {
  //   return {
  //     adminList: state.selectAdminReducer.adminList,
  //   };
  // });

  // useEffect(() => {
  //   dispatch(getAllAdmin());
  // }, [])

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
