// LIBRERIAS
import axios from "axios";
import { useEffect, useState } from "react";
import imagen from "../../utils/img/plantilla.png";
import { addModelToCart } from "../../Redux/actions";
import { useDispatch } from "react-redux";
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
      console.log(data)
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

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
  }, [selectedFilterColor, selectedCategory, selectedOrder, selectedTypes]);

  const buyPreset = (id) => {
    return () => {
      dispatch(addModelToCart(id));
    };
  };

  return (
    /* contenedor */
    <div className="flex flex-wrap my-6 justify-center">
      {templates.map((img, index) => (
        /* Contenedor cards */
        <div
          key={index}
          className="rounded-md overflow-hidden shadow-xl m-4 w-1/3 hover:scale-105 ease-in duration-200"
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
              <Link to={`/detail/${img.id}`} >
              {img.name}{" "}
              </Link>
              <span className="text-white font-thin capitalize" >| {img.type}</span>
            </div>
            <div className="text-white text-lg mt-3">
              <strong>${img.price}</strong>
            </div>

            <button className="mt-3 inline-block bg-[#505050] w-3/4 rounded 5ec3bf px-7 pb-1.5 pt-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]" onClick={buyPreset(img.id)}>
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plantillas;
