import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import styles from "../registerComponents/register.module.css";
import axios from "axios";
import { validation } from "../validation";
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

  //     useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //       // Hacer una petición al servidor para obtener la información del usuario
  //     // Actualizar el estado global con la información del usuario
  //   }
  // }, [dispatch]);

  return (
    <div>
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign Up User</h1>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Input name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <p>{errors.name}</p>
        </div>

        <div>
          <input
            type="text"
            name="email"
            placeholder="Input email"
            value={input.email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <p>{errors.email}</p>
        </div>

        <dir>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="input password"
            value={input.password}
            onChange={(e) => handleChange(e)}
            required
          />
        </dir>
        <div>
          <p>{errors.password}</p>
        </div>

        <div>
          <input
            type="text"
            name="logo"
            placeholder="input logo"
            value={input.logo}
            onChange={(e) => handleChange(e)}
            height="40px"
            required
          />
        </div>
        <div>
          <p>{errors.name}</p>
        </div>

        <div>
          <button type="submit">Aceptar</button>
        </div>
      </form> */}
      <div className="bg-gradient-to-r from-[#000000] from-1% via-[#303030] via-50% to-[white] to-50%">
      
      

      <section
        className="h-screen"
      >
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Logo en el mismo contenedor */}
            <div
              className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12"
              
            >
              <img
                src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1695951292/logos/isologo_htzuyd.png"
                className="w-full"
                alt="Logo image"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              />
            </div>

            {/* Right column container with form */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              {/* Name input */}

              <div className="md:col-span-1 lg:ml-6 lg:col-span-2">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Input name"
                      value={input.name}
                      onChange={(e) => handleChange(e)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <p className="text-red-500">{errors.name}</p>

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
                  </div>
                  <p className="text-red-500">{errors.email}</p>

                  {/* Password input */}

                  <div className="mb-4">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Input password"
                      value={input.password}
                      onChange={(e) => handleChange(e)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <p className="text-red-500">{errors.password}</p>

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
                  </div>
                  <p className="text-red-500">{errors.logo}</p>

                  {/* Remember me checkbox */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="exampleCheck3"
                        checked
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="exampleCheck3"
                      >
                        Remember me
                      </label>
                    </div>

                    {/* Forgot password link */}
                    <a
                      href="#!"
                      className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
                     hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600
                     focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none
                     focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                     dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                     dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                     dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign in
                  </button>

                  {/* Divider */}
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>

                  {/*  Social login buttons  */}
                  <a
                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium
                    uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 
                    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-
                    [0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 
                    active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba
                    (59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-
                    [0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),
                    0_4px_18px_0_rgba(59,113,202,0.1)]"
                    style={{ "background-color": "#3b5998" }}
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {/*  Google */}
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
                  <a
                    className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium 
                    uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 
                    hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-
                    [0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 
                    active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] 
                    dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba
                    (84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba
                    (84,180,211,0.1)]"
                    style={{ "background-color": "#55acee" }}
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {/*  Twitter  */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 
                      1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 
                      5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 
                      2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 
                      13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      />
                    </svg>
                    Continue with Twitter
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default RegisterComponents;

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
