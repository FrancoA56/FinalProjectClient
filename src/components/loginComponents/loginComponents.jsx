import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logInUser, logInSet } from "../../Redux/actions";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import axios from "axios";
import Swal from "sweetalert2";
import decodeToken from "./decodeToken";
import { useAuth0 } from "@auth0/auth0-react";

const LoginComponents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = process.env.REACT_APP_API;
  const { loginWithPopup, user, isAuthenticated } = useAuth0();
  const [PopupForgot, setPopupForgot] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [inputForgot, setInputForgot] = useState({
    email: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleForgot(e) {
    setInputForgot({
      ...inputForgot,
      [e.target.name]: e.target.value,
    });
  }

  async function forgotPassword() {
    try {
      if (inputForgot.email) {
        const user = {
          email: inputForgot.email,
        };
        console.log(user);
        await axios.post(`${URL}/api/user/forgot`, user);
        Swal.fire({
          showConfirmButton: true,
          confirmButtonColor: "rgb(94 195 191)",
          icon: "success",
          text: "Check your email. You will receive a link to create a new password",
        });
      } else {
        setPopupForgot(true);
        return Swal.fire({
          showConfirmButton: true,
          confirmButtonColor: "rgb(94 195 191)",
          icon: "warning",
          text: "You need to enter your email address",
        });
      }
    } catch (error) {
      setPopupForgot(true);
      Swal.fire({
        showConfirmButton: true,
        confirmButtonColor: "rgb(94 195 191)",
        icon: "error",
        text: "There was an error trying to send the data, check the email entered or try again later",
      });
    }
  }
   
  useEffect(() => {
    if (isAuthenticated) {
      const auth = async () => {
        try {
          const userAuth = {
            name: user.nickname,
            email: user.email, // Se obtienen los datos del usuario
          };
          const { data } = await axios.post(`${URL}/api/user/login0`, userAuth); // Guarda al usuario en la base de datos o lo crea y obtiene el token

          localStorage.setItem("token", data); // Guarda el token en el localStorage
          const userDecoded = decodeToken(data); //Decodifica el token para obener los datos del usuario
          dispatch(logInUser(userDecoded)); // Guarda los datos del usuario en el estado global
          dispatch(logInSet(true));
          navigate("/"); // Va pal home
        } catch (error) {
          showErrorAlert(error.response.data.error);
        }
      };
      auth();
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (input.email && input.password) {
        const { data } = await axios.get(
          `${URL}/api/user?email=${input.email}&password=${input.password}`
        );
        
        localStorage.setItem("token", data);
        const user = decodeToken(data);
        
        dispatch(logInUser(user));
        dispatch(logInSet(true));
        navigate("/");
      }
    } catch (error) {
      showErrorAlert(error.response.data.error);
    }
  }

// ------------------------------------------------------------------------------------------------------
  const showErrorAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      confirmButtonColor: "rgb(94 195 191)",
      text: error,
    });
  };
// --------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------- Ojito Password Login---------
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
// --------------------------------------------------------------------------------------------------------
  
  return ( 
    <div class="grid lg:grid-cols-2 md:grid-cols-1 h-screen ">  
      {/* Columna izq */}
      <div
        //className="grid-span-2 flex justify-center items-center py-3"
        className="grid-span-2 flex justify-center items-center py-3 "
        style={
          localStorage.theme === "dark"
            ? { background: "rgb(50,50,50)" }
            : {
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
              }
        }
      >
        <div className="md:w-8/12 lg:w-8/12">
          <form onSubmit={handleSubmit}>
            {/* <!-- Email input --> */}
            <div className="mt-3">
              <input
                type="email"
                name="email"
                id="email"
                value={input.email}
                onChange={handleChange}
                required
                placeholder="Enter email"
                className={
                  localStorage.theme === "dark"
                    ? "shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#707070] text-[#909090]"
                    : "shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="mt-3 flex items-center justify-end">
              <input
                // type={showPassword ? "text" : "password"}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={input.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className={
                  localStorage.theme === "dark"
                    ? "shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#707070] text-[#909090]"
                    : "shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }
              />
              <span // Boton de ojito de contraseña
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute mr-2 text-[#909090] hover:text-[#303030]"
              >
                {showPassword ? (
                  <i class="fa-solid fa-eye" />
                ) : (
                  <i className="fa-solid fa-eye-slash" />
                )}
              </span>
            </div>
            <div className="flex justify-start mt-2 ml-3">
              <div className="text-sm text-[#606060]">
                <p
                  onClick={() => setPopupForgot(true)}
                  className="text-[#3a8a87] hover:text-logo ml-1 cursor-pointer"
                >
                  <strong> Forgot password?</strong>
                </p>
              </div>
            </div>
            <hr className="mt-2 border border-[#909090] rounded-sm" />
            <div className="grid grid-cols-2 text-[#606060] text-sm">
              <div className="cols-span-1 text-sm flex pt-2 pl-2">
                <p> Not a member? </p>
                <NavLink
                  to="/register"
                  className="text-[#3a8a87] hover:text-logo ml-1"
                >
                  <strong> Register </strong>
                </NavLink>
              </div>

              <div className="flex justify-end items-end text-sm pt-2 pr-2">
                <div className="text-[#606060] ">Back to Home</div>
                <NavLink to="/" className="flex items-center ml-2 mb-1">
                  <i className="text-[#3a8a87] hover:text-logo fa-solid fa-house"></i>
                </NavLink>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            
            <button
              type="submit"
              className={
                localStorage.theme === "dark"
                  ? "mt-10 inline-block bg-[#3a8a87] w-full rounded-md  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  : "mt-10 inline-block bg-logo w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
              }
            >
              Sign in
            </button>

            {/* <!-- Divider --> */}
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[#707070] after:mt-0.5 after:flex-1 after:border-t after:border-[#707070]">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            {/* <!-- Social login buttons --> */}
            {/*  Auth0 */}
            <a
              onClick={() => loginWithPopup()}
              class="mt-1 bg-[#505050] flex w-full items-center justify-center rounded-md px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                /> */}
              </svg>
              Sing in with...
            </a>
          </form>
        </div>
      </div>
      {/* Columna der */}
      <div
        className="grid-span-1 flex justify-center items-center"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
        }}
      >
        <div className="mb-12 md:mb-0 md:w-10/12 lg:w-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1697045487/codeCraft/grid_landscape_na3qob.png"
            alt="CodecraftedLogo_image"
          />
        </div>
      </div>

{/* --------------------------------------------------------------------------------------------------------*/}
      {/* PopUp Forgot Pasword */}

      {PopupForgot && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
          <form className="mt-1">
            <div className="isolate w-full h-2/3 bg-gray-300 dark:bg-[#303030] rounded-md px-6 sm:py-3 lg:px-3">
              
              <div className="static text-black p-2 mt-4 mb-2">
                <h2 className="text-2xl font-bold tracking-tight text-[#303030] dark:text-[#909090] sm:text-3xl  uppercase leading-normal">Forgot Password</h2>
              </div>
              
              <p className="mb-4 text-m font-medium text-[#505050] dark:text-[#707070] pb-3">
                Please enter the email you used during registration <br />
                to recover your password
              </p>

              <label className="text-m block text-left mb-2 font-semibold text-[#303030] dark:text-[#909090] px-2">
                Enter email address:
              </label>

              <input
                type="email"
                name="email"
                id="email"
                value={inputForgot.email}
                onChange={handleForgot}
                className="shadow appearance-none mt-1 mb-2 border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                placeholder="Enter your email address"
                required
                autoComplete="given-email"
              />
             
              <div>
                <button
                  type="submit"
                  onClick={() => {
                    setPopupForgot(false);
                    forgotPassword();
                  }}
                  className="w-full mt-4 bg-logo dark:bg-[#3a8a87] rounded-md px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Request Password Reset
                </button>
                 
                <p
                  onClick={() => setPopupForgot(false)}
                  className="text-[#3a8a87] cursor-pointer mt-8 mb-4"
                >
                  <strong>Back to login</strong>
                </p>

              </div>
            </div>
          </form>
        </div>
      )}  
    </div>
  );
};

export default LoginComponents;