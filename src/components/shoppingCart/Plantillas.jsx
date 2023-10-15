// LIBRERIAS
import axios from "axios";
import { useEffect, useState } from "react";
import imagen from "../../utils/img/plantilla.png";
import { addModelToCart, removeModelFromCart } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Plantillas = ({
  selectedOrder,
  selectedFilterColor,
  selectedCategory,
  selectedTypes,
}) => {
  const URL = process.env.REACT_APP_API;
  const [templates, setTemplates] = useState([]);
  const dispatch = useDispatch();

  // ? CAMBIO DE BOTON SI SE AGREGA AL CARRITO
  const cart = useSelector((state) => state.cart);

  // ? SELLOS
  const Premium =
    "https://res.cloudinary.com/dp6ojzhsc/image/upload/v1697121058/Sellos/sello_premium-fotor-bg-remover-20231012112737_b5obv0.png";
  const Medium =
    "https://res.cloudinary.com/dp6ojzhsc/image/upload/v1697121057/Sellos/sello_medium-fotor-bg-remover-20231012112932_pupkib.png";

  // ? PETICIONES DE FILTROS Y ORDENES
  const fetchTemplates = async (filters, orderType, orderPriority) => {
    try {
      const response = await axios.get(`${URL}/api/preset`, {
        params: {
          filters: JSON.stringify(filters),
          orderType,
          orderPriority,
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
    const category = selectedCategory.join(" ");
    const defaultColor = selectedFilterColor.join(" ");
    const type = selectedTypes.join(" ");
    const order = selectedOrder.split(" ");
    const orderName = order[0];
    const orderValue = order[1];

    const filters = {};
    const orderType = orderName;
    const orderPriority = orderValue;

    if (selectedCategory.length > 0) {
      filters.category = category;
    }

    if (selectedFilterColor.length > 0) {
      filters.defaultColor = defaultColor;
    }

    if (selectedTypes.length > 0) {
      filters.type = type;
    }

    fetchTemplates(filters, orderType, orderPriority);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilterColor, selectedCategory, selectedOrder, selectedTypes]);

  console.log("EL ESTADO DE CART" + cart[0]);
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
    <div className="flex flex-wrap w-full items-start my-6 justify-center">
      {templates.map((img, index) => (
        /* Contenedor cards */
        <div
          key={index}
          className="rounded-md overflow-hidden shadow-xl m-4 w-1/4 hover:scale-105 ease-in duration-200"
          style={{
            background:
              "radial-gradient(20rem circle at bottom, rgb(0, 0, 0), rgb(50, 50, 50)",
          }}
        >
          <Link to={`/detail/${img.id}`}>
            <img
              src={imagen}
              alt={img.name}
              className="w-full h-64 object-cover"
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
            {img.category === "premium" && (
              <img src={Premium} alt="Premium" className="w-10 -mb-8 mt-1" />
            )}

            {img.category === "medium" && (
              <img src={Medium} alt="medium" className="w-11 -mb-9 mt-1" />
            )}
            {img.category === "basic" && <div className="mb-3"></div>}

            {cart.some((item) => item.id === img.id) ? (
              <button
                className={`${
                  img.category === "basic" ? "-ml-7" : "ml-16"
                } inline-block bg-[#505050] w-29 -mr-10 rounded 5ec3bf px-2 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white text-opacity-60 shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                onClick={removePreset(img.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className={`${
                  img.category === "basic" ? "-ml-7" : "ml-16"
                } inline-block bg-[#505050] w-33 -mr-10 rounded 5ec3bf px-7 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)"]`}
                onClick={buyPreset(img.id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plantillas;
