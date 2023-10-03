// LIBRERIAS
import { useState, useEffect } from "react";
// COMPONENTES
import { types, colors } from "./typesAndColors";
import SelectOrder from "./Order";
import Plantillas from "./Plantillas";

const ComponentShop = () => {
  // ! PARA LOS COLORES
  const [selectedFilterColor, setSelectedFilterColor] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("");

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

  //! Para manejar los cambios en los Order seleccionados
  const handleOrderChange = (event) => {
    const typeName = event.target.value;
    //actualizacion del estado para obtener el orden mas reciente
    setSelectedOrder(typeName);
  };

  // useEffect para que se actualice el estado de selectedType cada vez que se marca o desmarca un filtro.
  useEffect(() => {
    setSelectedCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex ">
      <div className="">
        <div className="flex flex-col mt-6">
          <SelectOrder
            handleOrderChange={handleOrderChange}
            selectedFilterColor={selectedFilterColor}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="flex flex-col ">
          <h6 className="text-lg font-semibold mb-2 ml-5">Category:</h6>
          <div className="flex flex-col my-2">
            <label>
              <input
                type="radio"
                value={[]}
                checked={check.length === 0}
                onChange={(event) => {
                  setSelectedCategory([]);
                  setCheck([]);
                }}
              />
              All
            </label>
          </div>
          {types.map((type, index) => {
            const typeName = Object.keys(type)[0];
            const typeValue = Object.values(type)[0];
            return (
              <label key={index} className="inline-block ml-3 my-1">
                <input
                  type="radio"
                  value={typeValue}
                  checked={check === typeValue}
                  onChange={(event) => {
                    handleCategoryChange(event);
                  }}
                  className="mr-2"
                />
                <span className="text-sm text-gray-800">{typeName}</span>
              </label>
            );
          })}

          <br />
          <br />

          <label className="text-lg font-semibold mb-2 ml-5">Colores:</label>

          {colors.map((color, index) => {
            const colorName = Object.keys(color)[0];
            const colorValue = Object.values(color)[0];
            return (
              <label className="ml-8 my-1 flex items-center" key={index}>
                <input
                  type="checkbox"
                  value={colorValue}
                  checked={selectedFilterColor.includes(colorValue)}
                  onChange={(event) => {
                    handleFilterColorChange(event);
                  }}
                  className="mr-2"
                />
                <span className="text-sm text-gray-800">{colorName}</span>
              </label>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap">
        <Plantillas
          selectedFilterColor={selectedFilterColor}
          selectedOrder={selectedOrder}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default ComponentShop;
