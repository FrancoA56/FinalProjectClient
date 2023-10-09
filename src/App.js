import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logInSet } from "./Redux/actions";
import Login from "./views/login";
import Register from "./views/register";
import ShoppingCart from "./views/shoppingCart";
import Cart from "./views/cart/cart.jsx";
import Pay from "./views/pay/pay.jsx";
import Home from "./views/home/HomeViews";
import Detail  from "./views/detail/detail";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ProfileView  from "./views/profile/profileView";
import decodeToken from "./components/loginComponents/decodeToken";
import axios from "axios";


function App() {
  const URL = process.env.REACT_APP_API;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !isLoggedIn) {
      const login = async () => {
        try {
          const headerToken = {
            headers: {
              Authorization: `${storedToken}`,
            },
          };
          console.log("headerToken", headerToken);
          const { data } = await axios.get(`${URL}/api/user/validate`, headerToken);
          console.log("data", data);
          if (data) {
            const user = decodeToken(storedToken);
            dispatch(logInUser(user)); // Actualizar el estado con el usuario almacenado
            dispatch(logInSet(true));
          }
        } catch (error) {
          localStorage.removeItem("token")
          console.error("Error al validar el token:", error.message);
        }
      };
      login();
    }

  }, [dispatch, isLoggedIn, URL]);

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
