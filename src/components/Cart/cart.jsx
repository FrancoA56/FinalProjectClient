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
  // const dispatch = useDispatch();
  const models = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [emptyCart, setEmptyCart] = useState(false);

  // useEffect(() => {
  // addModelToCart();
  //   if (!loggedIn) {
  //     Navigate("/");
  //   }
  // }, models);

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

  return (
    <>
    {console.log(user)}
      <Nav />
      <div className="bg-bgc p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping cart</h1>
        {/* Aquí puedes listar los productos en el carrito */}
        <div className="bg-bgce p-4 rounded shadow-md">
          {/* Detalles del producto */}
          {models.map((model) => (
            <div className="flex justify-between items-center mb-2">
              <img src={model.url} alt="Producto" className="w-16 h-16" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{model.name}</h2>
                <p className="text-gray-600">${model.price}</p>
              </div>
            </div>
          ))}
          {/* Más productos pueden ir aquí */}
        </div>
        {/* Total y botones de acción */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold c">
              Total: $ {totalPrice(models)}
            </p>
            <div>
              <NavLink as={NavLink} to="/pay" className="bg-blue-700 text-white px-4 py-2 rounded mr-2">
                Pay
              </NavLink>
              {!emptyCart ? (
                <button
                  onClick={emptyCartOnClick}
                  className="bg-botc text-white px-4 py-2 rounded w-30"
                >
                  Empty cart
                </button>
              ) : (
                <button
                  onClick={undoEmptyCartOnClick}
                  className="bg-botc text-white px-4 py-2 rounded w-30"
                >
                  Undo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartComponent;
