import style from "./home.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import plantillas from "../../utils/img/exampleModel.json";

const HomeComponent = () => {
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
          <img
            className={style.img}
            src={plantillas[0].url}
            alt={plantillas[0].name}
          />
        </div>

        <div
          onClick={handleImageCenterClick}
          className={
            (activeLeftCard && style.cardD) ||
            (activeRigthCard && style.cardDR) ||
            style.cardCenter
          }
        >
          <img
            className={style.img}
            src={plantillas[1].url}
            alt={plantillas[1].name}
          />
        </div>

        <div
          onClick={handleImageRigthClick}
          className={!activeRigthCard ? style.cardRigth : style.cardActiveR}
        >
          <img
            className={style.img}
            src={plantillas[7].url}
            alt={plantillas[4].name}
          />
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
