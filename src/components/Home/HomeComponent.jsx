import style from "./home.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const HomeComponent = () => {
  const [activeLeftCard, setActiveLeftCard] = useState(false);
  const [activeRigthCard, setActiveRigthCard] = useState(false);

  const handleImageLeftClick = (e) => {
    e.preventDefault();
    activeRigthCard && setActiveRigthCard(false);
    setActiveLeftCard(true);
  };
  const handleImageRigthClick = (e) => {
    e.preventDefault();
    activeLeftCard && setActiveLeftCard(false);
    setActiveRigthCard(true);
  };
  const handleImageCenterClick = (e) => {
    e.preventDefault();
    setActiveLeftCard(false);
    setActiveRigthCard(false);
  };

  return (
    <>
      <div className={style.container}>
        <div
          onClick={handleImageLeftClick}
          className={!activeLeftCard ? style.cardLeft : style.cardActiveL}
        >
          <img
            className={style.img}
            src="https://img.freepik.com/foto-gratis/espacio-copia-plantilla-interfaz-usuario-diseno-pagina-web_53876-120721.jpg?w=740&t=st=1695764275~exp=1695764875~hmac=561c2f2a7521b627fbc0f53c66876e0a442a048ccd66580a099877d591c9faa7"
            alt=""
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
            src="https://img.freepik.com/foto-gratis/diseno-sitio-web-diseno-contenido-grafico_53876-21203.jpg?w=900&t=st=1695764493~exp=1695765093~hmac=cdb7a794709568c68dd9e920d2dd61de0b817666c2004b75512a2de9accaa44b"
            alt=""
          />
        </div>

        <div
          onClick={handleImageRigthClick}
          className={!activeRigthCard ? style.cardRigth : style.cardActiveR}
        >
          <img
            className={style.img}
            src="https://img.freepik.com/foto-gratis/crear-banner-blanco-diseno-sitio-web_53876-132284.jpg?w=996&t=st=1695764391~exp=1695764991~hmac=586b0fc2239f7edbc8d387c7eff11afbbe9616ed0d61764e704f72a45da9d98f"
            alt=""
          />
        </div>
      </div>
      <div>
        <NavLink to={"/shop"}>
          <button className={style.buttonShop}>Shop plantilla</button>
        </NavLink>
      </div>
    </>
  );
};

export default HomeComponent;
