import { useState } from "react";
import { useSelector } from "react-redux";
import ColorPanel from "../../../../utils/ColorPanel";
import { useLocation } from "react-router-dom";

const PremiumHome01 = () => {
  const user = useSelector((state) => state.user);
  const color = useSelector((state) => state.colores);

  const [dropDown, setDropDown] = useState(false);
  const [image, setImage] = useState(
    "https://media.istockphoto.com/id/1373017594/es/foto/auriculares-sobre-fondo-de-color-naranja.jpg?s=612x612&w=0&k=20&c=0X3aIl4Nv7SJZS5VdWpwzyFP4Gd07ov7t72E_Kur9Hc="
  );

  const handlerDropDown = (e) => {
    e.preventDefault();
    dropDown && setDropDown(false);
    !dropDown && setDropDown(true);
  };
  return (
    <div className={`grid min-h-screen max-w-screen ${
        color.primary ? color.primary : "bg-zinc-900"
      }`}>
      {/* section */}
      <div className={`flex flex-col`}>
        <section
          className={`mt-3 ${
            color.text01 ? color.text01 : "text-[#909090]"
          }`}
        >
          <span class="material-symbols-outlined px-16">home</span>
          <span class="material-symbols-outlined px-16">format_color_fill</span>
          <span class="material-symbols-outlined px-16">shopping_bag</span>
          <span class="material-symbols-outlined px-16">shopping_cart</span>
          <span class="material-symbols-outlined px-16">account_circle</span>
          <span class="material-symbols-outlined px-16">login</span>
        </section>
      </div>
      {/* {dropDown ? (
        <div
          className={`absolute w-full ease-in-out duration-300 ${
            color.primary ? color.primary : "bg-[#101010]"
          }`}
        >
          {" "}
          <ColorPanel />{" "}
        </div>
      ) : (
        <div
          className={`absolute opacity-0 -translate-y-8 ease-in-out duration-300 w-full`}
        >
          <ColorPanel />
        </div>
      )} */}
      {/* MAIN */}
      <div
        className={`row-span-6 grid grid-flow-col mt-5`}
      >
        {/* medio */}
        <div className={`col-span-5 flex flex-col justify-center items-center`}>
          {/* Brand  y Titulo */}
          <section
            className={`flex items-end justify-around py-1 my-5 pr-96`}
          >
            <img
              src={
                user.logo
                  ? user.logo
                  : "https://res.cloudinary.com/codecrafttemplates/image/upload/v1697050849/codeCraft/logo_c_uuyq2t.png"
              }
              alt=""
              className={`max-h-12 object-scale-down`}
            />
            <span
              className={`text-5xl font-semibold ml-2 ${
                color.text01 ? color.text01 : "text-[#909090]"
              }`}
            >
              {user.name ? user.name : "Your Company"}
            </span>
            {/* <h1
              className={`${
                color.text01 ? color.text01 : "text-[#909090]"
              } text-3xl pl-40 uppercase`}
            >
              Add your Title
            </h1> */}
          </section>
          {/* Centro */}
          <div className={`flex flex-row justify-center items-center`}>
            {/* Imagen Principal */}
            <section
              className={`overflow-hidden bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-400 p-1 rounded `}
            >
              <img src={image} alt="" className={`h-96 object-cover`} />
            </section>
            {/* Imagenes botones */}
            <section className="flex flex-col p-1">
              <button
                onClick={() =>
                  setImage(
                    "https://media.istockphoto.com/id/1373017594/es/foto/auriculares-sobre-fondo-de-color-naranja.jpg?s=612x612&w=0&k=20&c=0X3aIl4Nv7SJZS5VdWpwzyFP4Gd07ov7t72E_Kur9Hc="
                  )
                }
                className="active:blur-md grayscale focus:grayscale-0 pb-0.5"
              >
                <img
                  src="https://media.istockphoto.com/id/1373017594/es/foto/auriculares-sobre-fondo-de-color-naranja.jpg?s=612x612&w=0&k=20&c=0X3aIl4Nv7SJZS5VdWpwzyFP4Gd07ov7t72E_Kur9Hc="
                  alt=""
                  className={`h-32 object-cover`}
                />
              </button>
              <button
                onClick={() =>
                  setImage(
                    "https://images.unsplash.com/photo-1505740106531-4243f3831c78?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                }
                className="active:blur-md grayscale focus:grayscale-0 pb-0.5"
              >
                <img
                  src="https://images.unsplash.com/photo-1505740106531-4243f3831c78?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className={`h-32 object-cover`}
                />
              </button>
              <button
                onClick={() =>
                  setImage(
                    "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                }
                className="active:blur-md grayscale focus:grayscale-0 pb-0.5"
              >
                <img
                  src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className={`h-32 object-cover`}
                />
              </button>
            </section>
          </div>{" "}
          {/* Fin de centro */}
          {/* Epigrafe */}
          <section className="flex justify-end items-end pl-72 pr-72 ml-2 mr-2 text-left pt-4">
            <div className={`flex flex-col justify-start items-start`}>
              <h1
                className={`text-xl uppercase ${
                  color.text01 ? color.text01 : "text-[#909090]"
                }`}
              >
                {" "}
                Introduce your idea{" "}
              </h1>
              <p
                className={`text-sm ${
                  color.text02 ? color.text02 : "text-[#505050]"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi reprehenderit molestiae quibusdam velit ea nulla
                necessitatibus autem, iure cum quis natus ducimus nesciunt sit
                cupiditate, labore consequatur eveniet similique?
              </p>
            </div>
          </section>
          <button
            className={`pl-16 pr-16 my-5 py-1 rounded ${
              color.text01 ? color.text01 : "text-[#909090]"
            } ${color.secondary ? color.secondary : "bg-red-500"}`}
          >
            Action
          </button>
        </div>
      </div>
      {/* MAIN Segunda parte */}
    </div>
  );
};

export default PremiumHome01;
