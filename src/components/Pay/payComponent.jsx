import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const PayComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const deployment = useSelector((state) => state.deployment);
  const Navigate = useNavigate();

  // Estados para los datos del formulario de tarjeta de débito/credito
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Estado para el método de pago seleccionado
  const [paymentMethod, setPaymentMethod] = useState("");
  
  // Estado para controlar la visibilidad del formulario de tarjeta de débito/credito
  const [showCardForm, setShowCardForm] = useState(false);

  const subTotal = cart.reduce(
    (accumulator, preset) => accumulator + preset.price,
    0
  );

  // Manejar el envío del formulario
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    try {
      // Aquí puedes agregar la lógica para procesar el pago según el método seleccionado (tarjeta de débito o PayPal)
      if (paymentMethod === "debit-credit-card") {
        // Procesar el pago con tarjeta de débito/credito
      } else if (paymentMethod === "paypal") {
        // Procesar el pago con PayPal
      }

      // Redirigir al usuario después de un pago exitoso
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const calculateDeployCost = () => {
    // Lógica para calcular el costo de despliegue
    return cart.length * 10 + 30; // Por ejemplo, $10 por cada producto
  };

  const total = () => {
    return calculateDeployCost() + subTotal;
  };

  return (
    <>
      <Nav />
      <h2
        className="inline-block bg-[#5ec3bf] mb-4 w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
        style={{ "background-color": "#303030" }}
      >
        Checkout
      </h2>
      <div className="grid grid-cols-5">
        <div>Presets</div>
        <div>SubTotal</div>
        <div>With deployment</div>
        <div>Deployment Cost</div>
        <div>Total</div>
        <div>{cart.length}</div>
        <div>{subTotal}</div>
        {deployment ? <div>Yes</div> : <div>No</div>}
        <div>{calculateDeployCost()}</div>
        <div>{total()}</div>
      </div>
      <h3
        className="inline-block bg-[#5ec3bf] my-8 rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
        style={{ "background-color": "#303030" }}
      >
        How do you want to pay?
      </h3>
      <div className="bg-gray-100 flex flex-col justify-center items-center">
        <div className="flex justify-between gap-12 my-10">
          <button
            onClick={() => {
              setPaymentMethod("debit-credit-card");
              setShowCardForm(!showCardForm); // Toggle visibility del formulario
            }}
            className={`bg-logo text-white p-2 rounded-md w-44 ${
              paymentMethod === "debit-credit-card" ? "bg-blue-700" : ""
            }`}
          >
            {showCardForm ? "Cancel" : "Pay with Debit/Credit Card"}
          </button>
          <button
            onClick={() => setPaymentMethod("paypal")}
            className={`bg-logo text-white p-2 rounded-md w-44 ${
              paymentMethod === "paypal" ? "bg-blue-700" : ""
            }`}
            disabled={paymentMethod === "debit-credit-card"}
          >
            Continue with PayPal
          </button>
        </div>
        {showCardForm && paymentMethod === "debit-credit-card" && (
          <form
            className="bg-white p-6 rounded-lg shadow-md w-1/2 mb-12 "
            onSubmit={handlePaymentSubmit}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Titular Name:
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Credit/Debit card number:
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-10 mb-7 ">
            <div className="w-2/4">
              <label className="block text-sm font-medium text-gray-700">
                Expiration MM/YY:
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
            <div className="w-2/4">
              <label className="block text-sm font-medium text-gray-700">
                CVV:
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
            </div>
            <button
              onClick={console.log(cart)}
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md w-full"
            >
              Pay
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PayComponent;
