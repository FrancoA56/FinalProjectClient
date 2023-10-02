// LIBRERIAS
import React from "react";
import { useEffect } from "react";

// MODULOS
import style from "./shoppingCart.module.css";
import Nav from "../Nav/Nav";
import FilterLabel from "./Filter";

// ! DESDE ACA DEBERIA ENVIAR LOS TEMPLATES PRIMERO AL ORDER, DESPUES AL FILTER Y FINALMENTE A LAS PLANTILLAS ASI SE RENDERIZA EL RESULTADO FINAL.
const ShoppingCartComponent = () => {
  return (
    <div className={style.container}>
      <Nav />
      <FilterLabel />
    </div>
  );
};

export default ShoppingCartComponent;