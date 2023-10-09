import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, createPresets } from "./Redux/actions";
import Login from "./views/login";
import Register from "./views/register";
import ShoppingCart from "./views/shoppingCart";
import Cart from "./views/cart/cart.jsx";
import Pay from "./views/pay/pay.jsx";
import Home from "./views/home/HomeViews";
import Detail  from "./views/detail/detail";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ProfileView  from "./views/profile/profileView";
import axios from "axios";
import plantillas from "./utils/img/ulisesPresets.json";

function App() {
  const dispatch = useDispatch();
  const URL = process.env.REACT_APP_API;

  const presets = useSelector((state) => state.presets);

  useEffect(async () => {
    const storedToken = localStorage.getItem("token");

    if(storedToken){
    const headerToken = {
      headers: {
        Authorization: `${storedToken}`,
      },
    }
    const {data} = await axios.get(`${URL}/api/validate`,headerToken);
    console.log('esvalido?',data)}

    // if (storedUser) {
    //   const userData = storedUser;
    //   dispatch(logInUser(userData)); // Actualizar el estado con el usuario almacenado
    // };

    if (presets === 1) {
      const postData = async () => {
        try {
          await Promise.all(
            plantillas.map(async (plantilla) => {
              await axios.post(`${URL}/api/preset`, plantilla);
            })
          );
          dispatch(createPresets());
        } catch (error) {
          console.error("Error al enviar datos:", error);
        }
      };
      postData();

      
    }
  }, [dispatch, presets, URL]);
  // ----------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/profile" element={<ProfileView/>}/>
      </Routes>
    </div>
  );
} 

export default App;
