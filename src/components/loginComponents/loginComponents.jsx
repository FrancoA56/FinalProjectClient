import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logInSet } from "../../Redux/actions";
import { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "../loginComponents/login.module.css";
import decodeToken from "./decodeToken";
import { useAuth0 } from "@auth0/auth0-react";
import ForgotPassword from "../ForgotPassword/ForgotPassword"
import Banner from "../../components/Banner/Banner";
import { validation } from "../validation";

/* Requirements to validate the login
-----------------------------------------------------------------
 Para las validaciones del login comprobar que el mail existe y 
comparar la contraseña ingresada con la cargada por el usuario */

const LoginComponents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = process.env.REACT_APP_API;
  const { loginWithPopup, user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [errors, setErrors] = useState({});
  const [PopupForgot, setPopupForgot] = useState (false)
  const [PopupReset, setPopupReset] = useState (false)
  const [password, setPassword] = useState("");
  const [validations, setValidations] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isBetween8And30: false,
  });

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  
  const [inputForgot, setInputForgot] = useState({
    email: "",
  });
  
  const [inputReset, setInputReset] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

  function handleReset(e) {
    setInputReset({
      ...inputReset,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...inputReset,
        [e.target.name]: e.target.value,
      })
    );
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
          showErrorAlert(error.message);
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
        console.log("data", data);
        localStorage.setItem("token", data);
        const user = decodeToken(data);
        console.log("user", user);
        dispatch(logInUser(user));
        dispatch(logInSet(true));
        navigate("/");
      }
    } catch (error) {
      showErrorAlert(error.message);
    }
  }

// -----------------------------------------------------------------------------------------------------
  const showErrorAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      confirmButtonColor: "rgb(94 195 191)",
      text: error,
    });
  };
// ------------------------------------------------------------------------------------------------------
// --------------------------------------Password validity requirements----------------------------------
  const validatePassword = (e) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[\W_]/;

    setValidations({
      hasUppercase: uppercaseRegex.test(e),
      hasLowercase: lowercaseRegex.test(e),
      hasNumber: numberRegex.test(e),
      hasSpecialChar: specialCharRegex.test(e),
      isBetween8And30: e.length >= 8 && e.length <= 30,
    });
    setPassword(e);
  };
// --------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------- Ojito Password Login---------
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
// --------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------- Ojito Password Reset---------
const [showPasswordReset, setShowPasswordReset] = useState(false);
const togglePasswordVisibilityReset = () => {
  setShowPasswordReset(!showPasswordReset);
};
// --------------------------------------------------------------------------------------------------------

    return (
    <div class="grid lg:grid-cols-2 md:grid-cols-1 h-screen ">
      {/* Columna izq */}
      <div
        // className="grid-span-2 flex justify-center items-center py-3"
        className="grid-span-2 flex justify-center items-center py-3 bg-gray-300 dark:bg-gray-700"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
        }}
       
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span // Boton de ojito de contraseña
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute mr-2 text-[#909090] hover:text-[#303030]"
              >
                {showPassword ? (
                  <i class= "fa-solid fa-eye"/>
                ) : (
                  <i className="fa-solid fa-eye-slash" />
                )}
              </span>
            </div>
            <div className="flex justify-start mt-2 ml-3">
              <div className="text-sm text-[#606060]">
                
                <p onClick={() => setPopupForgot(true)} 
                   className="text-[#3a8a87] ml-1 cursor-pointer">
                      <strong> Forgot password?</strong>  
                </p>

              </div>
            </div>
            <hr className="mt-2 border border-[#909090] rounded-sm" />
            <div className="grid grid-cols-2 text-[#606060] text-sm">
              <div className="cols-span-1 text-sm flex pt-2 pl-2">
                <p> Not a member? </p>
                <NavLink to="/register" className="text-[#3a8a87] ml-1">
                  <strong> Register </strong>
                </NavLink>
              </div>

              <div className="flex justify-end items-end text-sm pt-2 pr-2">
                <div className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 ml-8">
                  Back to Home
                </div>
                <NavLink to="/" className="flex items-center ml-2 mb-1">
                  <i className="text-[#3a8a87] fa-solid fa-house"></i>
                </NavLink>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              className="mt-10 inline-block bg-logo w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              // onClick={handleSubmit}
            >
              Sign in
            </button>

            {/* <!-- Divider --> */}
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            {/* <!-- Social login buttons --> */}
            {/*  Auth0 */}
            <a
              style={{ backgroundColor: "#303030" }}
              onClick={() => loginWithPopup()}
              class="mt-1 bg-[#505050] flex w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"

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
            src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1695951292/logos/isologo_htzuyd.png"
            alt="CodecraftedLogo_image"
          />
        </div>
      </div>

{/* --------------------------------------------------------------------------------------------------------*/}
    {/* PopUp Forgot Pasword */}    
    
      {PopupForgot && (
                
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center h-screen">            
          <div className="relative bg-gray-300 w-1/3 h-3/4 p-4 text-black">
            <form >

              <div className="absolute top-0 left-0 w-full">
                <Banner />                       
              </div>
                    
              <div className="static text-black p-2 mt-14 mb-2">
                <h2 className="text-xl font-bold">Forgot Password</h2>
                  </div>
                    <p className="text-black p-2 mt-2 mb-6">
                      Please enter the email address you'd like your password reset information sent to
                    </p>
                        
                    <label className="block text-sm font-semibold text-left mb-2 ml-2">Enter email address</label>
                        
                    <input
                      type="email"
                      name="email"
                      id="email"
                      // value={inputForgot.email}
                      // onChange={(e) => {handleForgot}}
                      className="block w-full rounded-md border border-gray-400 px-3.5 py-2 mb-4"
                      placeholder="Enter your email address"
                      required
                      autoComplete="given-email"
                    />
                         
                  <div>
                    <button 
                      // onClick={(ForgotPassword)}
                      // value="Send"
                      // type="submit"
                      onClick={() => {setPopupReset(true), setPopupForgot(false)}} 
                      className="mt-1 inline-block bg-logo w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Request Password Reset
                    </button>
                          
                    <p onClick={() => setPopupForgot(false)} 
                      className="text-[#3a8a87] cursor-pointer mt-6">
                        <strong>Back to login</strong>  
                    </p>
                  </div>
                              
                  <div className="bg-logo opacity-50 p-2 mt-4 text-center dark:bg-neutral-700 absolute bottom-0 left-0 w-full">
                    <span className="text-black">© 2023 Copyright: CodeCrafted Templates</span>
                  </div> 

            </form>
          </div>                 
        </div>
                
      )}
{/* --------------------------------------------------------------------------------------------------------- */}
{/* --------------------------------------------------------------------------------------------------------- */}
    {/* PopUp Reset Pasword */} 

      {PopupReset && (
                
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">            
                  <div className="relative bg-gray-300 w-1/3 h-[90%] p-4 text-black">
                    <form >
        
                      <div className="absolute top-0 left-0 w-full">
                        <Banner />                       
                      </div>
                            
                      <div className="static text-black p-2 mt-11 ">
                        <h2 className="text-xl font-bold">Reset Your Password</h2>
                      </div>
                        <p className="text-black p-2 mb-2">
                          Enter a new password to reset the password on your account. We'll ask for this password wherever you login
                        </p>
                                
                        <label className="block text-sm font-semibold text-left mb-2 ml-2">Enter your password</label>
                      
{/* --------------------------------------------------------------------------------------------------------- */}
                      <div className="mt-3 flex items-center justify-end">          
                        <input
                          type={showPasswordReset ? "text" : "password"}
                          name="password"
                          id= "password"
                          value={inputReset.password}
                          onChange={(e) => {
                            validatePassword(e.target.value);
                            handleReset(e);
                          }}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter your new password"
                          required
                        />
                        <span // Boton de ojito de contraseña
                          type="button"
                          onClick={togglePasswordVisibilityReset}
                          className="absolute mr-2 text-[#909090] hover:text-[#303030]"
                        >
                          {
                            showPasswordReset ? (
                              <i className="fa-solid fa-eye" />
                            ) : (
                              <i className="fa-solid fa-eye-slash" />
                            )}
                        </span>
                      </div>
{/* --------------------------------------------------------------------------------------------------------- */}
{/* ------------------Validacion del password---------------------------------------------------------------- */}
                      <div className="static mt-1 mb-2"> 
                        <p className="static mt-2 text-sm text-[#606060]">
                          <strong> Password must have:</strong>   
                        </p>
                        <ul className="grid grid-cols-2 text-sm text-[#606060]">
                      
                        <div className="span-col-1 flex flex-col items-start pt-2 pl-6">
                          <li>
                            {validations.hasUppercase ? (
                              <i className="fa-solid fa-check text-green-600" />
                                ) : (
                              <i className="fa-solid fa-xmark text-red-600" />
                                )}{" "}
                                  An uppercase character
                          </li>
                          <li>
                            {validations.hasLowercase ? (
                              <i className="fa-solid fa-check text-green-600" />
                                ) : (
                              <i className="fa-solid fa-xmark text-red-600" />
                                )}{" "}
                                  An lowercase character
                          </li>
                          <li className="line-clamp-1">
                            {validations.isBetween8And30 ? (
                              <i className="fa-solid fa-check text-green-600" />
                                ) : (
                              <i className="fa-solid fa-xmark text-red-600" />
                                )}{" "}
                                  A between 8 and 30 char...
                          </li>
                        </div>
                  
                        <div className="span-col-1 flex flex-col items-start pt-2 pl-6">
                          <li>
                            {validations.hasNumber ? (
                              <i className="fa-solid fa-check text-green-600" />
                                ) : (
                              <i className="fa-solid fa-xmark text-red-600" />
                               )}{" "}
                                  At least one number
                          </li>
                          <li>
                            {validations.hasSpecialChar ? (
                              <i className="fa-solid fa-check text-green-600" />
                                ) : (
                              <i className="fa-solid fa-xmark text-red-600" />
                                )}{" "}
                                  A special character
                          </li>
                        </div>
                        </ul>
                      </div>
{/* -------------------------------------------------------------------------------------------------------- */}
                              
                      <div className="flex items-center justify-end mb-2">
                        <input
                          type={showPasswordReset ? "text" : "password"}
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="Confirm your new password"
                          value={inputReset.confirmPassword}
                          onChange={(e) => handleReset(e)}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          required
                        />
                        <span className={styles.warning}>
                          {" "}
                            {errors.confirmPassword && (
                          <i
                            className={styles.icon}
                            class="fa-solid fa-circle-exclamation text-red-600 hover:text-red-800 "
                          />
                            )}
                        <span className={styles.bubble}>
                          {errors.confirmPassword}
                        </span>
                        </span>
                      </div>
{/* ------------------------------------------------------------------------------------------------------- */}
                      <div>
                        <button 
                          // onClick={(ForgotPassword)}
                          value="Send"
                          type="submit"
                          className="mt-2 inline-block bg-logo w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                         >
                          Reset Password
                        </button>
                                  
                        <p onClick={() => setPopupReset(false)} 
                          className="text-[#3a8a87] cursor-pointer mt-6">
                            <strong>Back to login</strong>  
                        </p>
                      </div>
                                      
                      <div className="bg-logo opacity-50 p-2 mt-4 text-center dark:bg-neutral-700 absolute bottom-0 left-0 w-full">
                        <span className="text-black">© 2023 Copyright: CodeCrafted Templates</span>
                      </div> 
        
                    </form>
                  </div>                 
                </div>
                        
              )}


{/* --------------------------------------------------------------------------------------------------------- */}
    
    </div>
  );
};

export default LoginComponents;


{/* <form

ref={form}
onSubmit={(e) => {
  handleSubmit(e);
  sendEmail(e);
}}
>

... Tu formulario aquí

<div className="isolate w-200 h-190 bg-gray-300 px-6 py-24 sm:py-3 lg:px-3">
  
  <div
    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    aria-hidden="true"
  >
    
    <div
      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w- -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-grey to-white opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
      style={{
        "clip-path":
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
    ></div>

  </div>
-----------------------------------------
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="border-black bg-red text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl text-sm font-medium uppercase leading-normal">
        Forgot Password
      </h2>
        <p className="bg-blue mt-2 text-sm font-medium uppercase leading-normal leading-8 text-gray-600">
          Enter your email address:
        </p>
    </div>
------------------------------------------      
  <div
    action="#"
    method="POST"
    className="mx-auto mt-16 max-w-xl sm:mt-5"
  >
    <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2">
      
      <div>
        <label
          for="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Email
        </label>
      </div>

        <div className="mt-2.5 mx-auto w-full">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            autocomplete="given-email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // onChange={handleChange}
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
  </div>
-------------------------------------------------   
  <div className="flex justify-center">
    <button
      type="button"
      className="bg-gray-400 text-white text-sm font-medium uppercase leading-normal px-4 py-2 rounded"
      onClick={() => setPopupForgot(false)}
    >
      Close
    </button>
    
    <button
      type="submit"
      name="submit"
      className="bg-logo text-white text-sm font-medium uppercase leading-normal px-4 py-2 ml-2 rounded"
      value="Send"
    >
      Submit
    </button>
  </div>
---------------------------------------------------
</div>

</form> */}
