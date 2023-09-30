import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/actions";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useAuth0 } from "@auth0/auth0-react";


/* Requirements to validate the login
-----------------------------------------------------------------
 Para las validaciones del login comprobar que el mail existe y 
comparar la contraseña ingresada con la cargada por el usuario */

function Validation (input) {
  let errors = {};

  // Validate mail
  if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
    errors.email = "Incorrect email format";
  } if (!/^(?=.{1,35}$).+/.test(input.email)) {
    errors.email = "Must be less than 35 characters";
  } else {
    errors.mail = "";
  }
  // Validate password
  if (!/^(?=.*\d).{6,10}$/.test(input.password)) {
    errors.password = "l Password must have a number and between 6 to 10 characters";
  } else {
    errors.password = "";
  }
  return errors;
}


const LoginComponents = () => {
  
  const navigate = useNavigate();
  const users = useSelector ((state) => state.user)
  const dispatch = useDispatch()
  const { email } = useParams();

  
  const [input, setInput] = useState ({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState ({
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
  
const [access, setAccess] = useState (false)
  
const handleSubmit = (e) => {
  e.preventDefault();
  // const EMAIL = "claudiocarruz@gmail.com";
  // const PASSWORD = "123456";

// Verificar si la información de usuario coincide
// if (users.email) {
console.log(users)
console.log(input)
if (input.email === users.email && input.password === users.password) {
  setAccess(true);
  dispatch(getUser(input.email));
  navigate('/home');
} else {
  alert("⛔ >>> email does not match password <<< ⛔");
// }
}
};

useEffect(() => {
  dispatch(getUser(email));
}, [dispatch, email]);

// show-hide password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
      
return ( 
  <div >   
    <form onSubmit={handleSubmit}>
        <h1>Sign in...!!!</h1>
        <h3>WELCOME</h3>
        <p>Login to PageWeb to continue...!</p>
       
      <div >
        <input 
          type="text" 
          name="email" 
          id="email"
          placeholder=" "
          value={input.email}
          onChange={handleChange}
          required/>
        <label htmlFor="email">Enter your email...</label >
          <p style={{color:"red"}}>{errors.email}</p>
      </div>

      <div>     
        <input
          type={showPassword ? "text" : "password"} 
          name="password" 
          id="password"
          placeholder=" "
          value={input.password}
          onChange={handleChange}
          required/>
        <label htmlFor="password">Enter password...</label>
          <p style={{color:"red"}}>{errors.password}</p>
      </div>    
    
      <div>
        <button type="button" onClick={togglePasswordVisibility}>{showPassword ? <FaEye style={{ backgroundColor: 'rgb(4, 100, 85)'}}/> : <FaEyeSlash style={{ backgroundColor: 'rgb(4, 100, 85)'}}/>}</button>
       
        <button type="submit">Sign in</button>
      
        {/* <button onClick={ handleLoginWithGoogle }>Continue with Google</button> */}
        {/* <button>Login with GitHub</button> */}
        {/* <button>Login with Facebook</button> */}
      </div>
    
    </form>
  
  </div>
)
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