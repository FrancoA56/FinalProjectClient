import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import style from "./shoppingCart.module.css";
// import { addModelToCart, removeModelToCart } from "../../Redux/actions";
import Nav from "../Nav/Nav";

const CartComponent = () => {
  // const dispatch = useDispatch();
  // const models = useSelector((state) => state.cart);

  // useEffect(() => {
  // addModelToCart();
  //   if (!loggedIn) {
  //     Navigate("/");
  //   }
  // }, models);

  return (
    <div>
      <Nav/>
      {/* <p>{models}</p> */}
    </div>
  );
};

export default CartComponent;
