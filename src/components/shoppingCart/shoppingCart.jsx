import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./shoppingCart.module.css";
import { types, colors } from "./typesAndColors"
import plantillas from "../../img/img";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const allModels = useSelector((state) => state.allModels);
  const models = useSelector((state) => state.models);

  /*   useEffect(() => {
    // Llamada a la acción para obtener los datos de los modelos.
    dispatch(addAllModels());
    dispatch(addModels());
  }, [dispatch]); */
  /*   const onChange = () => {
    
  } */

  return (
    <div className={style.container}>
      <p>NavBar</p>
      <h6 className={style.selectH1}>Ordenar por:</h6>
      <select
        class="form-select"
        aria-label="Default select example"
        /* onChange={handleOrder} */
        className={style.select}
      >
        <option value="1">Nombre</option>
        <option value="2">Rating</option>
        <option value="3">Precio</option>
        <option value="4">Fecha de salida</option>
        <option value="5">Cantidad de ventas</option>
      </select>

      <label className={style.labelType}>Tipos:</label>

      {types.map((type) => {
        const typeName = Object.keys(type)[0];
        const typeValue = Object.values(type)[0];
        return (
          <div className={style.checkbox}>
            <div class="form-check">
              <div class="form-check"></div>
              <input
                class="form-check-input"
                type="checkbox"
                value={typeValue}
                id={typeValue}
              />
              <label
                class="form-check-label"
                for={typeValue}
                className={style.labelText}
              >
                {typeName}
              </label>
            </div>
          </div>
        );
      })}

      <br />
      <br />

      <label className={style.labelType}>Colores:</label>

      {colors.map((color) => {
        const colorName = Object.keys(color)[0];
        const colorValue = Object.values(color)[0];
        return (
          <div className={style.checkbox}>
            <div class="form-check">
              <div class="form-check"></div>
              <input
                class="form-check-input"
                type="checkbox"
                value={colorValue}
                id={colorValue}
              />
              <label
                class="form-check-label"
                for={colorValue}
                className={style.labelText}
              >
                {colorName}
              </label>
            </div>
          </div>
        );
      })}

      <div className={style.centrarPlantillas}>
        {plantillas.map((img) => {
          return (
            <div className={style.containerImg}>
              <img src={img.url} alt="text" className={style.img} />
              <p>{img.name}</p>
              <p>{img.type}</p>
              <p>${img.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;
