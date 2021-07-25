import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllActivities,
  assignActivityToDelete,
} from "../../store/selectAdminReducer";

function ActivityList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignActivityToDelete(id));
  };

  const { activityList } = useSelector((state) => {
    return {
      activityList: state.selectAdminReducer.activityList,
    };
  });

  const renderTableActivity = () => {
    return (
      !!activityList &&
      activityList.length > 0 &&
      activityList.map((activity) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={activity._id}
                name="activityToDelete"
                value={activity._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>{activity.activity}</td>
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
          <th>Activity</th>
        </tr>
      </thead>
      <tbody>{renderTableActivity()}</tbody>
    </table>
  );
}

export default ActivityList;
