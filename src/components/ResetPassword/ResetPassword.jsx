import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PasswordReset = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/api/user/editUser/${token}`, { password });
      showSuccessAlert('Password successfully updated.');
    } catch (error) {
      showErrorAlert('There was a problem updating the password.');
      console.error(error);
    }
  };

  // --------------------------------------------------------------------------Alert-✅-----------
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  // --------------------------------------------------------------------------------⛔------------

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PasswordReset;