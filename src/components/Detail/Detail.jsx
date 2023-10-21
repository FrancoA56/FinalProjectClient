// LIBRERIAS
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
/* import { format } from "date-fns"; */
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTES
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import { addModelToCart, removeModelFromCart } from "../../Redux/actions";

const PresetsDetail = () => {
  const URL = process.env.REACT_APP_API;
  const cart = useSelector((state) => state.cart);
  const { id } = useParams();
  const [presets, setPresets] = useState({});

  useEffect(() => {
    async function fetchPreset() {
      try {
        const { data } = await axios.get(`${URL}/api/preset/${id}`);
        if (data.name) {
          setPresets(data);
        } else {
          showErrorAlert("Unable to display detail at this time");
        }
      } catch (error) {
        console.log("Error de: " + error);
      }
    }
    fetchPreset();
  }, [id, URL]);

  // ? CAMBIO DE BOTON SI SE AGREGA AL CARRITO
  
  const dispatch = useDispatch();
    const buyPreset = (id) => {
      return () => {
        dispatch(addModelToCart(id));
      };
    };
    const removePreset = (id) => {
      return () => {
        dispatch(removeModelFromCart(id));
      };
    };


  //////////////////////////////////////////////////////////////////////
  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "warning",
      title: "Not detail",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  //////////////////////////////////////////////////////////////////////

  return (
    <>
      <Banner />
      <Nav />
      <div
        className="bg-white"
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
        }}
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl text-gray-500 font-medium uppercase leading-normal tracking-tight sm:text-4xl">
              Preset Specifications
            </h2>
            <p className="mt-4 text-gray-500 font-medium uppercase leading-normal">
              {(presets.category === "premium" &&
                "Brief text explaining the preset") ||
                (presets.category === "medium" && "Este es medium") ||
                (presets.category === "basic" && "Este es basic")}
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div>
                {" "}
                <p className="font-semibold mt-2 mb-2 text-xl text-[#909090] capitalize">
                  {presets.type}
                </p>
                <span className="block border-t border-[#909090] uppercase text-sm text-[#909090]">
                  Type
                </span>
              </div>
              <div>
                {" "}
                <p className="font-semibold mt-2 mb-2  text-xl text-[#909090] capitalize">
                  {presets.category}
                </p>
                <span className="block border-t border-[#909090]  uppercase text-sm text-[#909090]">
                  Category
                </span>
              </div>

              <div>
                {" "}
                <p className="font-semibold mt-2 mb-2  text-xl text-[#909090] capitalize">
                  ${presets.price}
                </p>
                <span className="block border-t border-[#909090] uppercase text-sm text-[#909090]">
                  Price
                </span>
              </div>
              <div>
                {" "}
                <p className="font-semibold mt-2 mb-2 text-xl text-[#909090] capitalize">
                  {presets.color}
                </p>
                <span className="block border-t border-[#909090] uppercase text-sm text-[#909090]">
                  Default color
                </span>
              </div>
              <div>
                {" "}
                <p className="font-semibold mt-2 mb-2 text-xl text-[#909090] capitalize">
                  {new Date(presets.release).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <span className="block border-t border-[#909090] uppercase text-sm text-[#909090]">
                  Released At
                </span>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {presets.images &&
              presets.images.map((images, index) => (
                <img
                  key={index}
                  src={images}
                  alt={presets.name}
                  className="rounded-lg bg-gray-100"
                />
              ))}
            <NavLink to={`/preview/${presets.name}`} target="_blank">
              <button
                className="inline-block bg-logo dark:bg-[#3a8a87] w-auto rounded-md 5ec3bf my-16 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                  text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
              >
                PREVIEW
              </button>
            </NavLink>

            {cart.some((item) => item.id === presets.id) ? (
              <button
                className="inline-block bg-logo dark:bg-[#3a8a87] w-52 rounded-md 5ec3bf my-16 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                  text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                onClick={removePreset(presets.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="inline-block bg-logo dark:bg-[#3a8a87] w-52 rounded-md 5ec3bf my-16 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                  text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                onClick={buyPreset(presets.id)}
              >
                Add to Cart
              </button>
            )}
            {/*             <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850708/8_ooe46q.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850708/8_ooe46q.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850708/8_ooe46q.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://res.cloudinary.com/dp6ojzhsc/image/upload/v1695850708/8_ooe46q.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PresetsDetail;