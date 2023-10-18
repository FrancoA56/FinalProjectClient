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
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
        <div className="relative bg-gray-300 w-1/3 h-[90%] p-4 text-black">
          <form>
            <div className="absolute top-0 left-0 w-full">
              <Banner />
            </div>

            <div className="static text-black p-2 mt-11 ">
              <h2 className="text-xl font-bold">Reset Your Password</h2>
            </div>
            <p className="text-black p-2 mb-2">
              Enter a new password to reset the password on your account. We'll
              ask for this password wherever you login
            </p>

            <label className="block text-sm font-semibold text-left mb-2 ml-2">
              Enter your password
            </label>

{/* --------------------------------------------------------------------------------------------------------- */}
            <div className="mt-3 flex items-center justify-end">
              <input
                type={showPasswordReset ? "text" : "password"}
                name="password"
                id="password"
                value={inputReset.password}
                onChange={(e) => {
                  validatePassword(e.target.value);
                  handleChange(e);
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
                {showPasswordReset ? (
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
                onChange={(e) => handleChange(e)}
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
                className="mt-2 inline-block bg-logo w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Reset Password
              </button>

              <p className="text-[#3a8a87] cursor-pointer mt-6">
                <Link to="/login">
                <strong>Back to login</strong>
                </Link>
              </p>
            </div>

            <div className="bg-logo opacity-50 p-2 mt-4 text-center dark:bg-neutral-700 absolute bottom-0 left-0 w-full">
              <span className="text-black">
                © 2023 Copyright: CodeCrafted Templates
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
