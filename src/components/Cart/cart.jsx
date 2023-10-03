import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addModelToCart,
  removeModelFromCart,
  removeAllModelCart,
  undoRemoveAllModelCart,
} from "../../Redux/actions";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const CartComponent = () => {
  const models = useSelector((state) => state.cart);
  const [emptyCart, setEmptyCart] = useState(false);

  const totalPrice = (models) => {
    const total = models.reduce(
      (accumulated, model) => accumulated + model.price,
      0
    );
    return total;
  };

  const emptyCartOnClick = () => {
    removeAllModelCart();
    setEmptyCart(true);
  };

  const undoEmptyCartOnClick = () => {
    undoRemoveAllModelCart();
    setEmptyCart(false);
  };

  const [deployService, setDeployService] = useState(false);

  const calculateDeployCost = () => {
    // Lógica para calcular el costo de despliegue
    return models.length * 10; // Por ejemplo, $10 por cada producto
  };

  const deployCost = calculateDeployCost();

  return (
    <>
      <Nav />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-8 ">My Cart</h1>
          <div className="flex justify-between">
            {/* Productos */}
            <div className="w-2/3 mr-4">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-300 p-4"
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
                    onClick={() => removeModelFromCart(model.id)}
                    className="text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
              {models.length === 0 && (
                <p className="text-center mt-4 text-gray-600">
                  Your cart is empty.
                </p>
              )}
            </div>
            {/* Detalles */}
            <div className="w-1/3 p-4 bg-white rounded shadow-md mr-24">
              <h2 className="text-lg font-semibold m-2">Details</h2>
              <div className="mb-2">
                <label className="block m-3">Deployment Service</label>
                <select
                  className="w-full p-2 border-2 shadow-lg rounded"
                  onChange={(e) => setDeployService(e.target.value === "true")}
                >
                  <option value="false">Without Deployment</option>
                  <option value="true">With Deployment</option>
                </select>
              </div>
              <div className="mb-2 left ">
                <label className="block mt-4">Subtotal</label>
                <p>${totalPrice(models)}</p>
              </div>
              {deployService && (
                <div className="mb-2">
                  <label className="block mt-4">Deployment Cost</label>
                  <p>${deployCost}</p>
                </div>
              )}
              <div className="mb-2">
                <label className="block mt-4 font-semibold">Total</label>
                <p>${totalPrice(models) + (deployService ? deployCost : 0)}</p>
              </div>
              <div className="flex justify-between mx-4 my-8">
                {!emptyCart ? (
                  <button
                    onClick={emptyCartOnClick}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Empty Cart
                  </button>
                ) : (
                  <button
                    onClick={undoEmptyCartOnClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Undo
                  </button>
                )}
                <NavLink
                  to="/pay"
                  className="bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Continue
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartComponent;
