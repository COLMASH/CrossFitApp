import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllPlans,
  assignPlanToDelete,
} from "../../store/selectAdminReducer";

function PlanList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlans());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignPlanToDelete(id));
  };

  const { planList } = useSelector((state) => {
    return {
      planList: state.selectAdminReducer.planList,
    };
  });

  const renderTablePlan = () => {
    return (
      !!planList &&
      planList.length > 0 &&
      planList.map((plan) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={plan._id}
                name="planToDelete"
                value={plan._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>{plan.plan}</td>
            <td>{plan.validity}</td>
            <td>{plan.credits}</td>
            <td>{plan.price}</td>
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
          <th>PLAN NAME</th>
          <th>VALIDITY</th>
          <th>CREDITS</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>{renderTablePlan()}</tbody>
    </table>
  );
}

export default PlanList;
