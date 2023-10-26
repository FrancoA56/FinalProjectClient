import React from "react";
import "tailwindcss/tailwind.css";
import DarkMode from "../../../DarkMode/darkmode";

const MediumDetail1 = () => {
  return (
    <div className="bg-[#ba9d81] dark:bg-[#321e13]">
      
      <div className="absolute right-12 top-2 z-10">
        
        <DarkMode />
      </div>
      <div className="shadow-md shadow-[#303030] dark:shadow-md dark:shadow-[#ba9d8186] w-full h-14 flex items-center">
        <div>
          <button className="dark:text-gray-200 flex items-center justify-start">
            <i
              style={{ fontSize: "1.5rem" }}
              className="fa-solid fa-arrow-right-from-bracket fa-rotate-180 ml-4 mr-2"
            ></i>{" "}
            Shop
          </button>
        </div>

        <div
          className="flex-grow flex items-center justify-center text-center"
          style={{ marginLeft: "25rem" }}
        >
          <p
            className="font-bold uppercase tracking-tight dark:text-gray-200"
            style={{ fontSize: "1.5rem" }}
          >
            GQ.de
            <span style={{ marginLeft: "3rem", fontSize: "1rem" }}>
              Highline Watches
            </span>
          </p>
        </div>
        <div className="flex-grow flex items-center justify-end mr-4">
          <i className="fa-brands fa-glide-g dark:text-gray-200" style={{ fontSize: "2rem" }}></i>{" "}
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://phantom-expansion.unidadeditorial.es/87e8ee24bd4979e46e1160232946074f/crop/0x268/899x772/f/webp/assets/multimedia/imagenes/2022/11/08/16678953945049.jpg"
            alt="reloj Louis Vuitton"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://media.gq.com.mx/photos/6317715a5a0f58b02a754b71/16:9/w_2560%2Cc_limit/01_Louis-Vuitton-Tambour-Twenty-Watch-3.jpg"
            alt="reloj Louis Vuitton"
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <h2 className="text-3xl mb-14 font-bold uppercase tracking-tight text-[#322C2D] dark:text-[#ba9d81] sm:text-4xl">
            Louis Vuitton Tambour Twenty
          </h2>
          <p className="mt-4 text-[#404040] dark:text-[#e2c5aa]">
            The silhouette of a round box with thick edges, designed to mimic
            the vintage instrument, has become Louis Vuitton's most significant
            watch line since its presentation.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className=" border-gray-200 pt-4">
              <dt
                className="font-medium uppercase shadow-md text-[#322C2D] dark:text-[#ba9d81]"
          
              >
                Price
              </dt>
              <dd className="mt-2 text-sm text-[#404040] dark:text-[#e2c5aa]">
                $ 17.500
              </dd>
            </div>
            <div className=" border-gray-200 pt-4">
              <dt
                className="font-medium uppercase shadow-md text-[#322C2D] dark:text-[#ba9d81]"
          
              >
                Specifications
              </dt>
              <dd className="mt-2 text-sm text-[#404040] dark:text-[#e2c5aa]">
                The movement's rotor is made of 22-karat gold and provides a
                power reserve of 50 hours. Water-resistant up to 100 meters and
                measures time with a tenth of a second.
              </dd>
            </div>
            <div className=" border-gray-200 pt-4">
              <dt
                className="font-medium uppercase shadow-md text-[#322C2D] dark:text-[#ba9d81]"
          
              >
                Dimensions
              </dt>
              <dd className="mt-2 text-sm text-[#404040] dark:text-[#e2c5aa]">
                41.5 millimeters
              </dd>
            </div>

            <div className=" border-gray-200 pt-4">
              <dt
                className="font-medium uppercase shadow-md text-[#322C2D] dark:text-[#ba9d81]"
          
              >
                Includes
              </dt>
              <dd className="mt-2 text-sm text-[#404040] dark:text-[#e2c5aa]">
                Wood card tray and 3 refill packs
              </dd>
            </div>
          </dl>
          <div className=" border-gray-200 pt-4">
            <p className="mt-4 text-[#404040] dark:text-[#e2c5aa]">
              If you like the new Louis Vuitton watch, you have to hurry, as
              there are only 200 pieces available. Those who manage to acquire a
              Louis Vuitton Tambour Twenty will receive it in a small and
              sophisticated case with the well-known Monogram of the brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumDetail1;
