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

    const handleCategoryChange = (event) => {
      const categoryName = event.target.value;
      const isCheckedCategory = event.target.checked;

      //actualizacion del estado para obtener el filtro mas reciente
      setSelectedCategory((perSelectedCategory) => {
        if (isCheckedCategory) {
          return [...perSelectedCategory, categoryName];
        } else {
          return perSelectedCategory.filter((filter) => filter !== categoryName);
        }
      });
    };

    // useEffect para que se actualice el estado de selectedFilterColor cada vez que se marca o desmarca un filtro.
    useEffect(() => {
      setSelectedCategory(selectedCategory);
    }, [selectedCategory]);

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
    setSelectedOrder("name a");
    setSelectedTypes([]);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen dark:bg-[#505050]">
        <div className="container mx-auto p-4">
          {/* Encabezado */}
          <h1 className="bg-[#303030] inline-block mb-4 w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000]">
            Shop
          </h1>
          {/* Encolumnado */}
          <div className="grid grid-cols-12 gap-4">
            {/* Columna IZQ */}
            <div
              className="col-span-12 md:col-span-2 rounded sm:h-screen sm:flex sm:justify-center md:flex md:flex-col md:justify-start md:items-start flex flex-col items-start justify-start
              bg-gray-300 text-neutral-600 dark:bg-[#303030] dark:text-[#707070]"
            >
              {/* /////////////////////////////////// */}
              {/* Order */}
              <div className="ml-2">
                <SelectOrder
                  handleOrderChange={handleOrderChange}
                  selectedFilterColor={selectedFilterColor}
                  selectedCategory={selectedCategory}
                  selectedOrder={selectedOrder}
                />
              </div>

              {/* /////////////////////////////////// */}
              {/* Category */}
              <div className="flex flex-col justify-start ml-2">
                <h1 className="justify-start uppercase leading-normal font-semibold mt-2 ml-5 ">
                  Category:
                </h1>
                {/* All */}
                <div>
                  <label className="my-1 flex items-center ml-5">
                    <input
                      type="checkbox"
                      value={[]}
                      checked={selectedCategory.length === 0}
                      onChange={(event) => {
                        setSelectedCategory([]);
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium uppercase leading-normal  text-neutral-600 dark:text-[#909090] ">
                      All
                    </span>
                  </label>
                  {/* basic | medium | premium */}
                  {types.map((type, index) => {
                    const categoryName = Object.keys(type)[0];
                    const categoryValue = Object.values(type)[0];
                    return (
                      <label
                        key={index}
                        className=" my-1 flex items-center ml-5 "
                      >
                        <input
                          type="checkbox"
                          value={categoryValue}
                          checked={selectedCategory.includes(categoryValue)}
                          onChange={(event) => {
                            handleCategoryChange(event);
                          }}
                          className="mr-2 "
                        />
                        <span className="text-sm font-medium uppercase leading-normal  text-neutral-600 dark:text-[#909090] ">
                          {categoryName}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
              {/* /////////////////////////////////// */}
              {/* Colores */}
              <div className="ml-2">
                <h1 className="font-mediun uppercase leading-normal font-semibold mt-2 ml-2">
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
                      <span className="text-sm font-medium uppercase leading-normal  text-neutral-600 dark:text-[#909090] ">
                        {colorName}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* /////////////////////////////////// */}
              {/* Types */}
              <div className="ml-2">
                <h1 className="font-mediun uppercase leading-normal font-semibold mt-2 ml-1">
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
                      <span className="text-sm font-medium uppercase leading-normal  text-neutral-600 dark:text-[#909090] ">
                        {modelsName}
                      </span>
                    </label>
                  );
                })}
              </div>
              <div className="w-full pb-3 flex justify-center items-center">
                <button
                  className="mt-5 px-6 inline-block bg-logo dark:bg-[#3a8a87] rounded py-2 text-sm font-medium uppercase text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  onClick={() => handleClearFilter()}
                >
                  Clear filters
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
