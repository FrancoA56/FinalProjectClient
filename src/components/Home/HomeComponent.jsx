import style from "./home.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from 'react-redux';

import plantillas from "../../utils/img/exampleModel.json";

const HomeComponent = () => {
  const [activeLeftCard, setActiveLeftCard] = useState(false);
  const [activeRigthCard, setActiveRigthCard] = useState(false);
  // const user = useSelector((state) => state.user);

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
                  style.cardCenter}
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
                  src={plantillas[2].url}
                  alt={plantillas[2].name}
              />
              </div>
      
            </div>
      
               <div>
                <NavLink to={"/shop"}>
                  <button className={style.buttonShop}>Shop plantilla</button>
                </NavLink>
              </div>

                          {/* {user && (
                            <div>
                              <p>Email: {user.email}</p>
                              <img src={user.image} alt="User" />
                            </div>
                          )} */}

          </div>
    </div>
    </>
  );
};

export default HomeComponent;
