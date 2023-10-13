import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "../registerComponents/register.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import { validation } from "../validation";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { logInSet, logInUser } from "../../Redux/actions";
import decodeToken from "../loginComponents/decodeToken";

/* Email validity requirements
----------------------------------------
Correct email format
Must be less than 35 characters
*/

/* Password validity requirements 
----------------------------------------
Minimum eight and maximum 10 characters, 
at least one uppercase letter, 
one lowercase letter, 
one number and 
one special character 
*/

function RegisterComponents() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API;
  const [errors, setErrors] = useState({});
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
    confirmPassword: "",
    name: "",
    logo: "",
  });

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

  //---------------------Auth terceros --------------------------------------
  const dispatch = useDispatch();

  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  useEffect(() => {
    // const storedToken = localStorage.getItem("token");
    if (isAuthenticated) {
      const auth = async () => {
        try {
          const userAuth = {
            name: user.nickname,
            email: user.email, // Se obtienen los datos del usuario
          };
          const { data } = await axios.post(`${URL}/api/user/login0`, userAuth); // Guarda al usuario en la base de datos y obtiene el token

          localStorage.setItem("token", data); // Guarda el token en el localStorage
          const userDecoded = decodeToken(data);
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

  //---------------------------------Auth terceros------------------------------

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.email &&
      !errors.password &&
      !errors.name &&
      !errors.confirmPassword /*&& !errors.logo */
    ) {
      try {
        console.log(input);
        const { data } = await axios.post(`${URL}/api/user/register`, input);
        if (data.email) {
          showSuccessAlert("User created successfully!");
          navigate("/login"); //cdo termine de crear el usuaro, q me redirija al login para loguearse...!
        }
      } catch (error) {
        console.log(error);
        showErrorAlert(">>> Registered email... Please try again. <<<");
      }
    }
  }

  // --------------------------------------------------------------------------Alert-✅-----------
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  // --------------------------------------------------------------------------------⛔------------

  // -------------------------------------------------------------------------- Ojito Password------
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }; // Agrego ojito al register
  // -----------------------------------------------------------------------------------------------

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 h-screen">
      {/* Columna izq */}
      <div
        className="grid-span-1 flex justify-center items-center"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
        }}
      >
        <div className="md:w-full lg:w-full flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1695951292/logos/isologo_htzuyd.png"
            alt="CodecraftedLogo_image"
          />
        </div>
      </div>
      {/* Columna der */}
      <div
        className="grid-span-2 flex justify-center 
        items-center py-3"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
        }}
      >
        <div className="md:w-8/12 lg:w-8/12 ">
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Name input */}
            <div className="">
              <div className="flex items-center justify-end">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Company name"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <span className={styles.warning}>
                  {/* <span className="absolute mr-2" title={errors.name}> */}{" "}
                  {errors.name && (
                    <i className="fa-solid fa-circle-exclamation  text-red-600 hover:text-red-800" />
                  )}
                  <span className={styles.bubble}>{errors.name}</span>
                </span>
              </div>
            </div>
            {/* <p className="text-txcval text-xs absolute indent-3 mt-1">
              {errors.name}
            </p> */}

            {/* Email input */}

            <div className="mt-3">
              <div className="flex items-center justify-end">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <span className={styles.warning}>
                  {/* <span className="absolute mr-2" title={errors.email}> */}{" "}
                  {errors.email && (
                    <i className="fa-solid fa-circle-exclamation  text-red-600 hover:text-red-800" />
                  )}
                  <span className={styles.bubble}>{errors.email}</span>
                </span>
              </div>
              {/* <p className="text-txcval text-xs absolute indent-3 mt-1">
                {errors.email}{" "}
              </p> */}
            </div>

            {/* Password input */}

            <div className="mt-3 ">
              <div className="flex items-center justify-end">
                <input
                  type={showPassword ? "text" : "password"}
                  // type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={input.password}
                  onChange={(e) => {
                    validatePassword(e.target.value);
                    handleChange(e);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {/* -------------------------------------------------------------------------------------------- */}
                <span // Boton de ojito de contraseña
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute mr-2 text-[#909090] hover:text-[#303030]"
                >
                  {
                    showPassword ? (
                      <i className="fa-solid fa-eye" />
                    ) : (
                      <i className="fa-solid fa-eye-slash" />
                    ) /* (
                        <FaEye style={{ color: "gray" }} />
                        ) : (
                          <FaEyeSlash style={{ color: "gray" }} />
                          ) */
                  }
                </span>
                {/* ---------------------------------------------------------------------------------------------- */}
              </div>

              <div>
                <p className="mt-3 text-sm text-[#606060]">
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
                      A number
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

              <div className="mt-3">
                <div className="flex items-center justify-end">
                  <input
                    type={showPassword ? "text" : "password"}
                    // type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    value={input.confirmPassword}
                    onChange={(e) => handleChange(e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                  <span className={styles.warning}>
                    {" "}
                    {errors.confirmPassword && (
                      <i
                        className={styles.icon}
                        class="fa-solid fa-circle-exclamation  text-red-600 hover:text-red-800 "
                      />
                    )}
                    <span className={styles.bubble}>
                      {errors.confirmPassword}
                    </span>
                  </span>
                </div>
                {/* <p className="text-txcval text-xs absolute indent-3 mt-1">
                {errors.confirmPassword}
              </p> */}
              </div>
              {/* <p className="text-txcval text-xs absolute indent-3 mt-1">
                {errors.password}
              </p> */}
              {/* <div className={(validations.hasLowercase || validations.hasUppercase || validations.hasNumber || validations.hasSpecialChar || validations.isBetween8And30) ? "visible" : "invisible"}> */}
            </div>
            {/* </div> */}
            <hr className="mt-2 border border-[#909090] rounded-sm" />

            {/* <!--are you member --> */}
            <div className="grid grid-cols-2 text-[#606060] text-sm">
              <div className="cols-span-1 text-sm flex pt-2 pl-2">
                <p> Are you already a member? </p>
                <NavLink to="/login" className="text-[#3a8a87] ml-1">
                  <strong> Login </strong>
                </NavLink>
              </div>

              <div className="flex justify-end items-end text-sm pt-2 pr-2">
                {/* Agregar enlace de Home */}
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
              className="inline-block mt-10 bg-logo w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Register
            </button>

            {/* <!-- Divider --> */}
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            {/* <!-- Social login buttons --> */}
            {/*  Google */}
            <a
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
            {/* <!-- Twitter --> */}

            {/* <a
              className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
              style={{ "background-color": "#505050" }}
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Continue with Twitter
            </a> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponents;

// {
//   /*  LO QUE QUIRE TOM PARA LOS ERRORES*/
// }
// {
//   /* {errors.password?.length ? (
//                 <span
//                   styles={{
//                     display: "flex",
//                     height: "40px",
//                     color: "red",
//                     width: "40px",
//                   }}
//                 >
//                   <i className="fa-solid fa-circle-exclamation" />
//                   <span style={{ opacity: 0 }}>{errors.password}</span>
//                   <span style={{ opacity: 0 }} />
//                 </span>
//               ) : (
//                 <></>
//               )} */
// }
// {
//   /*  LO QUE QUIRE TOM PARA LOS ERRORES*/
// }

// {
//   /*  Twitter

// //       toast.success(`${result.msg}`, {
// //         position: toast.POSITION.BOTTOM_RIGHT
// //     });
// //       navigate("/home",{replace:true})
// //     }else {
// //       toast.error(`${result.msg}`, {
// //         position: toast.POSITION.BOTTOM_RIGHT
// //     });
// //     }
// //   }
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }
// // };
// */
// }
