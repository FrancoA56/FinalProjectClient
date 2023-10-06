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
  const URL = "http://localhost:3001/api/preset";
  const [templates, setTemplates] = useState([]);
  const dispatch = useDispatch();

  const fetchTemplates = async (filters, orderType, orderPriority) => {
    try {
      const response = await axios.get(URL, {
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
    <div className="flex flex-wrap my-6 ml-20 justify-start">
      {templates.map((img, index) => (
        /* Contenedor cards */
        <div
          key={index}
          className="rounded-md overflow-hidden shadow-xl m-4"
          style={{
            background:
              "radial-gradient(20rem circle at bottom, rgb(0, 0, 0), rgb(50, 50, 50)",
            filter: "drop-shadow(5px 5px 10px black)",
          }}
        >
          <Link to={`/detail/${img.id}`}>
            <img
              src={imagen}
              alt={img.name}
              className="w-full h-64 object-cover"
            />
          </Link>
          <div className="px-6 py-4 grid grid-cols-2">
            <div className="font-mediun uppercase leading-normal font-semibold mb-2 text-white">
              {img.name}
            </div>
            <div className="text-white text-lg">
              <strong>${img.price}</strong>
            </div>
            <div className="text-white text-base capitalize mb-2">
              {img.type}
            </div>
            <button className="bg-logo" onClick={buyPreset(img.id)}>
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plantillas;
