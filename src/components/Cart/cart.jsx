import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import plantilla from "../../utils/img/plantilla.png";
import { removeModelFromCart } from "../../Redux/actions";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
//import Footer from "../Footer/Footer";

const CartComponent = () => {
  const models = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = (models) => {
    const total = models.reduce(
      (accumulated, model) => accumulated + model.price,
      0
    );
    return total;
  };

  const [deployService, setDeployService] = useState(false);

  const calculateDeployCost = () => {
    // Lógica para calcular el costo de despliegue
    return models.length * 10 + 30; // Por ejemplo, $10 por cada producto
  };

  const deployCost = calculateDeployCost();

  return (
    <>
      <Banner />
      <Nav />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <h1
            className="inline-block bg-[#5ec3bf] mb-4 w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
            style={{ "background-color": "#303030" }}
          >
            Shopping Cart
          </h1>
          <div className="grid grid-cols-12 gap-4">
            {/* Columna izquierda para la imagen del producto */}
            <div
              className="col-span-12 md:col-span-8 h-screen rounded-md overflow-auto"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
              }}
            >
              {models.map((model) => (
                <div
                  className="m-2 grid grid-cols-7 h-48 rounded-md"
                  style={{
                    background:
                      "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
                  }}
                  key={model.id}
                >
                  {/* imagen */}
                  <div className="col-span-3 flex items-center justify-center m-1 overflow-hidden rounded-md">
                    <img
                      src={plantilla}
                      alt={model.name}
                      className="object-cover"
                    />
                  </div>
                  {/* El resto */}
                  <div className=" grid grid-cols-5 col-span-4 ">
                    <div className="col-span-2 flex flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold uppercase">
                        {model.name}
                      </h1>
                      <hr />
                      <p className="font-semibold mt-4 text-[#303030]">
                        {model.category}
                        <span className="text-[#303030]"> | {model.type}</span>
                      </p>

                      <p className="font-semibold mt-4">
                        {model.rating}{" "}
                        <i className="fa-solid fa-star text-yellow-600" />{" "}
                      </p>
                    </div>
                    {/* Precio */}
                    <div className="col-span-2 flex items-center justify-center">
                      <h1 className="text-3xl font-bold">$ {model.price}</h1>
                    </div>
                    {/* cerrar */}
                    <div className="flex items-start justify-end mr-2">
                      <button
                        onClick={() => dispatch(removeModelFromCart(model.id))}
                        className="text-[#505050  ] font-semibold bottom-16 left-16"
                      >
                        <i class="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Columna derecha para el contenido del carrito */}
            <div
              className="col-span-12 md:col-span-4 rounded-md h-screen grid grid-rows-6"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
              }}
            >
              {/* Encabezado */}
              <div className="mt-5 flex flex-col items-center justify-center row-span-1">
                <label className="block m-3 text-sm font-medium uppercase leading-normal">
                  Deployment Service
                </label>
                <select
                  className="w-3/4 p-2 border-2 shadow-lg rounded text-sm font-medium uppercase leading-normal"
                  onChange={(e) => setDeployService(e.target.value === "true")}
                >
                  <option
                    value="false"
                    className="text-sm font-medium uppercase leading-normal"
                  >
                    Without Deployment
                  </option>
                  <option
                    value="true"
                    className="text-sm font-medium uppercase leading-normal"
                  >
                    With Deployment
                  </option>
                </select>
              </div>

              {/* medio */}
              <div className="row-span-3 flex flex-col mt-5 items-center overflow-auto">
                {models.map((model) => (
                  <div
                    key={model.id}
                    className="w-3/4 border-b border-gray-300 py-3 mt-3"
                  >
                    <div className="grid grid-cols-7">
                      <div className="font-semibold col-span-2 uppercase ">
                        <h1> {model.name} </h1>
                      </div>
                      <div className="text-sm font-semibold text-[#303030] col-span-2 pt-1">
                        <h1> {model.type} </h1>
                      </div>
                      <div className="font-semibold col-span-2">
                        <h1> $ {model.price} </h1>
                      </div>
                      <button
                        onClick={() => dispatch(removeModelFromCart(model.id))}
                        className="text-[#505050] font-semibold col-span-1"
                      >
                        <i class="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Detalles del carrito */}
              <div className="row-span-1 flex flex-col justify-start">
                <div className="grid grid-cols-2">
                  <label className="flex ml-2 text-sm font-medium uppercase leading-normal col-span-1">
                    Subtotal
                  </label>
                  <p className="flex justify-end mr-2 text-sm font-medium uppercase leading-normal">
                    ${totalPrice(models)}
                  </p>
                </div>
                {deployService && (
                  <div className="grid grid-cols-2">
                    <label className="text-sm font-medium uppercase leading-normal col-span-1 flex ml-2">
                      Deployment Cost
                    </label>
                    <p className="flex justify-end mr-2 text-sm font-medium uppercase leading-normal">
                      ${deployCost}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2">
                  <label className="flex ml-2 text-sm font-medium uppercase leading-normal col-span-1">
                    Total
                  </label>
                  <p className="flex justify-end mr-2 text-sm font-medium uppercase leading-normal">
                    ${totalPrice(models) + (deployService ? deployCost : 0)}
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="row-span-1 flex flex-col items-center">
                <NavLink
                  to="/pay"
                  className="inline-block bg-logo w-3/4 rounded mt-5 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                  text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                >
                  Continue to Payment
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
