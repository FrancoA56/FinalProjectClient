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

  const [aux, setAux] = useState(false);


  const handleOrder = (event) => {

    // ? ORDEN NOMBRE ASECENDENTE
    if (event.target.value === 1) {
      dispatch(orderByNameAscendant(event.target.value));
      setAux(true);

      // ? ORDEN NOMBRE DESCEN
    } else if (event.target.value === 2) {
      dispatch(orderByNameDescendant(event.target.value));
      setAux(true);

      // ? ORDEN MAYOR PUNTAJE
    } else if (event.target.value === 3) {
      dispatch(orderByRating(event.target.value));
      setAux(true);

      // ? ORDEN MAS VENDIDOS
    } else if (event.target.value === 4) {
      dispatch(orderBySales(event.target.value));
      setAux(true);

      // ? ORDEN FECHA DE LANZAMIENTO
    } else if (event.target.value === 5) {
      dispatch(orderByReleased(event.target.value));
      setAux(true);

      // ? ORDEN MAYOR PRECIO
    } else if (event.target.value === 6) {
      dispatch(orderByPriceAscendant(event.target.value));
      setAux(true);

      // ? ORDEN MENOR PRECIO
    } else if (event.target.value === 7) {
      dispatch(orderByPriceDescendant(event.target.value));
      setAux(true);
    }
  }

/*   // ? ORDEN NOMBRE ASECENDENTE
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
  }; */
  return (
    <div>
      <h6 className={style.selectH1}>Ordenar por:</h6>
      <div className={style.containerSelect}>
        <select className={style.select} onChange={handleOrder}>
          <option value="1" /*  onChange={handleOrderAscen} */>A-Z</option>
          <option value="2" /* onChange={handleOrderDesc} */>Z-A</option>
          <option value="3" /* onChange={handleByRating} */>
            Mayor puntaje
          </option>
          <option value="4" /* onChange={handleBySales} */>Mas vendidos</option>
          <option value="5" /* onChange={handleByReleased} */>
            Fecha de lanzamiento
          </option>
          <option value="6" /* onChange={handleByPriceAscendant} */>
            Mayor precio
          </option>
          <option value="7" /* onChange={handleByPriceDescendant} */>
            Menor precio
          </option>
        </select>
      </div>
    </div>
  );

}

export default SelectOrder;