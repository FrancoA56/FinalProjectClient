import { useState } from "react";
import { useSelector } from "react-redux";
import ColorPanel from "../../../../utils/ColorPanel";

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
    <div
      className={`grid min-h-screen max-w-screen ${
        color.primary ? color.primary : "bg-zinc-900"
      }`}
    >
      {/* <ColorPanel/> */}
      {dropDown ? (
        <div
          className={`relative w-full ease-in-out duration-300 ${
            color.primary ? color.primary : "bg-[#101010]"
          }`}
        >
          {" "}
          <ColorPanel />{" "}
        </div>
      ) : (
        <div
          className={`absolute opacity-0 -top-24 w-full ease-in-out duration-300`}
        >
          <ColorPanel />
        </div>
      )}
      {/* section */}
      <div className={`flex flex-col ease-in-out duration-300`}>
        <section
          className={`mt-3 z-10 ${
            color.text01 ? color.text01 : "text-[#909090]"
          }`}
        >
          <a href="" className="hover:text-[#101010]">
            <span class="material-symbols-outlined px-16">home</span>
          </a>
          <a href="">
            <span
              onClick={handlerDropDown}
              class="material-symbols-outlined px-16"
            >
              format_color_fill
            </span>
          </a>
          <a href="">
            <span class="material-symbols-outlined px-16">shopping_bag</span>
          </a>
          <a href="">
            <span class="material-symbols-outlined px-16">shopping_cart</span>
          </a>
          <a href="">
            <span class="material-symbols-outlined px-16">account_circle</span>
          </a>
          <a href="">
            <span class="material-symbols-outlined px-16">login</span>
          </a>
        </section>
      </div>
      {/* MAIN */}
      <div className={`row-span-6 grid grid-flow-col mt-5`}>
        {/* medio */}
        <div className={`col-span-5 flex flex-col justify-center items-center`}>
          {/* Brand  y Titulo */}
          <section className={`flex items-end justify-around py-1 my-5 pr-96`}>
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
                className={`${
                  image ===
                    "https://media.istockphoto.com/id/1373017594/es/foto/auriculares-sobre-fondo-de-color-naranja.jpg?s=612x612&w=0&k=20&c=0X3aIl4Nv7SJZS5VdWpwzyFP4Gd07ov7t72E_Kur9Hc=" &&
                  "grayscale-0"
                } active:blur-md grayscale focus:grayscale-0 pb-0.5`}
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
              color.text01 ? color.text01 : "text-[#101010]"
            } ${color.secondary ? color.secondary : "bg-[#909090]"}`}
          >
            Action
          </button>
          {/* Abajo de todo */}
          {/* Abajo de todo */}
          {/* Abajo de todo */}
          {/* Abajo de todo */}
          {/* Abajo de todo */}
          {/* Abajo de todo */}
          <div className={`mt-5`}>
            <div
              className={`flex flex-row items-center ${color.secondary ? color.secondary : "bg-[#909090]"} justify-between overflow-hidden rounded`}
            >
              <p className={`${color.text02 ? color.text02 : 'text-[#101010]'} text-sm w-96 mr-2 text-right`}>
                {" "}
                Use this space to elaborate on your headline and connect with
                your visitors. You can build on the first idea or add your
                second point. Now that you've got your visitors' attention, let
                them know what they can expect, and encourage them to explore
                your site.{" "}
              </p>
              <div className={`h-48 w-48 rounded ml-2`}>
                <img
                  src="https://media.istockphoto.com/id/1352181865/es/foto/auriculares-monocrom%C3%A1ticos-de-color-rojo-sobre-la-oreja-en-un-estudio-rojo-vista-frontal.jpg?s=612x612&w=0&k=20&c=ISOJNCeFXZ04fvOdmoc6bPvyVBwFP2XyPWcTaDXFSLo="
                  alt=""
                  className={`h-48 w-48 object-cover`}
                />
              </div>
            </div>
            <div
              className={`flex flex-row items-center ${color.secondary ? color.secondary : "bg-[#909090]"} justify-between overflow-hidden rounded mt-5 mb-5`}
            >
              <div className={`h-48 w-48 rounded mr-2`}>
                <img
                  src="https://media.istockphoto.com/id/1352182490/es/foto/auriculares-monocrom%C3%A1ticos-de-color-rojo-sobre-la-oreja-en-un-estudio-rojo-vista-frontal.jpg?s=612x612&w=0&k=20&c=9s4Yfiqr-HqeUG3ob-D9g0jmeAGgPdIlKxFCOSn9h5c="
                  alt=""
                  className={`h-48 w-48 object-cover`}
                />
              </div>
              <p className={`${color.text02 ? color.text02 : 'text-[#101010]'} text-sm w-96 ml-2 text-left`}>
                {" "}
                Use this space to elaborate on your headline and connect with
                your visitors. You can build on the first idea or add your
                second point. Now that you've got your visitors' attention, let
                them know what they can expect, and encourage them to explore
                your site.{" "}
              </p>
            </div>
            <div
              className={`flex flex-row items-center ${color.secondary ? color.secondary : "bg-[#909090]"} justify-between overflow-hidden rounded mb-5`}
            >
              <p className={`${color.text02 ? color.text02 : 'text-[#101010]'} text-sm w-96 mr-2 text-right`}>
                {" "}
                Use this space to elaborate on your headline and connect with
                your visitors. You can build on the first idea or add your
                second point. Now that you've got your visitors' attention, let
                them know what they can expect, and encourage them to explore
                your site.{" "}
              </p>
              <div className={`h-48 w-48 rounded ml-2`}>
                <img
                  src="https://media.istockphoto.com/id/1352182482/es/foto/auriculares-monocrom%C3%A1ticos-de-color-rojo-sobre-la-oreja-en-un-estudio-rojo-vista-frontal.jpg?s=612x612&w=0&k=20&c=NXKYA_BzW6UfDWrSeAo61ia6VK2-UHpoeKMb4MeQICY="
                  alt=""
                  className={`h-48 w-48 object-cover`}
                />
              </div>
            </div>
          </div>
          {/* Aaaaaaaaaaaaaaaaaaa */}
          {/* Aaaaaaaaaaaaaaaaaaa */}
          {/* Aaaaaaaaaaaaaaaaaaa */}
          {/* Aaaaaaaaaaaaaaaaaaa */}
          {/* Aaaaaaaaaaaaaaaaaaa */}
          {/* Aaaaaaaaaaaaaaaaaaa */}
          {/* Aaaaaaaaaaaaaaaaaaa */}
        </div>
      </div>
    </div>
  );
};

export default PremiumHome01;
