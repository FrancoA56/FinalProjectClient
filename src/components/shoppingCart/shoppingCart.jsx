import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./shoppingCart.module.css";

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
      <div class="form-check">
        <div class="form-check"></div>
        <input class="form-check-input" type="checkbox" value="" id="tipo1" />
        <label class="form-check-label" for="tipo1" className={style.labelText}>
          Ejemplo de tipos 1
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="tipo2" />
        <label class="form-check-label" for="tipo2" className={style.labelText}>
          Ejemplo de tipos 2
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="tipo3" />
        <label class="form-check-label" for="tipo3" className={style.labelText}>
          Ejemplo de tipos 3
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="tipo4" />
        <label class="form-check-label" for="tipo4" className={style.labelText}>
          Ejemplo de tipos 4
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="tipo5" />
        <label class="form-check-label" for="tipo5" className={style.labelText}>
          Ejemplo de tipos 5
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="tipo6" />
        <label class="form-check-label" for="tipo6" className={style.labelText}>
          Ejemplo de tipos 6
        </label>
      </div>

      <br />

      <label className={style.labelType}>Colores:</label>
      <div class="form-check">
        <div class="form-check"></div>
        <input class="form-check-input" type="checkbox" value="" id="color1" />
        <label
          class="form-check-label"
          for="color1"
          className={style.labelText}
        >
          Ejemplo de colores 1
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="color2" />
        <label
          class="form-check-label"
          for="color2"
          className={style.labelText}
        >
          Ejemplo de colores 2
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="color3" />
        <label
          class="form-check-label"
          for="color3"
          className={style.labelText}
        >
          Ejemplo de colores 3
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="color4" />
        <label
          class="form-check-label"
          for="coloro4"
          className={style.labelText}
        >
          Ejemplo de colores 4
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="color5" />
        <label
          class="form-check-label"
          for="color5"
          className={style.labelText}
        >
          Ejemplo de colores 5
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="color6" />
        <label
          class="form-check-label"
          for="coloro6"
          className={style.labelText}
        >
          Ejemplo de colores 6
        </label>
      </div>
      <div className={style.centrarPlantillas}>
        <h6>Plantillas una debajo de la otra</h6>
        <h6>Otra plantilla</h6>
        <h6>Plantilla 3</h6>
        <h6>Plantilla 4</h6>
        <h6>Plantilla 5</h6>
        <h6>Plantilla 6</h6>
      </div>
    </div>
  );
};

export default ShoppingCart;
