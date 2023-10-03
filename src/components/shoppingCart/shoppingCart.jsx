// LIBRERIAS
import React from "react";
// MODULOS
import Nav from "../Nav/Nav";
import ComponentShop from "./ComponentShop";

// ! DESDE ACA DEBERIA ENVIAR LOS TEMPLATES PRIMERO AL ORDER, DESPUES AL FILTER Y FINALMENTE A LAS PLANTILLAS ASI SE RENDERIZA EL RESULTADO FINAL.
const ShoppingCartComponent = () => {
  return (
    <>
      <Nav />
      <div>
        <ComponentShop />
      </div>
    </>
  );
};

export default ShoppingCartComponent;
