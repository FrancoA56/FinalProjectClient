import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import plantilla from "../../utils/img/plantilla.png";
import {
  removeModelFromCart,
  withDeployment,
  deploymentCost,
} from "../../Redux/actions";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
//import Footer from "../Footer/Footer";

const CartComponent = () => {
  const models = useSelector((state) => state.cart);
  const deployService = useSelector((state) => state.deployment);
  const deployCost = useSelector((state) => state.deploymentCost);
  const dispatch = useDispatch();

  const deploymentThing = (e) => {
    dispatch(withDeployment(e.target.value));
    dispatch(deploymentCost(e.target.value));
  };

  const totalPrice = (models) => {
    const total = models.reduce(
      (accumulated, model) => accumulated + model.price,
      0
    );
    return total;
  };

  return (
    <>
      <Banner />
      <Nav />
      <div className="bg-gray-100 min-h-screen dark:bg-[#505050]">
        <div className="container mx-auto p-4">
          <h1 className="bg-[#303030] inline-block mb-4 w-full rounded  px-7 pb-2.5 pt-3 text-sm font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000]">
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
              {models && models.length > 0 ? (
                models.map((model) => (
                  <div
                    className="m-2 grid grid-cols-7 h-48 rounded-md shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
       
                    style={{
                      background:
                        "linear-gradient(to left, rgb(50, 50, 50), rgb(40,40,40))",
                    }}
                    key={model.id}
                  >
                    {/* imagen */}
                    <div className="col-span-3 flex items-center p-2 justify-center overflow-hidden">
                      <NavLink to={`/detail/${model.id}`}>
                        <img
                          src={model.images[0]}
                          alt={model.name}
                          className="object-cover rounded-md hover:scale-105 ease-in duration-200"
                        />
                      </NavLink>
                    </div>
                    {/* El resto */}
                    <div className=" grid grid-rows-5 col-span-4">
                      {/* PRIMER FILA */}
                      <div className="flex items-center justify-end pr-3 pb-3">
                        <button
                          onClick={() =>
                            dispatch(removeModelFromCart(model.id))
                          }
                          className="text-[#505050] font-semibold hover:text-[#cecece]"
                        >
                          <i className="fa-solid fa-xmark " />
                        </button>
                      </div>
                      {/* Segunda FILA */}
                      <div className="px-12">
                        {" "}
                        <NavLink to={`/detail/${model.id}`}>
                          <h1 className="text-2xl font-bold uppercase text-[#cecece] border-b border-[#cecece] hover:scale-105 ease-in duration-200">
                            {model.name}
                          </h1>
                        </NavLink>
                      </div>
                      {/* Tercera FILA */}
                      <div className="row-span-2 grid grid-cols-4">
                        <div>
                          <p className="font-semibold mt-4 text-xl text-[#909090] capitalize">
                            {model.rating}{" "}
                            <i className="fa-solid fa-star relative bottom-0.5 text-yellow-600 text-sm" />{" "}
                          </p>
                          <span className="border-t border-[#909090] uppercase text-sm text-[#909090]">
                            rating
                          </span>
                        </div>
                        <div>
                          {" "}
                          <p className="font-semibold mt-4 text-xl text-[#909090] capitalize">
                            {model.category}
                          </p>
                          <span className="border-t border-[#909090] uppercase text-sm text-[#909090]">
                            category
                          </span>
                        </div>
                        <div>
                          {" "}
                          <p className="font-semibold mt-4 text-xl text-[#909090] capitalize">
                            {model.type}
                          </p>
                          <span className="border-t border-[#909090] uppercase text-sm text-[#909090]">
                            Type
                          </span>
                        </div>
                        <div>
                          {" "}
                          <p className="font-semibold mt-4 text-xl text-[#909090] capitalize">
                            {model.color}
                          </p>
                          <span className="border-t border-[#909090] uppercase text-sm text-[#909090]">
                            color
                          </span>
                        </div>
                      </div>
                      {/* cuarta FILA */}
                      <div></div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>

            {/* Columna derecha para el contenido del carrito */}
            <div
              className="col-span-12 md:col-span-4 rounded-md h-screen grid grid-rows-6 bg-gray-300 dark:bg-[#303030]"
            >
              {/* Encabezado */}
              <div className="flex flex-col items-center justify-center row-span-1">
                <label className="block m-3 text-sm uppercase font-semibold dark:text-[#707070]">
                  Deployment Service
                </label>
                <select
                  className="w-3/4 p-2 border-2 dark:bg-[#505050] dark:text-[#909090] dark:border-[#303030] rounded-md text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  onChange={(e) => deploymentThing(e)}
                >
                  <option
                    value={false}
                    className="text-sm font-medium uppercase leading-normal"
                  >
                    Without Deployment
                  </option>
                  <option
                    value={true}
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
                    className="w-3/4 border rounded-md border-[#909090] py-3 mt-3 shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  >
                    <div className="grid grid-cols-7">
                      <div className="flex items-center justify-center font-semibold col-span-2 uppercase ">
                        <h1> {model.name} </h1>
                      </div>
                      <div className="flex items-center mb-1 justify-center text-sm font-semibold text-[#303030] dark:text-[#707070] col-span-2 pt-1">
                        <h1> {model.type} </h1>
                      </div>
                      <div className="flex items-center justify-center font-semibold col-span-2">
                        <h1> $ {model.price} </h1>
                      </div>
                      <button
                        onClick={() => dispatch(removeModelFromCart(model.id))}
                        className="text-[#505050] font-semibold col-span-1"
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Detalles del carrito */}
              <div className="row-span-1 flex flex-col items-center justify-end pb-3">
                <div className="grid grid-cols-2 w-3/4">
                  <label className="flex ml-2 text-sm font-semibold uppercase leading-normal col-span-1">
                    Subtotal
                  </label>
                  <p className="flex justify-end mr-2 text-sm font-semibold uppercase leading-normal">
                    ${totalPrice(models)}
                  </p>
                </div>
                {deployService && (
                  <div className="grid grid-cols-2 w-3/4">
                    <label className="text-sm font-semibold uppercase leading-normal col-span-1 flex ml-2">
                      Deployment Cost
                    </label>
                    <p className="flex justify-end mr-2 text-sm font-semibold uppercase leading-normal">
                      ${deployCost}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 w-3/4">
                  <label className="flex ml-2 text-m font-semibold uppercase leading-normal col-span-1 border-t border-[#505050]">
                    Total
                  </label>
                  <p className="flex justify-end mr-2 text-m font-semibold uppercase leading-normal border-t border-[#505050]">
                    ${totalPrice(models) + (deployService ? deployCost : 0)}
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="row-span-1 flex flex-col items-center relative">
                <NavLink
                  to="/pay"
                  className="mt-7 inline-block w-3/4 bg-logo dark:bg-[#3a8a87] rounded-md 5ec3bf px-7 pb-2.5 pt-3 text-sm font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
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
