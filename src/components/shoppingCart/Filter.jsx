// LIBRERIAS
import { useState, useEffect } from "react";

// COMPONENTES
import { types, colors } from "./typesAndColors";
import style from "./shoppingCart.module.css";
import SelectOrder from "./Order";

const FilterLabel = () => {

  // ! PARA LOS COLORES
  const [selectedFilterColor, setSelectedFilterColor] = useState([]);

  // Para manejar los cambios en los filtros seleccionados
  const handleFilterColorChange = (event) => {
    const typeName = event.target.value;
    const isChecked = event.target.checked;

    //actualizacion del estado para obtener el filtro mas reciente
    setSelectedFilterColor((prevSelectedFilter) => {
      if (isChecked) {
        //Si se marca un tipo lo agrego al array
        return [...prevSelectedFilter, typeName];
      } else {
        //Si se desmarca un tipo, lo elimino del array
        return prevSelectedFilter.filter((filter) => filter !== typeName);
      }
    });
  };

  // useEffect para que se actualice el estado de selectedType cada vez que se marca o desmarca un filtro.
  useEffect(() => {
    setSelectedFilterColor(selectedFilterColor);
  }, [selectedFilterColor]);


  // ! PARA LAS CATEGORIAS/TIPOS
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [check, setCheck] = useState([]);

  // Para manejar los cambios en los filtros seleccionados
const handleCategoryChange = (event) => {
  setSelectedCategory([event.target.value]);
  setCheck(event.target.value);
};

  // useEffect para que se actualice el estado de selectedType cada vez que se marca o desmarca un filtro.
  useEffect(() => {
    setSelectedCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <label className={style.labelType}>Category:</label>
      <label className={style.labelText}>
        <input
          type="radio"
          value={[]}
          className={style.checkbox}
          checked={check.length == 0}
          onChange={(event) => {
            setSelectedCategory([]);
            setCheck([]);
          }}
        />
        All
      </label>
      {types.map((type, index) => {
        const typeName = Object.keys(type)[0];
        const typeValue = Object.values(type)[0];
        return (
          <label className={style.labelText} key={index}>
            <input
              type="radio"
              value={typeValue}
              className={style.checkbox}
              checked={check === typeValue}
              onChange={(event) => {
                handleCategoryChange(event);
              }}
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
          <label className={style.labelText} key={index}>
            <input
              type="checkbox"
              value={colorValue}
              className={style.checkbox}
              checked={selectedFilterColor.includes(colorValue)}
              onChange={(event) => {
                handleFilterColorChange(event);
              }}
            />
            {colorName}
          </label>
        );
      })}
      <SelectOrder
        selectedFilterColor={selectedFilterColor}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default FilterLabel;
