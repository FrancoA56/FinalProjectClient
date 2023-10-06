import React, { useState} from "react";
import axios from "axios"
import swal from "sweetalert2"
import loading from "../../utils/img/loading.png"

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userEmail = {
      email: e.target.email.value
    }

    setIsLoading (true);
      await axios.post(`${URL}api/user/forgotpassword`, userEmail)
      .then((res) => {
        setIsLoading(false)
        swal.fire({
          showConfirmButton: true,
          icon: 'success',
          text: 'Revise su email, se le ha enviado un enlace para crear una nueva contraseña'
        })
      }).catch ((err) => {
        setIsLoading(false)
        swal.fire({
          showConfirmButton: true,
          icon: 'error',
          text: 'Hubo un error al tratar de enviar los datos, compruebe el correo introsucido o intentelo mas tarde'
        })
      })
  }

  return (
    <div className="main">
      <form className="mainContainer" onSubmit={handleSubmit}>
        <h3>Recuperar cuenta</h3>
        <div>Correo electronico:</div>
        <input
          type="email"
          name="email"
          placeholder="Introduce tu email"
          required
        />
        <div className="divButton">
          {isLoading
            ?
            <div className="loadingImage">
              <img src={loading} alt="loading"/>
            </div>
            :
            <button type="submit">Enviar</button>
          }
        </div> 
      </form>
    </div>
  )

}
export default ForgotPassword