import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import style from "./shoppingCart.module.css";
// import { addModelToCart, removeModelToCart } from "../../Redux/actions";
import Nav from "../Nav/Nav";

const CartComponent = () => {
  // const dispatch = useDispatch();
  // const models = useSelector((state) => state.cart);

  // useEffect(() => {
  // addModelToCart();
  //   if (!loggedIn) {
  //     Navigate("/");
  //   }
  // }, models);

  return (
    <>
      <Nav />
      <div className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
        {/* Aquí puedes listar los productos en el carrito */}
        <div className="bg-white p-4 rounded shadow-md">
          {/* Detalles del producto */}
          <div className="flex justify-between items-center mb-2">
            <img
              src="imagen-producto.jpg"
              alt="Producto"
              className="w-16 h-16"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">Nombre del Producto</h2>
              <p className="text-gray-600">Precio: $XX.XX</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Cantidad:</span>
              <input
                type="number"
                className="w-10 h-8 ml-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          {/* Más productos pueden ir aquí */}
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          {/* Detalles del producto */}
          <div className="flex justify-between items-center mb-2">
            <img
              src="imagen-producto.jpg"
              alt="Producto"
              className="w-16 h-16"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">Nombre del Producto</h2>
              <p className="text-gray-600">Precio: $XX.XX</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Cantidad:</span>
              <input
                type="number"
                className="w-10 h-8 ml-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          {/* Más productos pueden ir aquí */}
        </div> <div className="bg-white p-4 rounded shadow-md">
          {/* Detalles del producto */}
          <div className="flex justify-between items-center mb-2">
            <img
              src="imagen-producto.jpg"
              alt="Producto"
              className="w-16 h-16"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">Nombre del Producto</h2>
              <p className="text-gray-600">Precio: $XX.XX</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Cantidad:</span>
              <input
                type="number"
                className="w-10 h-8 ml-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          {/* Más productos pueden ir aquí */}
        </div>
        {/* Total y botones de acción */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Total: $XXX.XX</p>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Pagar
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
