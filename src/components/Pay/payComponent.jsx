import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const PayComponent = () => {
  const dispatch = useDispatch();
  const models = useSelector((state) => state.cart);
  const Navigate = useNavigate();

  // Estados para los datos del formulario
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("debit-card"); // Opción predeterminada

  // Manejar el envío del formulario
  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para procesar el pago, por ejemplo, integrando con una pasarela de pago como PayPal
    // También puedes validar los datos del formulario aquí antes de realizar el pago

    // Redirigir al usuario después de un pago exitoso
    Navigate("/order-confirmation");
  };

  return (
    <>
      <Nav />
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
        <form className="bg-white p-6 rounded-lg shadow-md w-96">
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700">Número de Tarjeta:</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-sm font-medium text-gray-700">Nombre del Titular:</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Fecha de Vencimiento:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CVV:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Método de Pago:</label>
            <select
              className="mt-1 p-2 w-full border rounded-md"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="debit-card">Tarjeta de Débito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
            Pagar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PayComponent;
