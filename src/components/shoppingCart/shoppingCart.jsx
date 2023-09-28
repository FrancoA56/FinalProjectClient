// LIBRERIAS
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// MODULOS
import style from "./shoppingCart.module.css";
import Nav from "../Nav/Nav";
import SelectOrder from "./Order";
import FilterLabel from "./Filter";
import Plantillas from "./Plantillas";


const ShoppingCartComponent = () => {
  const dispatch = useDispatch();
  const allModels = useSelector((state) => state.allModels);
  const models = useSelector((state) => state.models);

  /*   useEffect(() => {
    // Llamada a la acción para obtener los datos de los modelos.
    dispatch(addModel());
    dispatch(addAllModels());
  }, [dispatch]); */


  return (
    <div className={style.container}>
      <Nav />
      <SelectOrder/>
      <FilterLabel/>
      <Plantillas/>
    </div>

  );
};

export default ShoppingCartComponent;
