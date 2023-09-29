import style from "./home.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import plantillas from "../../utils/img/exampleModel.json";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  //! Traigo las plantillas de las mejores rankeadas del estado Global (aun no se como se llaman)
  //! const bestRanked = useSelector((state) => state.bestRanked)

  // Estados locales para hacer la "animacion"
  const [activeLeftCard, setActiveLeftCard] = useState(false);
  const [activeRigthCard, setActiveRigthCard] = useState(false);

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
    <div className={style.cont}>
      <div className={style.container}>
        <div
          onClick={handleImageLeftClick}
          className={!activeLeftCard ? style.cardLeft : style.cardActiveL}
          >
          {/* QUEDA ARMADO PARA QUE LA IMAGEN TE LLEVE AL DETAIL DE LA PLANTILLA (si es que hay) */}
          {/* <NavLink to={`/detail/${bestRanked[1].id}`}> */}
          <img
            className={style.img}
            src={plantillas[0].url} /* src={bestRanked[1].url} */
            alt={plantillas[0].name} /* alt={bestRanked[1].name} */
          />
          {/* </NavLink> */}
        </div>

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
              src={plantillas[1].url} /* src={bestRanked[0].url} */
              alt={plantillas[1].name} /* alt={bestRanked[0].name} */
            />
          {/* </NavLink> */}
        </div>

        <div
          onClick={handleImageRigthClick}
          className={!activeRigthCard ? style.cardRigth : style.cardActiveR}
          >
          {/* QUEDA ARMADO PARA QUE LA IMAGEN TE LLEVE AL DETAIL DE LA PLANTILLA (si es que hay) */}
          {/* <NavLink to={`/detail/${bestRanked[2].id}`}> */}
            <img
              className={style.img}
              src={plantillas[7].url} /* src={bestRanked[2].url} */
              alt={plantillas[7].name} /* alt={bestRanked[2].name} */
            />
          {/* </NavLink> */}
        </div>
      </div>
      <div>
        <NavLink to={"/shop"}>
          <button class="bg-botc text-white px-4 py-2 rounded mr-2 my-8 drop-shadow-md">
            Shop plantilla
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeComponent;
