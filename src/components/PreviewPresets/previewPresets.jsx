// * LIBRERIAS
import { useParams } from "react-router-dom";

// * MODULOS
// BASIC
import Temp01Home from "../PresetsDesigns/Basic/About/BasicAbout01"; // ? BASIC ABOUT 01
import BasicCart1 from "../PresetsDesigns/Basic/Cart/BasicCart1"; // ? BASIC CART 01
import BasicHome1 from "../PresetsDesigns/Basic/Home/BasicHome1"; //? BASIC HOME 01
import BasicHome02 from "../PresetsDesigns/Basic/Home/BasicHome02"; // ? BASIC HOME 02
import BasicShop1 from "../PresetsDesigns/Basic/Shop/BasicShop1"; // ? BASIC SHOP 01

// MEDIUM
import MediumDetail1 from "../PresetsDesigns/Medium/Detail/MediumDetail1"; // ? MEDIUM DETAIL 01
import MediumHome1 from "../PresetsDesigns/Medium/Home/MediumHome1"; // ? MEDIUM HOME 01
import MediumShop from "../PresetsDesigns/Medium/Shop/MediumShop"; // ? MEDIUM SHOP

// PREMIUM
import PremiumDetail1 from "../PresetsDesigns/Premium/Detail/PremiumDetail1"; // ? PREMIUM DETAIL 01
import PremiumShop1 from "../PresetsDesigns/Premium/Shop/PremiumShop1"; // ? PREMIUM SHOP

const PreviewPresetsComponent = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      {
        /* *********BASIC********* */
        (name === "Basic home 01" && <BasicHome1 />) ||
        (name === "Basic Home 02" && <BasicHome02 />) ||
        (name === "Basic shop 01" && <BasicShop1 />) ||
        (name === "Basic about 01" && <Temp01Home />) ||
        (name === "Basic cart 01" && <BasicCart1 />) ||
        /* *********MEDIUM********* */
        (name === "Medium home 01" && <MediumHome1 />) ||
        (name === "Medium detail" && <MediumDetail1 />) ||
        (name === "Medium shop" && <MediumShop />) ||
        /* ********* PREMIUM ********* */
        (name === "Premium shop" && <PremiumShop1 />) ||
        (name === "Premium detail" && <PremiumDetail1 />)
      }
    </div>
  );
};
export default PreviewPresetsComponent;
