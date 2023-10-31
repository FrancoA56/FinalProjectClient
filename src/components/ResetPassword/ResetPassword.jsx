import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../loginComponents/login.module.css";
import Banner from "../../components/Banner/Banner";
import validation from "./validation";

const PasswordReset = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [popUpValidation, setPopUpValidation] = useState(false);
  const URL = process.env.REACT_APP_API;
  const navigate = useNavigate();

  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const togglePasswordVisibilityReset = () => {
    setShowPasswordReset(!showPasswordReset);
  };

// --------------------------------------------------------------------------------⛔------------
  const [validations, setValidations] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isBetween8And30: false,
  });
  const [inputReset, setInputReset] = useState({
    password: "",
    confirmPassword: "",
  });
// ------------------------------------------------------------------------------------------------------

// --------------------------------------Password validity requirements----------------------------------
  const validatePassword = (e) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[\W_]/;

    
    const hasUppercase = uppercaseRegex.test(e);
    const hasLowercase = lowercaseRegex.test(e);
    const hasNumber = numberRegex.test(e);
    const hasSpecialChar = specialCharRegex.test(e);
    const isBetween8And30 = e.length >= 8 && e.length <= 30; 
   
    setValidations({
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecialChar,
      isBetween8And30,
    });   
    
    setPassword(e);
   
    setIsVisible (
      inputReset.password || hasUppercase || hasLowercase || hasNumber || hasSpecialChar || isBetween8And30
      );
    
  };
// --------------------------------------------------------------------------------------------------------

  function handleChange(e) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { password } = inputReset;
      await axios.put(`${URL}/api/user/reset/${token}`, { password });
      showSuccessAlert("Password successfully updated.");
      navigate("/login");
    } catch (error) {
      showErrorAlert(error.response.data.error);
    }
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };

  const showErrorAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      confirmButtonColor: "rgb(94 195 191)",
      text: error,
    });
  };

  return (
    <div
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
              background:
                "radial-gradient( 60rem circle at bottom, rgb(105, 105, 105), black)",
            }}
            >
        <form className="mt-1">
          <div className=" isolate w-full h-2/3 dark:bg-[#303030] px-6 sm:py-3 lg:px-3 rounded-md bg-gray-300 p-4">

            <div className="absolute rounded-md rounded-b-none top-0 left-0 w-full">
              <Banner />
            </div>

            <div className="static text-black p-2 mt-4 ">
              <h2 className="text-2xl font-bold">Reset Your Password</h2>
            </div>
            <p className="text-black p-2 mb-3">
              Please enter your new password below. <br />
              Remember that this will permanently replace the previous one.
            </p>

            <label className="block text-sm font-semibold text-left mb-2 ml-2">
              Enter your password:
            </label>

{/* --------------------------------------------------------------------------------------------------------- */}
            <div className="mt-2 mb-3 flex items-center justify-end">
              <input
                type={showPasswordReset ? "text" : "password"}
                name="password"
                id="password"
                value={inputReset.password}
                onChange={(e) => {
                  validatePassword(e.target.value);
                  handleChange(e);
                  setPopUpValidation(true)
                }}
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your new password"
                required
              />
              <span // Boton de ojito de contraseña
                type="button"
                onClick={togglePasswordVisibilityReset}
                className="absolute mr-2 text-[#909090] hover:text-[#303030]"
              >
                {showPasswordReset ? (
                  <i className="fa-solid fa-eye" />
                ) : (
                  <i className="fa-solid fa-eye-slash" />
                )}
              
              </span>
            </div>
{/* --------------------------------------------------------------------------------------------------------- */}

{/* ------------------Validacion del password---------------------------------------------------------------- */}
          {popUpValidation && (
            <div className={`static mt-2 mb-2 rounded-md bg-white ${isVisible ? 'visible' : 'invisible'}`}>

              <ul className="grid grid-cols-2 text-sm text-[#606060]">
                <div className="span-col-1 flex flex-col items-start pt-2 pl-10">
                  <li style={{ color: validations.hasUppercase ? 'green' : 'red' }}>
                    {validations.hasUppercase ? (
                      <i className="fa-solid fa-check text-green-600" />
                    ) : (
                      <i className="fa-solid text-red-600" />
                    )}{" "}
                    An uppercase character
                  </li>
                  <li style={{ color: validations.hasLowercase ? 'green' : 'red' }}>
                    {validations.hasLowercase ? (
                      <i className="fa-solid fa-check text-green-600" />
                    ) : (
                      <i className="fa-solid text-red-600" />
                    )}{" "}
                    An lowercase character
                  </li>
                  <li style={{ color: validations.isBetween8And30 ? 'green' : 'red' }} className="mb-2 line-clamp-1">
                    {validations.isBetween8And30 ? (
                      <i className="fa-solid fa-check text-green-600" />
                    ) : (
                      <i className="fa-solid text-red-600" />
                    )}{" "}
                    A between 8 and 30 char...
                  </li>
                </div>

                <div className="span-col-1 flex flex-col items-start pt-2 pl-8">
                  <li style={{ color: validations.hasNumber ? 'green' : 'red' }}>
                    {validations.hasNumber ? (
                      <i className="fa-solid fa-check text-green-600" />
                    ) : (
                      <i className="fa-solid text-red-600" />
                    )}{" "}
                    At least one number
                  </li>
                  <li style={{ color: validations.hasSpecialChar ? 'green' : 'red' }} >
                    {validations.hasSpecialChar ? (
                      <i className="fa-solid fa-check text-green-600" />
                    ) : (
                      <i className="fa-solid text-red-600" />
                    )}{" "}
                    A special character
                  </li>
                </div>
              </ul>
            </div>
          )}
{/* -------------------------------------------------------------------------------------------------------- */}
            <label className="block text-sm font-semibold text-left mb-2 ml-2">
              Confirm your password:
            </label>

            <div className="flex items-center justify-end mt-2 mb-2">
              <input
                type={showPasswordReset ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your new password"
                value={inputReset.confirmPassword}
                onChange={(e) => handleChange(e)}
                onFocus={() => setPopUpValidation(false)}
                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                disabled={
                  !validations.hasUppercase ||
                  !validations.hasLowercase ||
                  !validations.hasNumber ||
                  !validations.hasSpecialChar ||
                  !validations.isBetween8And30
                }
              />
              <span className={styles.warning}>
                {" "}
                {errors.confirmPassword && (
                  <i
                    className={styles.icon}
                    class="fa-solid fa-circle-exclamation text-red-600 hover:text-red-800 "
                  />
                )}
                <span className={styles.bubble}>{errors.confirmPassword}</span>
              </span>
            </div>
{/* ------------------------------------------------------------------------------------------------------- */}
            <div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                type="submit"
                className="mt-2 inline-block bg-logo w-full rounded-md 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Reset Password
              </button>

              <p className="text-[#3a8a87] cursor-pointer mb-4 mt-6">
                <Link to="/login">
                <strong>Back to login</strong>
                </Link>
              </p>
            </div>

            <div className="bg-[#303030] opacity-50 p-2 mt-4 rounded-md rounded-t-none text-center dark:bg-neutral-700 absolute bottom-0 left-0 w-full">
              <span className="text-[#909090] dark:text-white">
                © 2023 Copyright: CodeCrafted Templates
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
