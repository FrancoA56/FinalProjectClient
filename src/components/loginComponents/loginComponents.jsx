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

const LoginComponents = () => {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();
  const URL = "http://localhost:3001/";

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
      console.log("error:", error);
      alert("⛔ >>> email does not match password <<< ⛔");
    }
  }

  // show-hide password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign in...!!!</h1>
        <h3>WELCOME</h3>
        <p>Login to PageWeb to continue...!</p>

        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
            value={input.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Enter your email...</label>
        </div>

        <div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder=" "
            value={input.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Enter password...</label>
        </div>

        <div>
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <FaEye style={{ backgroundColor: "rgb(4, 100, 85)" }} />
            ) : (
              <FaEyeSlash style={{ backgroundColor: "rgb(4, 100, 85)" }} />
            )}
          </button>

          <button type="submit">Sign in</button>

          {/* <button onClick={ handleLoginWithGoogle }>Continue with Google</button> */}
          {/* <button>Login with GitHub</button> */}
          {/* <button>Login with Facebook</button> */}
        </div>
      </form>
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
