import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Swal from "sweetalert2";

const PayComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const deployment = useSelector((state) => state.deployment);
  const deploymentCost = useSelector((state) => state.deploymentCost);
  const Navigate = useNavigate();

  //pop up for transfer details
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    company: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      // console.log("Form Data:", formData);
      showSuccessAlert("Your email has been sent successfully!");
    } else {
      showErrorAlert(
        "You must fill all the data to submit the form"
      );
    }
    setPopupOpen(false);
  };

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
      text: `${message}`,
    });
  };

  // Estado para controlar la visibilidad del formulario de tarjeta de débito/credito
  const [showCardForm, setShowCardForm] = useState(false);

  const subTotal = cart.reduce(
    (accumulator, preset) => accumulator + preset.price,
    0
  );

  const total = () => {
    return deploymentCost + subTotal;
  };

  return (
    <>
      <Banner />
      <Nav />
      <div>
        <div className="container mx-auto p-1 mt-2 mb-2">
          <h2
            className="inline-block mb-2 mt-2 w-full p-1  rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
          text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
            style={{ "background-color": "#303030" }}
          >
            Checkout
          </h2>
        </div>
        <div className="bg-gray-300 mb-2 container mx-auto p-4 rounded 5ec3bf">
          <div className="grid grid-cols-5 text-sm font-medium uppercase leading-normal">
            <div>Presets</div>
            <div>SubTotal</div>
            <div>With deployment</div>
            <div>Deployment Cost</div>
            <div>Total</div>
            <div>{cart.length} Units</div>
            <div>${subTotal}</div>
            {deployment ? <div>Yes</div> : <div>No</div>}
            <div>${deploymentCost}</div>
            <div>${total()}</div>
          </div>
          <h3
            className="inline-block bg-[#5ec3bf] mb-1 my-8 rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
            style={{ "background-color": "#303030" }}
          >
            How do you want to pay?
          </h3>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center container mx-auto p-2 mt-2 rounded 5ec3bf w-full mb-4"
        style={{ "background-color": "#303030" }}
      >
        <div className="flex justify-between gap-12 my-10">
          <button
            onClick={() => setPopupOpen(true)}
            className={`bg-logo text-white text-sm font-medium uppercase leading-normal p-2 rounded-md w-64`}
          >
            Complete the payment through a bank transfer
          </button>
          {isPopupOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
              <div className="p-1 rounded-md">
                <form onSubmit={handleSubmit}>
                  {/* ... Tu formulario aquí */}
                  <div class="isolate w-full h-2/3 bg-gray-300 px-6 py-24 sm:py-3 lg:px-3">
                    <div
                      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                      aria-hidden="true"
                    >
                      <div
                        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w- -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-grey to-white opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                          "clip-path":
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                      ></div>
                    </div>
                    <div class="mx-auto max-w-2xl text-center">
                      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-sm font-medium uppercase leading-normal">
                        Insert your data
                      </h2>
                      <p class="mt-2 text-sm font-medium uppercase leading-normal leading-8 text-gray-600">
                        We'll send you an email with the bank account details
                        for the transfer
                      </p>
                    </div>
                    <form
                      action="#"
                      method="POST"
                      class="mx-auto mt-16 max-w-xl sm:mt-20"
                    >
                      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                          <label
                            for="first-name"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            First name
                          </label>
                          <div class="mt-2.5">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autocomplete="given-name"
                              onChange={handleChange}
                              value={formData.name}
                              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="last-name"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Last name
                          </label>
                          <div class="mt-2.5">
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autocomplete="family-name"
                              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="company"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Company
                          </label>
                          <div class="mt-2.5">
                            <input
                              type="text"
                              name="company"
                              id="company"
                              autocomplete="organization"
                              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="email"
                            class="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Email
                          </label>
                          <div class="mt-2.5">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autocomplete="email"
                              onChange={handleChange}
                              value={formData.email}
                              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div class="flex gap-x-4 sm:col-span-2">
                          <div class="flex h-6 items-center"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-gray-400 text-white text-sm font-medium uppercase leading-normal px-4 py-2 rounded"
                      onClick={() => setPopupOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-logo text-white text-sm font-medium uppercase leading-normal px-4 py-2 ml-2 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <button className="bg-logo text-white text-sm font-medium uppercase leading-normal p-2 rounded-md w-64">
            Continue with PayPal
          </button>
        </div>
        {/* {showCardForm && paymentMethod === "debit-credit-card" && (
          <form
            className="bg-white p-6 rounded-lg shadow-md w-1/2 mb-12 "
            onSubmit={handlePaymentSubmit}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium leading-normal text-gray-700">
                Holder's Name:
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
              className="bg-logo text-white text-sm font-medium uppercase leading-normal p-2 rounded-md w-full"
            >
              Pay
            </button>
          </form>
        )} */}
      </div>
    </>
  );
};

export default PayComponent;
