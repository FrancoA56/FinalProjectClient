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
    <>
      <div class="grid h-screen lg:grid-cols-8 md:grid-cols-2">
        {/* lateral */}
        <div
          class="col-span-1 h-full bg-gradient-to-r from-[#000000] to-[#505050] flex flex-col items-start"
          /*           style={{
            background:
              "radial-gradient( 40rem circle at right, rgb(105, 105, 105), black)",
          }} */
        >
          {/* Order by */}
          <div class="my-5">
            <SelectOrder
              handleOrderChange={handleOrderChange}
              selectedFilterColor={selectedFilterColor}
              selectedCategory={selectedCategory}
            />
          </div>
          {/* Category */}
          <div className="flex flex-col ">
            <h1 className="font-mediun uppercase leading-normal font-semibold mb-2 my-1 ml-5 text-[#5ec3bf]">
              Category:
            </h1>
            {/* All */}
            <div>
              <label className="my-1 flex items-center text-white ml-5 ">
                <input
                  type="checkbox"
                  value={[]}
                  checked={check.length === 0}
                  onChange={(event) => {
                    setSelectedCategory([]);
                    setCheck([]);
                  }}
                  className="mr-2 "
                />
                <span className="text-sm text-white">All</span>
              </label>
            </div>
            {/* basic | medium | premium */}
            {types.map((type, index) => {
              const typeName = Object.keys(type)[0];
              const typeValue = Object.values(type)[0];
              return (
                <label key={index} className=" my-1 flex items-center ml-5">
                  <input
                    type="checkbox"
                    value={typeValue}
                    checked={check === typeValue}
                    onChange={(event) => {
                      handleCategoryChange(event);
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm  text-white">{typeName}</span>
                </label>
              );
            })}
            {/* Colores */}
            <br />
            <h1 className="font-mediun uppercase leading-normal font-semibold mb-2 text-[#5ec3bf]">
              Colors:
            </h1>
            {/*             <label className="font-mediun uppercase leading-normal font-semibold mb-2 ml-5">Colors:</label> */}

            {colors.map((color, index) => {
              const colorName = Object.keys(color)[0];
              const colorValue = Object.values(color)[0];
              return (
                <label className="ml-5 my-1 flex" key={index}>
                  <input
                    type="checkbox"
                    value={colorValue}
                    checked={selectedFilterColor.includes(colorValue)}
                    onChange={(event) => {
                      handleFilterColorChange(event);
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm text-white">{colorName}</span>
                </label>
              );
            })}
          </div>
        </div>
        {/* Main */}
        <div
          class="col-span-7 h-full"
          style={{
            background:
              "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
          }}
        >
          {/* <div className="bg-red-500 flex flex-wrap"> */}
            <Plantillas
              selectedFilterColor={selectedFilterColor}
              selectedOrder={selectedOrder}
              selectedCategory={selectedCategory}
            />
          {/* </div> */}
        </div>
        {/* FINAL */}
      </div>
      {/*  <div
        className="flex"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
        }}
      >
        <div
          className="w-2/6 flex flex-col items-center"
          style={{
            background:
              "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
          }}
        >
          
        <div className="flex flex-wrap">
          <Plantillas
            selectedFilterColor={selectedFilterColor}
            selectedOrder={selectedOrder}
            selectedCategory={selectedCategory}
          />
        </div>
      </div> */}
    </>
  );
};

export default ComponentShop;
