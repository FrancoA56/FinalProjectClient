import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { postUser } from "../../Redux/actions";
import styles from "../registerComponents/register.module.css"
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
function validation (input) {
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

function RegisterComponents () {
  
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
    
  const [errors, setErrors] = useState({})

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
  }

  async function handleSubmit(e) {
    e.preventDefault();  
    if (
      !errors.email &&
      !errors.password &&
      !errors.name &&
      !errors.logo
    ) {
      try {
        console.log(input)
        dispatch(postUser(input));
        alert("User created successfully!")
  
        setInput({
        email: "",
        password: "",
        name: "",
        logo: "",
      });
          navigate('/login') //cdo termine de crear el usuaro, q me redirija al login para loguearse...!
        } catch (error) {
          return alert(">>> ⛔ Something went wrong or some fields are missing. Please try again. ⛔ <<<");
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
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
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

  
  
  
  
      </form>
    </div>
  )
}

export default RegisterComponents;



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