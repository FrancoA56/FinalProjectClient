//LIBRERIAS
import {useState} from "react"

// MODULOS
import style from "./shoppingCart.module.css"
import Plantillas from "./Plantillas";

//! PONER LOS VALUES DE LA ETIQUETA OPTION SEGUN TENGA EL VALOR LOS PEDIDOS DE ORDENAMIENTOS AL BACK EN SU URL

const SelectOrder = ({ selectedFilterColor, selectedCategory }) => {
  const [selectedOrder, setSelectedOrder] = useState("");

  //! Para manejar los cambios en los Order seleccionados
  const handleOrderChange = (event) => {
    const typeName = event.target.value;
    //actualizacion del estado para obtener el orden mas reciente
    setSelectedOrder(typeName);
  };

  return (
    <div>
      <h6 className={style.selectH1}>Order by:</h6>
      <div className={style.containerSelect}>
        <select className={style.select} onChange={handleOrderChange}>
          <option value="name a">A-Z</option>
          <option value="name d">Z-A</option>
          <option value="rating a">
            Highest score
          </option>
          <option value="rating d">
            Low score
          </option>
          <option value="release a">
            Most recent
          </option>
          <option value="release d">
            Most older
          </option>
          <option value="price d">
            Higher price
          </option>
          <option value="price a">
            Lower price
          </option>
        </select>
      </div>
      <Plantillas
        selectedFilterColor={selectedFilterColor}
        selectedOrder={selectedOrder}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default SelectOrder;