//MODULOS
import plantillas from "../../utils/img/exampleModel.json";
import style from "./shoppingCart.module.css";

// REDUX

const Plantillas = (props) => {
  return (
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

    /*       <div className={style.centrarPlantillas}>
        {props.models.map((model) => {
          return (
            <div className={style.containerImg}>
              <img src={model.url} alt={model.name} className={style.img} />
              <p>{model.name}</p>
              <p>{model.type}</p>
              <p>${model.price}</p>
            </div>
          );
        })}
      </div>
    </div> */
  );
};

export default Plantillas