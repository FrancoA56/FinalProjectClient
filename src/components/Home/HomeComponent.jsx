import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./home.module.css";

const HomeComponent = () => {
  // Estados locales para hacer la "animacion"
  const [activeLeftCard, setActiveLeftCard] = useState(false);
  const [activeRightCard, setActiveRightCard] = useState(false);

  // const user = useSelector((state) => state.user);

  // Click q hace que la card de la izq pase a la derecha
  const handleImageLeftClick = (e) => {
    e.preventDefault();
    activeRightCard && setActiveRightCard(false);
    setActiveLeftCard(true);
  };
  // Click q hace que la card de la derecha pase a la izquierda
  const handleImageRigthClick = (e) => {
    e.preventDefault();
    activeLeftCard && setActiveLeftCard(false);
    setActiveRightCard(true);
  };
  // Click q hace que la card que era del centro vuelva al centro
  const handleImageCenterClick = (e) => {
    e.preventDefault();
    setActiveLeftCard(false);
    setActiveRightCard(false);
  };

  //   Home
  // - *Los comentarios en el home no se leen bien
  // - *El color del cuadro del welcome en home y el fondo del carrousel no cambian de color al estar en tema claro lo q los muestra con mucho contraste a diferencia de la buena relacion de colores del modo oscuro

  return (
    <>
      <div className="bg-gray-100 min-h-screen dark:bg-[#505050]">
        {/*  ENCABEZADO */}
        <div className="container mx-auto p-4">
          {/*  TITULO */}
          <h1 className="dark:bg-[#303030] bg-gray-300 inline-block mb-4 w-full rounded px-7 pb-2.5 pt-3 text-sm font-semibold uppercase leading-normal dark:text-white shadow-[0_4px_9px_-4px_#000000]">
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
                {/* CARROUSEL */}

                {/* Imagen de la izq */}

                <div
                  onClick={handleImageLeftClick}
                  className={
                    !activeLeftCard
                      ? "flex items-start justify-center w-7/12 md:h-40 overflow-hidden rounded-lg z-0 md:translate-x-44 ease-in-out duration-300 blur-sm shadow-[0_9px_9px_-4px_#000000] sm:translate-x-20 sm:h-20"
                      : "w-3/4 max-h-80 flex rounded-lg items-start justify-center overflow-hidden z-10 transform md:translate-x-96 ease-in-out duration-300 shadow-[0_9px_9px_-4px_#000000] sm:translate-x-44"
                  }
                >
                  {activeLeftCard ? (
                    <Link to={`/detail/1`}>
                      <img
                        className={style.img}
                        src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1697833592/Presets/Premium/PremiumDetail01_parte_1_oyzhpq.png"
                        alt="Trend"
                      />
                    </Link>
                  ) : (
                    <img
                      className={style.img}
                      src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1697833592/Presets/Premium/PremiumDetail01_parte_1_oyzhpq.png"
                      alt="Trend"
                    />
                  )}
                </div>
                {/* Imagen del centro */}
                <div
                  onClick={handleImageCenterClick}
                  className={
                    (activeLeftCard &&
                      "flex items-start justify-center w-7/12 md:h-40 overflow-hidden rounded-lg z-0 transform sm:-translate-x-40 md:-translate-x-80 ease-in-out duration-300 blur-sm sm:h-20") ||
                    (activeRightCard &&
                      "flex items-start justify-center w-7/12 md:h-40 overflow-hidden rounded-lg z-0 transform sm:translate-x-40 md:translate-x-80 ease-in-out duration-300 blur-sm sm:h-20") ||
                    "w-3/4 max-h-80 flex rounded-lg items-start justify-center overflow-hidden z-10 transform ease-in-out duration-300 shadow-[0_9px_9px_-4px_#000000]"
                  }
                >
                  {!activeLeftCard && !activeRightCard ? (
                    <Link to={"/detail/3"}>
                      <img
                        className={`${style.img}`}
                        src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1698362360/Presets/Premium/PremiumHome01_yjohrl.png"
                        alt="sonic"
                      />
                    </Link>
                  ) : (
                    <img
                      className={`${style.img}`}
                      src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1698362360/Presets/Premium/PremiumHome01_yjohrl.png"
                      alt="sonic"
                    />
                  )}
                </div>

                <div
                  onClick={handleImageRigthClick}
                  className={
                    !activeRightCard
                      ? "flex items-start justify-center w-7/12 md:h-40 overflow-hidden rounded-lg z-0 md:-translate-x-40 ease-in-out duration-300 blur-sm shadow-[0_9px_9px_-4px_#000000] sm:h-20 sm:-translate-x-20"
                      : "w-3/4 max-h-80 flex rounded-lg items-start justify-center overflow-hidden z-10 transform md:-translate-x-96 ease-in-out duration-300 shadow-[0_9px_9px_-4px_#000000] sm:-translate-x-44"
                  }
                >
                  {activeRightCard ? (
                    <Link to="detail/2">
                      <img
                        className={style.img}
                        src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1698192710/Presets/Basic/PremiumCart01_xvf8rg.png"
                        alt="Thunder"
                      />
                    </Link>
                  ) : (
                    <img
                      className={style.img}
                      src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1698192710/Presets/Basic/PremiumCart01_xvf8rg.png"
                      alt="Thunder"
                    />
                  )}
                </div>
              </div>
              {/* ************************************************* */}
              <div className="flex justify-center items-center">
                {activeLeftCard && (
                  <p className="animate-pulse italic text-white w-1/2">
                    "... My sales have increased incredibly! People see my page and want me to design all their spaces! These templates are the best! ..."
                  </p>
                )}
                {activeRightCard && (
                  <p className="animate-pulse italic text-white w-1/2">
                    "... I was able to create my first website for my Sports online
                    Store using this template! Our customers love how intuitive
                    it is! ..."
                  </p>
                )}
                {(!activeRightCard && !activeLeftCard) && (
                  <p className="animate-pulse italic text-white  w-1/2">
                   "... I've been in the technology retail business for years, but everything changed when I invested in building my website with you. This template is just what I was looking for! ..."
                  </p>
                )}
              </div>{" "}
              {/* ************************************************* */}
              <div className="flex items-center justify-center overflow-hidden">
                {" "}
                <NavLink to={"/shop"}>
                  <button
                    className="inline-block bg-logo dark:bg-[#3a8a87] w-auto rounded-md px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
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
