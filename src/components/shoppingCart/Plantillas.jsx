// LIBRERIAS
import axios from "axios";
import { useEffect, useState } from "react";
import {
  addModelToCart,
  removeModelFromCart,
  setPage,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Plantillas = ({
  selectedOrder,
  selectedFilterColor,
  selectedCategory,
  selectedTypes,
}) => {
  const URL = process.env.REACT_APP_API;
  const [templates, setTemplates] = useState([]);
  const dispatch = useDispatch();

  // ? Solo plantillas habilitadas
  const hideDisabled = true;

  // ? CAMBIO DE BOTON SI SE AGREGA AL CARRITO
  const cart = useSelector((state) => state.cart);

  // ? PAGINATION
  const [templatesNum, setTemplatesNum] = useState([]);
  const presetsperPage = 4;
  const currentPage = useSelector((state) => state.currentPage);
  const fetchTemplatesNum = async (filters, orderType, orderPriority) => {
    try {
      const response = await axios.get(`${URL}/api/preset`, {
        params: {
          filters: JSON.stringify(filters),
          orderType,
          orderPriority,
          hideDisabled,
          quantity: presetsperPage,
          page: currentPage + 1,
        },
      });

      const { data } = response;
      setTemplatesNum(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  // ? PETICIONES DE FILTROS Y ORDENES
  const fetchTemplates = async (filters, orderType, orderPriority) => {
    try {
      const response = await axios.get(`${URL}/api/preset`, {
        params: {
          filters: JSON.stringify(filters),
          orderType,
          orderPriority,
          hideDisabled,
          quantity: presetsperPage,
          page: currentPage,
        },
      });
      
      const { data } = response;
      setTemplates(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  // ? ASIGNACIONES DE FILTROS Y ORDENES
  useEffect(() => {
    const category = selectedCategory;
    const defaultColor = selectedFilterColor;
    const type = selectedTypes;
    const order = selectedOrder.split(" ");
    const orderName = order[0];
    const orderValue = order[1];

    const filters = {};
    const orderType = orderName;
    const orderPriority = orderValue;

    if (selectedCategory.length > 0) {
      filters.categories = category;
    }

    if (selectedFilterColor.length > 0) {
      filters.defaultColors = defaultColor;
    }

    if (selectedTypes.length > 0) {
      filters.types = type;
    }
    fetchTemplatesNum(filters, orderType, orderPriority);
    fetchTemplates(filters, orderType, orderPriority);
  }, [
    selectedFilterColor,
    selectedCategory,
    selectedOrder,
    selectedTypes,
    currentPage,
  ]);

  const buyPreset = (id) => {
    return () => {
      dispatch(addModelToCart(id));
    };
  };
  const removePreset = (id) => {
    return () => {
      dispatch(removeModelFromCart(id));
    };
  };

  return (
    /* contenedor */
    <div className="flex flex-wrap w-full items-start my-4 justify-center font-custom">
      
      {templates.map(
        (img, index) =>
          /* Contenedor cards */

          /****************  PREMIUM **********************/
          (img.category === "premium" && (
            <div
              key={index}
              className={`${
                img.isBought && `grayscale`
              } rounded-md overflow-hidden shadow-[0_4px_9px_2px_#fffb003e] m-4 border-2 border-warning-700 w-2/5 hover:scale-105 ease-in duration-200`}
              style={{
                background:
                  "radial-gradient(20rem circle at bottom, rgb(10, 10, 10), rgb(50, 50, 50)",
              }}
            >
              <Link to={`/detail/${img.id}`}>
                <img
                  src={img.images[0]}
                  alt={img.name}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-medium uppercase leading-normal  text-white">
                  <Link to={`/detail/${img.id}`}>{img.name} </Link>
                  <span className="text-white font-thin capitalize">
                    | {img.type}
                  </span>
                </div>
                <div className="text-white text-lg mt-3">
                  <strong>${img.price}</strong>
                </div>

                {img.isBought ? (
                  <p className="text-white">Bought</p>
                ) : cart.some((item) => item.id === img.id) ? (
                  <button
                    className={`inline-block bg-[#202020] w-29 rounded px-2 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white text-opacity-60 shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                    onClick={removePreset(img.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className={`inline-block bg-[#505050] w-33 rounded px-7 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                    onClick={buyPreset(img.id)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          )) ||
          /* **************** MEDIUM ********************* */
          (img.category === "medium" && (
            <div
              key={index}
              className={`${
                img.isBought && `grayscale`
              } rounded-md overflow-hidden m-4 border-2 shadow-[0_4px_9px_2px_#cacaca99] border-slate-500 w-2/5 hover:scale-105 ease-in duration-200`}
              style={{
                background:
                  "radial-gradient(20rem circle at bottom, rgb(10, 10, 10), rgb(50, 50, 50)",
              }}
            >
              <Link to={`/detail/${img.id}`}>
                <img
                  src={img.images[0]}
                  alt={img.name}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-medium uppercase leading-normal  text-white">
                  <Link to={`/detail/${img.id}`}>{img.name} </Link>
                  <span className="text-white font-thin capitalize">
                    | {img.type}
                  </span>
                </div>
                <div className="text-white text-lg mt-3">
                  <strong>${img.price}</strong>
                </div>

                {cart.some((item) => item.id === img.id) ? (
                  <button
                    className={`inline-block bg-[#202020] w-29 rounded px-2 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white text-opacity-60 shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                    onClick={removePreset(img.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className={`
                inline-block bg-[#505050] w-33 rounded px-7 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                    onClick={buyPreset(img.id)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          )) ||
          /* **************** BASIC ********************* */
          (img.category === "basic" && (
            <div
              key={index}
              className={`${
                img.isBought && `grayscale`
              } border-2 shadow-[0_4px_9px_2px_#ff99003d] border-orange-900 rounded-md overflow-hidden m-4 w-2/5 hover:scale-105 ease-in duration-200`}
              style={{
                background:
                  "radial-gradient(20rem circle at bottom, rgb(10, 10, 10), rgb(50, 50, 50)",
              }}
            >
              <Link to={`/detail/${img.id}`}>
                <img
                  src={img.images[0]}
                  alt={img.name}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-medium uppercase leading-normal  text-white">
                  <Link to={`/detail/${img.id}`}>{img.name} </Link>
                  <span className="text-white font-thin capitalize">
                    | {img.type}
                  </span>
                </div>
                <div className="text-white text-lg mt-3">
                  <strong>${img.price}</strong>
                </div>

                {cart.some((item) => item.id === img.id) ? (
                  <button
                    className={`inline-block bg-[#202020] w-29 rounded px-2 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white text-opacity-60 shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                    onClick={removePreset(img.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className={`inline-block bg-[#505050] w-33 rounded px-7 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                    onClick={buyPreset(img.id)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))
        /* *********************************************  */
      )}
      <Pagination
        currentPage={currentPage}
        numTemplates={templatesNum.length}
        templates={templates.length}
      />
    </div>
  );
};

export default Plantillas;
