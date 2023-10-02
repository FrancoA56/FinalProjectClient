//LIBRERIAS
import axios from "axios";
import { useEffect, useState } from "react";

//MODULOS
import style from "./shoppingCart.module.css";

const Plantillas = ({
  selectedOrder,
  selectedFilterColor,
  selectedCategory,
}) => {
  const URL = "http://localhost:3001/api/preset";
  const [templates, setTemplates] = useState([]);

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
    <div className={style.centrarPlantillas}>
      {templates.map((img, index) => {
        return (
          <div className={style.containerImg} key={index}>
            {/* <img src={img.url} alt={img.name} className={style.img} /> */}
            <p>{img.name}</p>
            <p>{img.type}</p>
            <p>${img.price}</p>
          </div>
        );
      })}
    </div>
  );
};


export default Plantillas;
