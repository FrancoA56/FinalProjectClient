import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../Redux/actions";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";

/* Requirements to validate the login
-----------------------------------------------------------------
 Para las validaciones del login comprobar que el mail existe y 
comparar la contraseña ingresada con la cargada por el usuario */

function Validation(input) {
  let errors = {};

  // Validate mail
  if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
    errors.email = "Incorrect email format";
  }
  if (!/^(?=.{1,35}$).+/.test(input.email)) {
    errors.email = "Must be less than 35 characters";
  } else {
    errors.mail = "";
  }
  // Validate password
  if (!/^(?=.*\d).{6,10}$/.test(input.password)) {
    errors.password =
      "l Password must have a number and between 6 to 10 characters";
  } else {
    errors.password = "";
  }
  return errors;
}

const LoginComponents = () => {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();
  const URL = "http://localhost:3001/";

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const EMAIL = "claudiocarruz@gmail.com";
    // const PASSWORD = "123456";

    // Verificar si la información de usuario coincide
    // if (users.email) {
    try {
      if (input.email && input.password) {
        const { data } = await axios.get(
          `${URL}api/user?email=${input.email}&password=${input.password}`
        );
        console.log("respuesta de la peticion data", data);

        dispatch(logInUser(input.email));
        setAccess(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("⛔ >>> email does not match password <<< ⛔");
      // }
    }
  }

  // show-hide password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // #5ec3bf

  return (
    <div class="bg-gradient-to-r from-[#000000] from-1% via-[#303030] via-50% to-[white] to-50%">
      <section class="h-screen">
        <div class="container h-full px-6 py-24 ">
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1695951292/logos/isologo_htzuyd.png"
                alt="CodecraftedLogo_image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                
                {/* <!-- Email input --> */}
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={input.email}
                    onChange={handleChange}
                    required
                    placeholder="Input email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <p class="text-[#5ec3bf] text-xs absolute">{errors.email}</p>
                </div>

                {/* <!-- Password input --> */}
                {/*                 <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder=" "
                    value={input.password}
                    onChange={handleChange}
                    required
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  />
                  <label
                    for="exampleFormControlInput33"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                    <p class="text-red-500 text-xs">{errors.password}</p>
                  </label>
                </div> */}
                <div className="mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={input.password}
                    onChange={handleChange}
                    required
                    placeholder="Input password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                <p class="text-[#5ec3bf] text-xs absolute">{errors.password}</p>
                </div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{ position: "relative", left: 225, top: -45 }}
                >
                  {showPassword ? <FaEye style={{color:"gray"}} /> : <FaEyeSlash style={{color:"gray"}}/>}
                </button>

                {/* <!-- Not a member --> */}
                <div class="mb-6 flex items-center justify-between">
                  <div class="">
                    <a
                      href="#!"
                      class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    ></a>
                    Not a member?{" "}
                    <a class="text-[#5ec3bf]" href="/register">
                      Register
                    </a>
                  </div>

                  {/* <!-- Forgot password link --> */}
                  <a
                    href="#!"
                    class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  class="inline-block bg-[#5ec3bf] w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Sign in
                </button>

                {/* <!-- Divider --> */}
                <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>

                {/* <!-- Social login buttons --> */}
                {/*  Google */}
                <a
                  class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  style={{ "background-color": "#303030" }}
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
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Continue with Google
                </a>
                {/* <!-- Twitter --> */}
                <a
                  class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  style={{ "background-color": "#505050" }}
                  href="#!"
                  role="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginComponents;

// const { loginWithRedirect } = useAuth0();
// const handleLoginWithGoogle = () => {
//   loginWithRedirect ({
//     screen_hint: 'login',
//     connection: 'google-oauth2'
//   })
// }

// localStorage.setItem('token', 'yourAuthTokenHere'); // Guardar el token

//! Estilos
