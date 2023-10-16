import React, { useState} from "react";
import axios from "axios"
import swal from "sweetalert2"
import loading from "../../utils/img/loading.png"

const ForgotPassword = async () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  // const handleForgot = async (e) => {
    e.preventDefault();
   
    setIsLoading (true);
    try {
      await axios.post(`${URL}/api/user/register`, { email });
        setIsLoading(false)
        swal.fire({
          showConfirmButton: true,
          confirmButtonColor: "rgb(94 195 191)",
          icon: 'success',
          text: 'Check your email, you have been sent a link to create a new password'
        })
      } catch (error) {
        setIsLoading(false)
        swal.fire({
          showConfirmButton: true,
          confirmButtonColor: "rgb(94 195 191)",
          icon: 'error',
          text: 'There was an error trying to send the data, check the email entered or try again later'
        })
      // }
  }

  // return (
  //   <div className="main">
  //     <form className="mainContainer" onSubmit={handleSubmit}>
  //       <h3>Recuperar cuenta</h3>
  //       <div>Correo electronico:</div>
  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="Introduce tu email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         required
  //       />
  //       <div className="divButton">
  //         {isLoading
  //           ?
  //           <div className="loadingImage">
  //             <img src={loading} alt="loading"/>
  //           </div>
  //           :
  //           <button type="submit">Enviar</button>
  //         }
  //       </div> 
  //     </form>
  //   </div>
  // )

}
export default ForgotPassword