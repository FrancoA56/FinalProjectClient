import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser, createPresets } from './Redux/actions';
import Login from "./views/login";
import Register from "./views/register";
import ShoppingCart from "./views/shoppingCart";
import Cart from "./views/cart/cart.jsx";
import Pay from "./views/pay/pay.jsx";
import Home from "./views/home/HomeViews";

import axios from "axios";
import plantillas from "./utils/img/ulisesPresets.json";

function App() {

// ----------------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const URL = "http://localhost:3001/api/preset";
  const presets = useSelector((state) => state.presets);
  useEffect(() => {
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      dispatch(logInUser(userData)); // Actualizar el estado con el usuario almacenado
    }
    
    
    
    if (presets === 1) {
      const postData = async () => {
        try {
          await Promise.all(
            plantillas.map(async (plantilla) => {
              await axios.post(URL, plantilla);
            })
          );
          dispatch(createPresets());
        } catch (error) {
          console.error("Error al enviar datos:", error);
        }
      };
      postData();
    }

     
  }, [dispatch]);
// ----------------------------------------------------------------------------------------

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
