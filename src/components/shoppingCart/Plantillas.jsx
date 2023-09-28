//MODULOS
import plantillas from "../../img/img";
import style from "./shoppingCart.module.css";

const Plantillas = () => {
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
        {models?.map((model) => {
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