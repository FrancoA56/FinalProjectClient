import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../registerComponents/register.module.css";
import axios from "axios";
import { validation } from "../validation"
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
  );
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
