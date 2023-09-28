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
      <Nav />
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};

export default CartComponent;
