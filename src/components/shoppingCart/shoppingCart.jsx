// LIBRERIAS
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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

// ! TENGO QUE HACER EL USEEFFECT O YA TENGO EL ESTADO CARGADO?
  // ! AGREGAR ASINC AWAYT AL USEEFFECT PARA QUE ME ENVIE EL ESTADO
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
      <Plantillas allModels={allModels} models={models} />
    </div>

  );
};

export default ShoppingCartComponent;