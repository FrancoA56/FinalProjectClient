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


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login);

  useEffect(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser && !isLoggedIn) {
      // const { data } = await axios.get(
      //   `${URL}/api/user?email=${input.email}&password=${input.password}`
      // );
      const user = decodeToken(storedUser);
      dispatch(logInUser(user)); // Actualizar el estado con el usuario almacenado
      dispatch(logInSet(true));
    };

  }, [dispatch, isLoggedIn]);

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
