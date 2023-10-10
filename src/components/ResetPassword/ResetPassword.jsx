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
      alert('Contraseña actualizada con éxito.');
    } catch (error) {
      alert('Hubo un problema al actualizar la contraseña.');
      console.error(error);
    }
  };

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