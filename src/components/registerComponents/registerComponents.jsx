import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validation } from "../validation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "tailwindcss/tailwind.css";

// import { toast } from 'react-toastify';

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
  const URL = "http://localhost:3001/";
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    logo: "",
  });

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
    if (!errors.email && !errors.password && !errors.name && !errors.logo) {
      try {
        console.log(input);
        const { data } = await axios.post(`${URL}api/user/register`, input);
        if (data.email) {
          alert("User created successfully!");
          navigate("/login"); //cdo termine de crear el usuaro, q me redirija al login para loguearse...!
        }
      } catch (error) {
        console.log(error);
        return alert(
          ">>> ⛔ Something went wrong or some fields are missing. Please try again. ⛔ <<<"
        );
      }
    }
  }

  // -------------------------------------------------------------------
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };  // Agrego ojito al register
  // --------------------------------------------------------------------

  return (
    <div class="grid lg:grid-cols-2 md:grid-cols-1 h-screen">
      {/* Columna izq */}
      <div
        class="grid-span-1 flex justify-center items-center"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
        }}
      >
        <div class="mb-12 md:mb-0 md:w-10/12 lg:w-full">
          <img
            src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1695951292/logos/isologo_htzuyd.png"
            alt="CodecraftedLogo_image"
          />
        </div>
      </div>
      {/* Columna der */}
      <div
        class="grid-span-2 flex justify-center 
        items-center"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
        }}
      >
        <div class="md:w-8/12 lg:w-8/12">
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Name input */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Input name"
                value={input.name}
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p className="text-[#585858] text-xs absolute indent-3">
                {errors.name}
              </p>
            </div>

            {/* Email input */}

            <div className="mb-4">
              <input
                type="text"
                name="email"
                placeholder="Input email"
                value={input.email}
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p className="text-[#585858] text-xs absolute indent-3">
                {errors.email}{" "}
              </p>
            </div>

            {/* Password input */}

            <div className="mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Input password"
                value={input.password}
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <p className="text-[#585858] text-xs absolute indent-3">
                {errors.password}
              </p>
            </div>
{/* -------------------------------------------------------------------------------------------- */}
            <button                                  // Boton de ojito de contraseña
              type="button"
              onClick={togglePasswordVisibility}
              class="relative lg:bottom-11 lg:left-48 md:relative bottom-11 left-28"
              // style={{ position: "relative", left: 190, top: -45 }}
            >
              {showPassword ? (
                <FaEye style={{ color: "gray" }} />
              ) : (
                <FaEyeSlash style={{ color: "gray" }} />
              )}
            </button>
{/* ---------------------------------------------------------------------------------------------- */}
            {/* Logo input */}

            <div className="mb-4">
              <input
                type="text"
                name="logo"
                placeholder="Input logo"
                value={input.logo}
                onChange={(e) => handleChange(e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                height="40px"
                required
              />
              <p className="text-[#585858] text-xs absolute indent-3">
                {errors.logo}
              </p>
            </div>
            {/* <!--are you member --> */}
            <div class="mb-6 flex items-center justify-start ml-3 mr-3">
              <a
                href="#!"
                class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              ></a>
              Are you already a member?
              <a class="text-[#5ec3bf] ml-3" href="/login">
                Login
              </a>
              {/* Agregar enlace de Home */}
              <a className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 ml-8" >Back to Home</a>
              <Link to="/" className="flex items-center ml-2 mb-1">
                <i
                  className="text-[#5ec3bf] fa-solid fa-house"
                  style={{ marginRight: "8px" }}
                ></i>
              </Link>
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              class="inline-block bg-[#5ec3bf] w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Register
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

            {/* <a
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
            </a> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponents;

{
  /*  LO QUE QUIRE TOM PARA LOS ERRORES*/
}
{
  /* {errors.password?.length ? (
                <span
                  styles={{
                    display: "flex",
                    height: "40px",
                    color: "red",
                    width: "40px",
                  }}
                >
                  <i className="fa-solid fa-circle-exclamation" />
                  <span style={{ opacity: 0 }}>{errors.password}</span>
                  <span style={{ opacity: 0 }} />
                </span>
              ) : (
                <></>
              )} */
}
{
  /*  LO QUE QUIRE TOM PARA LOS ERRORES*/
}

{
  /*  Twitter  

//       toast.success(`${result.msg}`, {
//         position: toast.POSITION.BOTTOM_RIGHT
//     });
//       navigate("/home",{replace:true})
//     }else {
//       toast.error(`${result.msg}`, {
//         position: toast.POSITION.BOTTOM_RIGHT
//     });
//     }
//   }
//   } catch (error) {
//     console.log(error)
//   }
// }
// };
*/
}
