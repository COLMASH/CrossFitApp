import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserProfile from "../components/User/UserProfile";
import UserPayments from "../components/User/UserPayments";
import UserNews from "../components/General/News";
import UserBar from "../components/User/UserBar";
import { getUser } from "../store/selectUserReducer";

import "../styles/MainUser.css";

function PaymentsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const { user, planToPay } = useSelector((state) => {
    return {
      user: state.selectUserReducer.user,
      planToPay: state.selectUserReducer.planToPay,
    };
  });

  const handler = window.ePayco.checkout.configure({
    key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
    test: true,
    external: false,
    autocclick: false,
    lang: "es",
  });

  function handlePayment() {
    const data = {
      tax: 0,
      tax_base: 0,
      amount: planToPay[0].price,
      name: "CrossfitApp Membership",
      description: `${planToPay[0].plan}`,
      currency: "cop",
      country: "CO",
      invoice: "1234",

      response: `${process.env.REACT_APP_BASE_URL}/PaymentsView`,
      name_billing: `${user.name} ${user.lastname}`,
      address_billing: user.address,
      type_doc_billing: user.dniType,

      mobilephone_billing: user.phone,
      methodsDisable: ["DP", "SP", "CASH"],
    };
    handler.open(data);
  }

  return (
    <div className="mainUser">
      <div className="user-blockNavInfo">
        <div>
          <UserProfile />
        </div>
        <div>
          <UserBar />
        </div>
      </div>
      <div className="user-blockInfo">
        <div className="admins-blockManager">
          <br />
          <h2>
            <strong>MEMBERSHIP PAYMENT</strong>
          </h2>
          <UserPayments />
          <div>
            <button class="epayco-button" onClick={handlePayment}>
              <strong>GO TO PAY</strong>
            </button>
          </div>
        </div>
        <div className="news-container">
          <UserNews />
        </div>
      </div>
    </div>
  );
}

export default PaymentsView;
