import style from "./home.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from 'react-redux';

import plantillas from "../../utils/img/exampleModel.json";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  //! Traigo las plantillas de las mejores rankeadas del estado Global (aun no se como se llaman)
  //! const bestRanked = useSelector((state) => state.bestRanked)

  // Estados locales para hacer la "animacion"
  const [activeLeftCard, setActiveLeftCard] = useState(false);
  const [activeRigthCard, setActiveRigthCard] = useState(false);
  // const user = useSelector((state) => state.user);

  // Click q hace que la card de la izq pase a la derecha
  const handleImageLeftClick = (e) => {
    e.preventDefault();
    activeRigthCard && setActiveRigthCard(false);
    setActiveLeftCard(true);
  };
  // Click q hace que la card de la derecha pase a la izquierda
  const handleImageRigthClick = (e) => {
    e.preventDefault();
    activeLeftCard && setActiveLeftCard(false);
    setActiveRigthCard(true);
  };
  // Click q hace que la card que era del centro vuelva al centro
  const handleImageCenterClick = (e) => {
    e.preventDefault();
    setActiveLeftCard(false);
    setActiveRigthCard(false);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen dark:bg-[#505050]">
        {/*  ENCABEZADO */}
        <div className="container mx-auto p-4">
          {/*  TITULO */}
          <h1 className="bg-[#303030] inline-block mb-4 w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]">
            Welcome
          </h1>
          {/*  EMPIEZA EL ENCOLUMNADO */}
          <div className="grid grid-cols-12 gap-4 h-screen">
            <div
              className="col-span-12 md:col-span-12 rounded-md grid grid-rows-6 overflow-x-hidden"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
              }}
            >
              <div className="flex flex-col justify-center items-center text-[#909090]">
                <h1 className="font-semibold uppercase ">
                  Best selling templates
                </h1>
                <div className="w-3/4 border-b border-[#909090] mt-2"></div>
              </div>
              <div className="row-span-3 flex items-center">
                {/* "row-span-3 flex items-center" */}
                {/* CARROUSEL */}
                {/* Imagen de la izq */}
                
                <div
                  onClick={handleImageLeftClick}
                  className={
                    !activeLeftCard ? style.cardLeft : style.cardActiveL
                  }
                >
                  {/* QUEDA ARMADO PARA QUE LA IMAGEN TE LLEVE AL DETAIL DE LA PLANTILLA (si es que hay) */}
                  {/* <NavLink to={`/detail/${bestRanked[1].id}`}> */}
                  <img
                    className={style.img}
                    src={
                      "https://res.cloudinary.com/codecrafttemplates/image/upload/v1697852425/Presets/Basic/BasicHome02_parte1_u5kc4e.png"
                    } /* src={bestRanked[1].url} */
                    alt={`plantilla.name`} /* alt={bestRanked[1].name} */
                  />
                  {/* </NavLink> */}
                </div>
                {/* Imagen del centro */}
                <div
                  onClick={handleImageCenterClick}
                  className={
                    (activeLeftCard && style.cardD) ||
                    (activeRigthCard && style.cardDR) ||
                    style.cardCenter
                  }
                >
                  {/* QUEDA ARMADO PARA QUE LA IMAGEN TE LLEVE AL DETAIL DE LA PLANTILLA (si es que hay) */}
                  {/* <NavLink to={`/detail/${bestRanked[0].id}`}> */}
                  <img
                    className={style.img}
                    src={
                      "https://res.cloudinary.com/codecrafttemplates/image/upload/v1697833592/Presets/Premium/PremiumDetail01_parte_1_oyzhpq.png"
                    } /* src={bestRanked[0].url} */
                    alt={"plantillas[1].name"} /* alt={bestRanked[0].name} */
                  />
                  {/* </NavLink> */}
                </div>
                {/* Imagen de la derecha  */}
                <div
                  onClick={handleImageRigthClick}
                  className={
                    !activeRigthCard ? style.cardRigth : style.cardActiveR
                  }
                >
                  {/* QUEDA ARMADO PARA QUE LA IMAGEN TE LLEVE AL DETAIL DE LA PLANTILLA (si es que hay) */}
                  {/* <NavLink to={`/detail/${bestRanked[2].id}`}> */}
                  <img
                    className={style.img}
                    src={
                      "https://res.cloudinary.com/codecrafttemplates/image/upload/v1697833514/Presets/Basic/BasicShop01_parte_1_icdesy.png"
                    } /* src={bestRanked[2].url} */
                    alt={`plantillas.name`} /* alt={bestRanked[2].name} */
                  />
                  {/* </NavLink> */}
                </div>
              </div>
              {/* ************************************************* */}
              <div className="flex justify-center items-center">
                <p className="animate-bounce font-semibold text-[#909090]">
                  "All templates are excellent !!!..."
                </p>
              </div>{" "}
              {/* ************************************************* */}
              <div className="flex items-center justify-center overflow-hidden">
                {" "}
                <NavLink to={"/shop"}>
                  <button
                    className="inline-block bg-logo dark:bg-[#3a8a87] w-auto rounded-md 5ec3bf my-16 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                  text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  >
                    Templates Shop
                  </button>
                </NavLink>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
