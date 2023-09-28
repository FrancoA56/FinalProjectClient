//LIBRERIAS
import { useDispatch } from "react-redux";
import {useState} from "react"

// MODULOS
import style from "./shoppingCart.module.css"

//REDUX
import {
  orderByNameAscendant,
  orderByNameDescendant,
  orderByRating,
  orderBySales,
  orderByReleased,
  orderByPriceAscendant,
  orderByPriceDescendant,
} from "../../Redux/actions";

const SelectOrder = () => {
const dispatch = useDispatch()


  // ? AUXILIAR PARA ORDENAMIENTOS
  const [aux, setAux] = useState(false);

  // ? ORDEN NOMBRE ASECENDENTE
  const handleOrderAscen = (event) => {
    dispatch(orderByNameAscendant(event.target.value));
    setAux(true);
  };

  // ? ORDEN NOMBRE DESCEN
  const handleOrderDesc = (event) => {
    dispatch(orderByNameDescendant(event.target.value));
    setAux(true);
  };

  // ? ORDEN MAYOR PUNTAJE
  const handleByRating = (event) => {
    dispatch(orderByRating(event.target.value));
    setAux(true);
  };

  // ? ORDEN MAS VENDIDOS
  const handleBySales = (event) => {
    dispatch(orderBySales(event.target.value));
    setAux(true);
  };

  // ? ORDEN FECHA DE LANZAMIENTO
  const handleByReleased = (event) => {
    dispatch(orderByReleased(event.target.value));
    setAux(true);
  };

  // ? ORDEN MAYOR PRECIO
  const handleByPriceAscendant = (event) => {
    dispatch(orderByPriceAscendant(event.target.value));
    setAux(true);
  };

  // ? ORDEN MENOR PRECIO
  const handleByPriceDescendant = (event) => {
    dispatch(orderByPriceDescendant(event.target.value));
    setAux(true);
  };
  return (
    <div>
      <h6 className={style.selectH1}>Ordenar por:</h6>
      <div className={style.containerSelect}>
        <select className={style.select}>
          <option value="1" onChange={handleOrderAscen}>
            A-Z
          </option>
          <option value="2" onChange={handleOrderDesc}>
            Z-A
          </option>
          <option value="3" onChange={handleByRating}>
            Mayor puntaje
          </option>
          <option value="4" onChange={handleBySales}>
            Mas vendidos
          </option>
          <option value="5" onChange={handleByReleased}>
            Fecha de lanzamiento
          </option>
          <option value="6" onChange={handleByPriceAscendant}>
            Mayor precio
          </option>
          <option value="7" onChange={handleByPriceDescendant}>
            Menor precio
          </option>
        </select>
      </div>
    </div>
  );

}

export default SelectOrder;