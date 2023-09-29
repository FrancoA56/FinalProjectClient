import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const PayComponent = () => {
  // const dispatch = useDispatch();
  const models = useSelector((state) => state.cart);
  const Navigate = useNavigate();


  // useEffect(() => {
  // addModelToCart();
  //   if (!loggedIn) {
  //     Navigate("/");
  //   }
  // }, models);

  return (
    <>
      <Nav />
      <div className="bg-bgc p-4">
        pay
      </div>
      <Footer />
    </>
  );
};

export default PayComponent;
