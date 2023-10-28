import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redir } from "react-router-dom";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Swal from "sweetalert2";
import axios from "axios";
import { editUserRedux } from "../../Redux/actions";
import decodeToken from "../loginComponents/decodeToken";

const PayComponent = () => {
  const URL = process.env.REACT_APP_API;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const login = useSelector((state) => state.login);
  const deploymentCost = useSelector((state) => state.deploymentCost);

  //pop up for transfer details
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name || "",
    lastname: "",
    firstname: "",
    city: "",
    zipcode: "",
    country: "",
  });

  // funcion edita la base de datos USER
  const editUser = async (userEdit) => {
    try {
      const { data } = await axios.put(
        `${URL}/api/user/${user.email}`,
        userEdit
      ); // Recibe el token actualizado

      localStorage.setItem("token", data); // Almanecena el nuevo token en el localStorage

      const userDecode = decodeToken(data); // Decodifica el token

      dispatch(editUserRedux(userDecode)); // Guarda los datos del usuario actualizado en el estado global
    } catch (error) {
      showErrorAlert(error.message);
      return;
    }
    return "ok";
  };
  // funcion edita la base de datos USER
  const payOrderPost = async (order) => {
    try {
      const { data } = await axios.post(`${URL}/api/shop/pay_order`, order);
      if (data.isSuccess) {

        window.location.href = data.href;
      }
    } catch (error) {
      showErrorAlert(error.message);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  const showWaitAlert = (message) => {
    Swal.fire({
      icon: "info", // Icono de información
      title: "Wait to redirect you",
      text: `${message}`, // Puedes personalizar este texto
      showConfirmButton: false, // No mostrar el botón de confirmación
      timer: 5000, // tiempo de 5 segundos
      timerProgressBar: true, //es una barra progress abajo
    });
  };

  const subTotal = cart.reduce(
    (accumulator, preset) => accumulator + preset.price,
    0
  );
  const total = () => {
    return deploymentCost + subTotal;
  };

  // Nuevo array para pasarle solo id|price|name al back
  const productsCart = cart.map((product) => {
    return { id: product.id, price: product.price, name: product.name };
  });

  // Objeto para mandarle a shop_pay_order
  const payPaypal = {
    email: user.email,
    name: formData.name,
    products: productsCart,
    totalAmount: deploymentCost + subTotal,
    paymentMethod: "paypal",
  };
  const payBank = {
    email: user.email,
    name: formData.name,
    products: productsCart,
    totalAmount: deploymentCost + subTotal,
    paymentMethod: "bank_transfer",
  };
  // Hndle a paypal
  const handlePaypalSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const userEdit = await editUser(formData);

    userEdit && payOrderPost(payPaypal);
    showWaitAlert("Please, wait a few moments while we redirect you..!");
    navigate("/");
  };
  // Hndle a bank_transfer
  const handleTransferSubmit = async (e) => {
    e.preventDefault();
    const userEdit = await editUser(formData);
    userEdit && payOrderPost(payBank);
    showSuccessAlert("You will receive an email with the bank account details");
    navigate("/");
  };

  useEffect(() => {
    if (login === false) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <div className="bg-gray-100 dark:bg-[#505050] h-screen overflow-auto">
      <Banner />
      <Nav />
      <div>
        <div className="container mx-auto p-1 mt-2 mb-2">
          <h2 className="inline-block mb-2 mt-2 w-full p-1 bg-gray-300 dark:text-white dark:bg-[#303030] text-black rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#000000] ">
            Checkout
          </h2>
        </div>
        <div className="bg-gray-300  dark:bg-[#818181] text-[#303030] mb-2 container mx-auto p-4 rounded shadow-2xl shadow-black">
          <div className="grid grid-cols-4 text-sm font-medium dark:text-white uppercase leading-normal">
            <div>Templates</div>
            <div>SubTotal</div>
            <div>Deployment Cost</div>
            <div>Total</div>
            <div>{cart.length}</div>
            <div>${subTotal}</div>
            <div>${deploymentCost}</div>
            <div>${total()}</div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center container mx-auto p-2 mt-2 rounded w-full mb-4"
        style={{
          background:
            "radial-gradient(20rem circle at bottom, rgb(0, 0, 0), rgb(50, 50, 50)",
        }}
      >
        {/* ************************************************************************ */}
        <div className="flex flex-wrap w-full items-start my-6 justify-center">
          {cart.map((template, index) => (
            /* Contenedor cards */
            <div
              key={index}
              className="rounded-md overflow-hidden shadow-xl m-4 w-1/6 hover:scale-105 ease-in duration-200"
              style={{
                background:
                  "radial-gradient(20rem circle at bottom, rgb(0, 0, 0), rgb(50, 50, 50)",
              }}
            >
              <img
                src={template.images[0]}
                alt={template.name}
                className="w-full h-36 object-cover py-2 px-2"
              />
            </div>
          ))}
        </div>
        {/* ************************************************************************ */}
        <div className="flex justify-between gap-12 my-10">
          <button
            onClick={() => setPopupOpen(true)}
            className="h-10 w-64 mt-2 bg-logo dark:bg-[#3a8a87] rounded-md md:px-2 md:w-64 text-sm font-semibold uppercase leading-normal text-black dark:text-white dark:hover:text-black hover:text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
          >
            Pay
          </button>
          {/*************************  FORM POPUP **********************************/}
          {isPopupOpen && (
            /* Este div me muestra lo que queda en el fondo */
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
              {/* <div className="p-1 rounded-md "> */}
              <form className="mt-1">
                {/* ... Tu formulario aquí */}
                <div className="isolate w-full h-2/3 bg-gray-300 dark:bg-[#303030] rounded-md px-6 sm:py-3 lg:px-3">
                  {/* Creo q le da animacion y el tamaño */}
                  <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                  >
                    {/* No se que hacia, pero si lo comentas no cambia nada...(por ahora) */}
                    {/* <div
                      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w- -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-grey to-white opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                      style={{
                        "clip-path":
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                      }}
                    ></div> */}
                  </div>
                  {/* Encabezado */}
                  <div className="mx-auto min-w-xl max-w-xl border-b border-[#303030] dark:border-[#909090]">
                    <div className="flex justify-end">
                      <i
                        onClick={() => setPopupOpen(false)}
                        className="fa-solid fa-x text-[#909090] hover:text-[#303030] dark:hover:text-white mt-3 "
                      />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#303030] dark:text-[#d1d1d1] sm:text-4xl  uppercase leading-normal">
                      Insert your data
                    </h2>
                    <p className="mt-2 text-sm font-medium text-[#505050] dark:text-[#d1d1d1] pb-3">
                      Please complete the following information. Once the
                      purchase is finished, you will receive the invoice via
                      email.
                    </p>
                  </div>
                  {/* Formulario */}
                  <form
                    action="#"
                    method="POST"
                    className="mx-auto max-w-xl mt-5"
                  >
                    {/* Formulario container */}
                    <div className="grid md:grid-rows-5">
                      {/* Nombre y apellido */}
                      <div className="grid md:grid-cols-2 grid-cols-1">
                        {/* Nombre */}
                        <div className=" flex flex-col items-start pl-5 pr-1">
                          <label
                            for="firstname"
                            className="text-sm font-semibold text-[#303030] dark:text-[#d1d1d1] px-2"
                          >
                            {" "}
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            autocomplete="off"
                            onChange={handleChange}
                            required
                            value={formData.firstname}
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                          />
                        </div>
                        {/* Apellido */}
                        <div className="flex flex-col items-start pl-1 pr-5">
                          <label
                            for="last-name"
                            className="text-sm font-semibold text-[#303030] dark:text-[#d1d1d1] px-2"
                          >
                            {" "}
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            autocomplete="family-name"
                            onChange={handleChange}
                            required
                            value={formData.lastname}
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                          />
                        </div>
                      </div>
                      {/* name (company name)*/}
                      <div className=" flex flex-col items-start px-5">
                        <label
                          for="name"
                          className="text-sm font-semibold text-[#303030] dark:text-[#d1d1d1] px-2"
                        >
                          {" "}
                          Company
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autocomplete="off"
                          onChange={handleChange}
                          required
                          value={formData.name}
                          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                        />
                      </div>

                      {/* City y zipcode */}
                      <div className="grid md:grid-cols-2 grid-cols-1">
                        {/* city */}
                        <div className=" flex flex-col items-start pl-5 pr-1">
                          <label
                            for="city"
                            className="text-sm font-semibold text-[#303030] dark:text-[#d1d1d1] px-2"
                          >
                            {" "}
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            onChange={handleChange}
                            required
                            value={formData.city}
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                          />
                        </div>
                        {/* zipcode */}
                        <div className=" flex flex-col items-start pl-1 pr-5">
                          <label
                            for="zipcode"
                            className="text-sm font-semibold text-[#303030] dark:text-[#d1d1d1] px-2"
                          >
                            {" "}
                            Zip Code
                          </label>
                          <input
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            autocomplete="postal-code"
                            onChange={handleChange}
                            required
                            value={Number(formData.zipcode)}
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                          />
                        </div>
                      </div>
                      {/* country */}
                      <div className=" flex flex-col items-start px-5">
                        <label
                          for="country"
                          className="text-sm font-semibold text-[#303030] dark:text-[#d1d1d1] px-2"
                        >
                          {" "}
                          Country
                        </label>
                        <input
                          type="country"
                          name="country"
                          autocomplete="country"
                          onChange={handleChange}
                          required
                          value={formData.country}
                          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                        />
                      </div>

                      {/* Botones */}
                      <div className="flex flex-col justify-center items-center mt-5 md:px-4 md:flex-row md:justify-center">
                        <button
                          type="button"
                          onClick={handlePaypalSubmit}
                          className="grid grid-cols-3 h-10 w-56 justify-center items-center bg-[#162966] rounded-md shadow-[0_4px_9px_-4px_#000000]  hover:bg-[#41538b] text-white hover:text-black mx-1 "
                        >
                          <i class="fa-brands fa-paypal text-3xl text-blue-700 grid-span-1 ml-2"></i>
                          <p className="text-sm uppercase grid-span-2 ml-3">
                            Paypal
                          </p>
                        </button>

                        <div class="mt-2">
                          <button
                            href="#"
                            type="button"
                            onClick={handleTransferSubmit}
                            class="flex items-center justify-center rounded-md border border-transparent bg-logo dark:bg-[#3a8a87] hover:bg-[#3a8a87] dark:hover:bg-logo dark:hover:text-black px-6 py-3 text-sm text-black uppercase shadow-sm h-10 mb-2 w-56 mx-1 dark:text-white hover:text-white"
                          >
                            <i
                              class="material-symbols-outlined mr-2 relative right-3"
                              style={{
                                "font-size": "30px",
                              }}
                            >
                              account_balance
                            </i>
                            Bank transfer
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayComponent;
