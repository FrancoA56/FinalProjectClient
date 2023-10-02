import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import ShoppingCart from "./views/shoppingCart";
import Cart from "./views/cart/cart.jsx";
import Pay from "./views/pay/pay.jsx";
import Home from "./views/home/HomeViews";


import { useEffect } from "react";
import axios from "axios";
import plantillas from "./utils/img/ulisesPresets.json";

function App() {
  const URL = "http://localhost:3001/api/preset";
  useEffect(() => {
  const postData = async () => {
    await Promise.all(
      plantillas.map(async (plantilla) => {
        await axios.post(URL, plantilla);
      })
    );
  };

  postData();
}, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
