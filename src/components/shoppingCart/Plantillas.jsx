//LIBRERIAS
import axios from "axios";
import { useEffect, useState } from "react";
import imagen from "../../utils/img/plantilla.png";
import { addModelToCart } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


//MODULOS

const Plantillas = ({
  selectedOrder,
  selectedFilterColor,
  selectedCategory,
}) => {
  const URL = "http://localhost:3001/api/preset";
  const [templates, setTemplates] = useState([]);
  const dispatch = useDispatch();

  // FILTRADOS
  const category = selectedCategory.join(" ");
  const defaultColor = selectedFilterColor.join(" ");
  const filter1 = {
    defaultColor: defaultColor,
  };
  const filter2 = {
    category: category,
  };
  const filter3 = {
    defaultColor: defaultColor,
    category: category,
  };
  //ORDENAMIENTOS
  const order = selectedOrder.split(" ");
  const orderName = order[0];
  const orderValue = order[1];

  const buyPreset = (id) => {
    return () => {
      dispatch(addModelToCart(id));
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ? SI NO TENGO FILTRO NI ORDEN
        if (
          selectedCategory.length <= 0 &&
          selectedFilterColor.length <= 0 &&
          selectedOrder.length <= 0
        ) {
          const response = await axios.get(`${URL}`);
          const { data } = response;
          setTemplates(data);
        }

        // ? SI NO TENGO CATEGORIA NI ORDEN MANDO FILTRO POR COLOR
        else if (selectedCategory.length <= 0 && selectedOrder.length <= 0) {
          const response = await axios.get(
            `${URL}/?filters=${JSON.stringify(filter1)}`
          );
          const { data } = response;
          setTemplates(data);
        }

        // ? SI NO TENGO COLOR NI ORDEN MANDO FILTRO POR CATEGORIA
        else if (selectedFilterColor.length <= 0 && selectedOrder.length <= 0) {
          const response = await axios.get(
            `${URL}/?filters=${JSON.stringify(filter2)}`
          );
          const { data } = response;
          setTemplates(data);
        }

        // ? SI NO TENGO CATEGORIA NI COLOR MANDO EL ORDEN
        else if (
          selectedCategory.length <= 0 &&
          selectedFilterColor.length <= 0
        ) {
          const response = await axios.get(
            `${URL}/?orderType=${orderName}&orderPriority=${orderValue}`
          );
          const { data } = response;
          setTemplates(data);
        }

        // ? SI NO TENGO COLOR MANDO ORDEN Y CATEGORIA
        else if (selectedFilterColor.length <= 0) {
          const response = await axios.get(
            `${URL}/?filters=${JSON.stringify(
              filter2
            )}&orderType=${orderName}&orderPriority=${orderValue}`
          );
          const { data } = response;
          setTemplates(data);
        }
        // ? SI NO TENGO CATEGORIA MANDO TENGO ORDEN Y COLOR
        else if (selectedCategory.length <= 0) {
          const response = await axios.get(
            `${URL}/?filters=${JSON.stringify(
              filter1
            )}&orderType=${orderName}&orderPriority=${orderValue}`
          );
          const { data } = response;
          setTemplates(data);
        }
        // ? SI TENGO ORDEN, COLOR Y CATEGORIA
        else if (selectedCategory.length <= 0) {
          const response = await axios.get(
            `${URL}/?filters=${JSON.stringify(
              filter3
            )}&orderType=${orderName}&orderPriority=${orderValue}`
          );
          const { data } = response;
          setTemplates(data);
        }

        // ? SI NO TENGO COLOR NI CATEGORIA MANDO ORDEN
        else if (
          selectedCategory.length <= 0 &&
          selectedFilterColor.length <= 0
        ) {
          const response = await axios.get(
            `${URL}/?orderType=${orderName}&orderPriority=${orderValue}`
          );
          const { data } = response;
          setTemplates(data);
        }
        // ? SI NO TENGO ORDEN Y SI TENGO CATEGORIA Y COLOR
        else {
          const response = await axios.get(
            `${URL}/?filters=${JSON.stringify(filter3)}`
          );
          const { data } = response;
          setTemplates(data);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, [selectedFilterColor, selectedCategory, selectedOrder]);

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
            alt={"img.name"}
            className="w-full h-64 object-cover"
          />
          </Link>
          <div className="px-6 py-4 grid grid-cols-2">
            <div className="font-mediun uppercase leading-normal font-semibold mb-2 text-white">
              <Link to={`/detail/${img.name}`} >
              {img.name}
              </Link>
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
