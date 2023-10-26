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
import PremiumHome01 from "../PresetsDesigns/Premium/Home/PremiumHome01"; // ? PREMIUM HOME
import PremiumCart01 from "../PresetsDesigns/Premium/Cart/PremiumCart01"; // ? PREMIUM CART

const PreviewPresetsComponent = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      {
        /* *********BASIC********* */
          (name === "Silent" && <BasicHome1 />) ||
          (name === "Gourmet Grove" && <BasicHome02 />) ||
          (name === "Atlantic" && <BasicShop1 />) ||
          (name === "Corporate" && <Temp01Home />) ||
          (name === "Simple" && <BasicCart1 />) ||
          /* *********MEDIUM********* */
          (name === "Cosmo" && <MediumHome1 />) ||
          (name === "Prestige" && <MediumDetail1 />) ||
          (name === "Motion" && <MediumShop />) || // * FALTAN IMAGENES
          /* ********* PREMIUM ********* */
          (name === "Cali" && <PremiumShop1 />) ||
          (name === "Trend" && <PremiumDetail1 />) ||
          (name === "Sonic" && <PremiumHome01 />) || // * FALTAN IMAGENES
          (name === "Thunder" && <PremiumCart01 />) // * FALTAN IMAGENES y color
      }
    </div>
  );
};
export default PreviewPresetsComponent;
