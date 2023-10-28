// LIBRERIAS
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { format } from "date-fns";
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
  const [hoveredCoords, setHoveredCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (isHovered) {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - boundingRect.left) / boundingRect.width) * 100;
      const y = ((e.clientY - boundingRect.top) / boundingRect.height) * 100;
      setHoveredCoords({ x, y });
    }
  };

  useEffect(() => {
    async function fetchPreset() {
      try {
        const { data } = await axios.get(`${URL}/api/preset/${id}`);
        if (data.name) {
          console.log("PRESET:",data);
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
  console.log("PRESET2:",presets);
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
        className="bg-white "
        style={{
          background:
            "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
        }}
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-1 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl text-gray-500 mt-6 font-medium uppercase leading-normal tracking-tight sm:text-4xl">
              Preset Specifications
            </h2>
            <p className="mt-4 text-gray-500 font-medium uppercase leading-normal">
              {(presets.category === "premium" &&
                "This template includes dark mode and is responsive.") ||
                (presets.category === "medium" &&
                  "This template includes dark mode but is not responsive.") ||
                (presets.category === "basic" &&
                  "This template has a basic design. It does not include dark mode and is not responsive.")}
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
                  {presets.ratingAverage || 0}
                  <i className="ml-2 fa-solid fa-star relative bottom-0.5 text-yellow-600 text-sm" />
                </p>
                <span className="block border-t border-[#909090] uppercase text-sm text-[#909090]">
                  Rating
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
            <div className="mt-12 items-center justify-betweer mb-56">
              {cart.some((item) => item.id === presets.id) ? (
                <button
                  className="bg-logo dark:bg-[#3a8a87] w-52 rounded-md px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                  text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  onClick={removePreset(presets.id)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="inline-block bg-logo dark:bg-[#3a8a87] w-52 rounded-md px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                  text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  onClick={buyPreset(presets.id)}
                >
                  Add to Cart
                </button>
              )}
              <NavLink to={`/preview/${presets.name}`} target="_blank">
                <button
                  className="bg-[#303030] ml-24 w-52 rounded-md px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                      text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#505050] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                >
                  PREVIEW
                </button>
              </NavLink>
            </div>
          </div>
          <div className="mt-24 grid grid-cols-1 grid-rows-2 gap-0 sm:gap-0 lg:gap-0 items-center justify-between">
            {presets.images &&
              presets.images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg bg-gray-100"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setHoveredCoords({ x: 0, y: 0 });
                  }}
                  onMouseMove={handleMouseMove}
                  style={{
                    cursor: isHovered
                      ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z' clip-rule='evenodd' /%3E%3C/svg%3E\") 0 0, auto"
                      : "auto",
                  }}
                >
                  <img
                    src={image}
                    alt={presets.name}
                    className={`w-full h-auto ${
                      isHovered ? "transform scale-150" : ""
                    }`}
                    style={{
                      transformOrigin: `${hoveredCoords.x}% ${hoveredCoords.y}%`,
                    }}
                  />
                </div>
              ))}
          </div>

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
    </>
  );
};

export default PresetsDetail;
