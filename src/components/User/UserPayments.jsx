import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlans } from "../../store/selectAdminReducer";
import { assignPlanToPay } from "../../store/selectUserReducer";

function UserPayments() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlans());
  }, []);

  const { planList } = useSelector((state) => {
    return {
      planList: state.selectAdminReducer.planList,
    };
  });

  const handleSelect = (id) => {
    setIsChecked(id);
    const planToPay = planList.filter((plan) => plan._id === id);
    dispatch(assignPlanToPay(planToPay));
  };

  const renderTable = () => {
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
                name="SelectedPlan"
                value={plan._id}
                onChange={(e) => handleSelect(e.target.value)}
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
          <th>PLAN</th>
          <th>VALIDITY</th>
          <th>CREDITS</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default UserPayments;
