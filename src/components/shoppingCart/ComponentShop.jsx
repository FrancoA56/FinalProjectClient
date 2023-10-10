// LIBRERIAS
import { useState, useEffect } from "react";
// COMPONENTES
import { types, colors, models } from "./typesAndColors";
import SelectOrder from "./Order";
import Plantillas from "./Plantillas";

const ComponentShop = () => {
  // ! PARA LOS COLORES
  const [selectedFilterColor, setSelectedFilterColor] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("name a");

  // Para manejar los cambios en los filtros seleccionados
  const handleFilterColorChange = (event) => {
    const typeName = event.target.value;
    const isChecked = event.target.checked;

    //actualizacion del estado para obtener el filtro mas reciente
    setSelectedFilterColor((prevSelectedFilter) => {
      if (isChecked) {
        return [...prevSelectedFilter, typeName];
      } else {
        return prevSelectedFilter.filter((filter) => filter !== typeName);
      }
    });
  };

  // useEffect para que se actualice el estado de selectedFilterColor cada vez que se marca o desmarca un filtro.
  useEffect(() => {
    setSelectedFilterColor(selectedFilterColor);
  }, [selectedFilterColor]);

  // ! PARA LAS CATEGORIAS
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

  // ! PARA MANEJAR LOS TYPES
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (event) => {
    const modelsName = event.target.value;
    const isCheckedType = event.target.checked;

    //actualizacion del estado para obtener el filtro mas reciente
    setSelectedTypes((prevSelectedType) => {
      if (isCheckedType) {
        return [...prevSelectedType, modelsName];
      } else {
        return prevSelectedType.filter((filter) => filter !== modelsName);
      }
    });
  };

  // useEffect para que se actualice el estado de selectedFilterColor cada vez que se marca o desmarca un filtro.
  useEffect(() => {
    setSelectedTypes(selectedTypes);
  }, [selectedTypes]);

  // ! LIMPIEZA DE FILTROS
  const handleClearFilter = () => {
    setSelectedCategory([]);
    setSelectedFilterColor([]);
    setCheck([]);
    setSelectedOrder("name a");
    setSelectedTypes([]);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          {/* Encabezado */}
          <h1
            className="inline-block mb-4 w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
            style={{ "background-color": "#303030" }}
          >
            Shop
          </h1>
          {/* Encolumnado */}
          <div className="grid grid-cols-12 gap-4">
            {/* Columna IZQ */}
            <div
              className="col-span-12 md:col-span-2 rounded sm:h-full sm:flex sm:justify-center md:flex md:flex-col md:justify-start md:items-start flex flex-col items-start justify-start"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
              }}
            >
              {/* /////////////////////////////////// */}
              {/* Order */}
              <div>
                <SelectOrder
                  handleOrderChange={handleOrderChange}
                  selectedFilterColor={selectedFilterColor}
                  selectedCategory={selectedCategory}
                  selectedOrder={selectedOrder}
                />
              </div>

              {/* /////////////////////////////////// */}
              {/* Category */}
              <div className="flex flex-col justify-start">
                <h1 className="justify-start uppercase leading-normal font-semibold mb-1 mt-5 ml-5">
                  Category:
                </h1>
                {/* All */}
                <div>
                  <label className="my-1 flex items-center ml-5 ">
                    <input
                      type="checkbox"
                      value={[]}
                      checked={check.length === 0}
                      onChange={(event) => {
                        setSelectedCategory([]);
                        setCheck([]);
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium uppercase leading-normal text-[#303030]">
                      All
                    </span>
                  </label>
                  {/* basic | medium | premium */}
                  {types.map((type, index) => {
                    const typeName = Object.keys(type)[0];
                    const typeValue = Object.values(type)[0];
                    return (
                      <label
                        key={index}
                        className=" my-1 flex items-center ml-5"
                      >
                        <input
                          type="checkbox"
                          value={typeValue}
                          checked={check === typeValue}
                          onChange={(event) => {
                            handleCategoryChange(event);
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm font-medium uppercase leading-normal text-[#303030]">
                          {typeName}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* /////////////////////////////////// */}
              {/* Colores */}
              <div>
                <h1 className="ml-5 font-mediun uppercase leading-normal font-semibold mb-1 mt-5">
                  Colors:
                </h1>

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
                      <span className="text-sm font-medium uppercase leading-normal text-[#303030]">
                        {colorName}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* /////////////////////////////////// */}
              {/* Types */}
              <div>
                <h1 className="font-mediun uppercase leading-normal font-semibold mt-5 ml-1">
                  Types:
                </h1>

                {models.map((type, index) => {
                  const modelsName = Object.keys(type)[0];
                  const modelsValue = Object.values(type)[0];
                  return (
                    <label className="ml-5 my-1 flex" key={index}>
                      <input
                        type="checkbox"
                        value={modelsValue}
                        checked={selectedTypes.includes(modelsValue)}
                        onChange={(event) => {
                          handleTypeChange(event);
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm font-medium uppercase leading-normal text-[#303030]">
                        {modelsName}
                      </span>
                    </label>
                  );
                })}
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  className="mt-5 w-3/4 inline-block bg-logo rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  onClick={() => handleClearFilter()}
                >
                  Clear filter
                </button>
              </div>
            </div>
            {/* Columna derecha */}
            <div
              className="col-span-12 md:col-span-10 flex justify-center items-start rounded h-screen overflow-auto"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
              }}
            >
              <Plantillas
                selectedFilterColor={selectedFilterColor}
                selectedOrder={selectedOrder}
                selectedCategory={selectedCategory}
                selectedTypes={selectedTypes}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentShop;
