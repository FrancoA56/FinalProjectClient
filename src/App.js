import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logInSet, createPresets } from "./Redux/actions";
import Login from "./views/login";
import Register from "./views/register";
import ShoppingCart from "./views/shoppingCart";
import Cart from "./views/cart/cart.jsx";
import Pay from "./views/pay/pay.jsx";
import Home from "./views/home/HomeViews";
import Detail from "./views/detail/detail";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ProfileView from "./views/profile/profileView";
import decodeToken from "./components/loginComponents/decodeToken";
import AboutPage from "./views/aboutPage/aboutPage";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import plantillas from "./utils/img/ulisesPresets.json";
import jwt from "jwt-decode";
import Purchases from "./components/Purchases/purchases";
import PreviewPresets from "./views/previewPresets/previewPresets";

function App() {
  const URL = process.env.REACT_APP_API;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login);
  const { logout } = useAuth0();

  const presets = useSelector((state) => state.presets);

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

          await axios.get(`${URL}/api/user/validate`, headerToken); // Verifica que el token no haya expirado

          const user = decodeToken(storedToken); // Decodifica el token y se obtienen los datos del usuario ya logueado
          dispatch(logInUser(user)); // Actualiza el estado global con el usuario logueado
          dispatch(logInSet(true));
        } catch (error) {
          localStorage.removeItem("token");
          await logout();
        }
      };
      login();
    }

    /*     if (presets === 1) {
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
    } */
  }, [dispatch, isLoggedIn, URL]);

  return (
    <div className="App">
      <Routes>
        <Route className="dark" path="/login" element={<Login />} />
        <Route className="dark" path="/register" element={<Register />} />
        <Route className="dark" path="/reset-password/:token" element={<ResetPassword />} />
        <Route className="dark" path="/shop" element={<ShoppingCart />} />
        <Route className="dark" path="/" element={<Home />} />
        <Route className="dark" path="/cart" element={<Cart />} />
        <Route className="dark" path="/pay" element={<Pay />} />
        <Route className="dark" path="/detail/:id" element={<Detail />} />
        <Route className="dark" path="/profile" element={<ProfileView />} />
        <Route className="dark" path="/about" element={<AboutPage />} />
        <Route className="dark" path="/purchases" element={<Purchases />} />
        <Route className="dark" path="/preview/:name" element={<PreviewPresets />} />
      </Routes>
    </div>
  );
}

export default App;
