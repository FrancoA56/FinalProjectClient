// LIBRERIAS
import { useDispatch } from "react-redux";

// COMPONENTES
import { types, colors } from "./typesAndColors";

import style from "./shoppingCart.module.css";

// REDUX
import { filterByColor, filterByType } from "../../Redux/actions";
 

const FilterLabel = () => {
  const dispatch = useDispatch();


      const handleByType = (event) => {
        dispatch(filterByType(event.target.value));
      };
      const handleBycolors = (event) => {
        dispatch(filterByColor(event.target.value));
  };
  
  return (
    <div>
      <label className={style.labelType}>Tipos:</label>
      {types.map((type, index) => {
        const typeName = Object.keys(type)[0];
        const typeValue = Object.values(type)[0];
        return (
          <label
            className={style.labelText}
            key={index}
            onChange={handleByType}
          >
            <input
              type="checkbox"
              value={typeValue}
              className={style.checkbox}
            />
            {typeName}
          </label>
        );
      })}

      <br />
      <br />

      <label className={style.labelColors}>Colores:</label>

      {colors.map((color, index) => {
        const colorName = Object.keys(color)[0];
        const colorValue = Object.values(color)[0];
        return (
          <label className={style.labelText} key={index} onChange={handleBycolors}>
            <input
              type="checkbox"
              value={colorValue}
              className={style.checkbox}
            />
            {colorName}
          </label>
        );
      })}
    </div>
  );
}

export default FilterLabel