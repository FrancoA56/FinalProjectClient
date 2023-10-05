import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import {
  removeModelFromCart,
  removeAllModelCart,
  undoRemoveAllModelCart,
} from "../../Redux/actions";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
//import Footer from "../Footer/Footer";

const CartComponent = () => {
  const models = useSelector((state) => state.cart);
  const [emptyCart, setEmptyCart] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = (models) => {
    const total = models.reduce(
      (accumulated, model) => accumulated + model.price,
      0
    );
    return total;
  };

  const emptyCartOnClick = () => {
    dispatch(removeAllModelCart());
    setEmptyCart(true);
  };

  const undoEmptyCartOnClick = () => {
    dispatch(undoRemoveAllModelCart());
    setEmptyCart(false);
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
              className="col-span-12 md:col-span-8"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
              }}
            >
              {models.map((model, index) => (
                <div key={index} className="mb-4">
                  <img src={model.url} alt={model.name} className="w-full" />
                </div>
              ))}
            </div>

            {/* Columna derecha para el contenido del carrito */}
            <div
              className="col-span-12 md:col-span-4"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
              }}
            >
              {models.map((model, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-300 p-4 mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={model.url}
                      alt="Producto"
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{model.name}</h2>
                      <p className="text-gray-600">${model.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeModelFromCart(model.id))}
                    className="text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Detalles del carrito */}
              <div className="mb-2 left">
                <label
                  className="block m-3 text-sm font-medium uppercase leading-normal"
                >
                  Deployment Service
                </label>
                <select
                  className="w-full p-2 border-2 shadow-lg rounded text-sm font-medium uppercase leading-normal"
                  onChange={(e) => setDeployService(e.target.value === "true")}
                >
                  <option value="false" className="text-sm font-medium uppercase leading-normal">Without Deployment</option>
                  <option value="true" className="text-sm font-medium uppercase leading-normal">With Deployment</option>
                </select>
              </div>
              <div className="mb-2 left">
                <label className="block mt-4 text-sm font-medium uppercase leading-normal">Subtotal</label>
                <p className="text-sm font-medium uppercase leading-normal">${totalPrice(models)}</p>
              </div>
              {deployService && (
                <div className="mb-2">
                  <label className="block mt-4 text-sm font-medium uppercase leading-normal">Deployment Cost</label>
                  <p className="block mt-4 text-sm font-medium uppercase leading-normal">${deployCost}</p>
                </div>
              )}
              <div className="mb-2">
                <label className="block mt-4 font-semibold text-sm font-medium uppercase leading-normal">Total</label>
                <p className="text-sm font-medium uppercase leading-normal">${totalPrice(models) + (deployService ? deployCost : 0)}</p>
              </div>
              <div className="flex justify-between mx-4 my-8">
                {!emptyCart ? (
                  <button
                    onClick={emptyCartOnClick}
                    className="inline-block bg-[#5ec3bf] w-auto rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                    text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    style={{ "background-color": "#303030" }}
                  >
                    Empty Cart
                  </button>
                ) : (
                  <button
                    onClick={undoEmptyCartOnClick}
                    className="inline-block bg-logo w-auto rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    style={{ "background-color": "#303030" }}
                  >
                    Undo
                  </button>
                )}
                <NavLink
                  to="/pay"
                  className="inline-block bg-logo w-auto rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
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