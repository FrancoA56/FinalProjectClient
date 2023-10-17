import { useState } from "react";
import { useSelector } from "react-redux";
import ColorPanel from "../../../../utils/ColorPanel";

const BasicHome02 = () => {
  const user = useSelector((state) => state.user);
  // console.log(user);
  const [color, setColor] = useState({
    primary: "bg-[#101010]",
    secondary: "bg-[#505050]",
    text01: "text-[#cacaca]",
    text02: "text-[#303030]",
  });

  const handlerPrimaryClick = (value) => {
    setColor({ ...color, primary: value });
  };
  const handlerSecondaryClick = (value) => {
    setColor({ ...color, secondary: value });
  };
  const handlerText01Click = (value) => {
    setColor({ ...color, text01: value });
  };
  const handlerText02Click = (value) => {
    setColor({ ...color, text02: value });
  };

  const bgColors = [
    "bg-white",
    "bg-yellow-300",
    "bg-yellow-500",
    "bg-yellow-700",
    "bg-yellow-900",
    "bg-orange-100",
    "bg-orange-300",
    "bg-orange-500",
    "bg-orange-900",
    "bg-red-300",
    "bg-red-500",
    "bg-red-700",
    "bg-red-900",
    "bg-purple-300",
    "bg-purple-500",
    "bg-purple-700",
    "bg-purple-900",
    "bg-blue-300",
    "bg-blue-500",
    "bg-blue-700",
    "bg-blue-900",
    "bg-green-300",
    "bg-green-500",
    "bg-green-700",
    "bg-green-900",
    "bg-stone-300",
    "bg-stone-500",
    "bg-stone-700",
    "bg-stone-900",
    "bg-black",
  ];
  const colors = [
    "white",
    "yellow-300",
    "yellow-500",
    "yellow-700",
    "yellow-900",
    "orange-100",
    "orange-300",
    "orange-500",
    "orange-900",
    "red-300",
    "red-500",
    "red-700",
    "red-900",
    "purple-300",
    "purple-500",
    "purple-700",
    "purple-900",
    "blue-300",
    "blue-500",
    "blue-700",
    "blue-900",
    "green-300",
    "green-500",
    "green-700",
    "green-900",
    "stone-300",
    "stone-500",
    "stone-700",
    "stone-900",
    "black",
  ];
  return (
    <div
      class={`bg-fixed`}
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/hamburguesa-queso-gourmet-parrilla-sobre-mesa-rustica-madera-interior-generada-inteligencia-artificial_24911-96797.jpg?w=826')",
        backgroundSize: "cover",
      }}
    >
             
      {/* ********************* NAVBAR ************************* */}
      <div
        className={`${color.secondary} fixed h-16 max-h-16 w-screen z-50 overflow-hidden grid grid-cols-6 items-center shadow-md pr-5`}
      >
        <div className={`h-16 flex items-center justify-center py-1`}>
          <img
            src={
              user.logo
                ? user.logo
                : "https://res.cloudinary.com/codecrafttemplates/image/upload/v1697050849/codeCraft/logo_c_uuyq2t.png"
            }
            alt="logo"
            className={`h-full`}
          />
        </div>
        <div className={`flex`}>
          <h1
            className={`pl-2 font-semibold text-title uppercase ${color.text01}`}
          >
            {user.name ? user.name : "your company name"}
          </h1>
        </div>
        <div className={`${color.text01}`}>
          <a href="#home">
            <i class="fa-solid fa-house" />
          </a>
        </div>
        <div className={`${color.text01}`}>
          <a href="#elaboration">
            <i class="fa-solid fa-store" />
          </a>
        </div>
        <div className={`${color.text01}`}>
          <a href="#about">
            <i class="fa-solid fa-users" />
          </a>
        </div>
        <div className={`${color.text01}`}>
          <a href="#contact">
            <i class="fa-solid fa-palette"></i>
          </a>
        </div>
      </div>
      {/* ********************************************** */}

           {/* ********************  COLOR PANEL ****************** */}
      <div className={`bg-[#303030] w-full pt-16 flex flex-col items-center justify-center`}>
        {/* ******************** SET COLOR PRIMARY ****************** */}
        <div className="flex flex-row">
          {bgColors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerPrimaryClick(`${color}`)}
                  className={`w-8 h-4 ${color} border border-transparent focus:border-double focus:border-logo`}
                />
              </div>
            );
          })}
        </div>
        {/* ******************** SET COLOR SECONDARY ****************** */}
        <div className="flex flex-row">
          {bgColors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerSecondaryClick(`${color}`)}
                  className={`w-8 h-4 ${color} border border-transparent focus:border-double focus:border-logo `}
                />
              </div>
            );
          })}
        </div>
        {/* ******************** SET COLOR TEXT01 ****************** */}
        <div className="flex flex-row">
          {colors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerText01Click(`text-${color}`)}
                  className={`w-8 h-4 bg-${color} border border-transparent focus:border-double focus:border-logo `}
                />
              </div>
            );
          })}
        </div>
        {/* ******************** SET COLOR TEXT02 ****************** */}
        <div className="flex flex-row">
          {colors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerText02Click(`text-${color}`)}
                  className={`w-8 h-4 bg-${color} border border-transparent focus:border-double focus:border-logo `}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`grid grid-flow-col`}>
        <div className={`col-span-2 ${color.primary} w-16`}></div>
        <div className={`col-span-7`}>
          <div
            id="home"
            className={`${color.primary} h-16 grid grid-cols-2`}
          ></div>
          {/* ************* TITLE *****************/}
          <div className="h-96 bg-[#000000a9]">
            <div
              className={`p-2 ${color.text01} h-full flex flex-col items-center justify-center`}
            >
              {" "}
              <h1
                className={`font-semibold text-7xl py-5 border-b-2 border-[#922c29]`}
              >
                Add Your Title
              </h1>
              <p className={`w-1/2 pt-2`}>
                Use this space to elaborate on the ideas introduced in the
                title. Include the information that makes the most sense for
                your brand.
              </p>
            </div>
          </div>
          {/* ************* ELABORATION *****************/}
          <div
            id="elaboration"
            className={`${color.primary} h-16 flex items-end justify-center`}
          >
            <hr className="border border-[#922c29] w-11/12" />
          </div>
          <div className={`${color.primary} h-96 grid grid-cols-4 pt-10`}>
            {/* Primer columna */}
            <div className={`flex flex-col justify-center items-center`}>
              <div
                className={`flex flex-col items-center justify-center h-3/4 w-3/4 border-2 border-[#909090] rounded-xl  bg-[#922c29] shadow-md px-5`}
              >
                <h1 className={`pb-3 uppercase font-bold ${color.text01}`}>
                  Introduce your idea
                </h1>
                <p className={`pb-5 ${color.text02}`}>
                  Use this space to elaborate on your headline and connect with
                  your visitors.
                </p>
                <button
                  className={`${color.primary} ${color.text01} rounded-md px-5 py-2`}
                >
                  Action
                </button>
              </div>
              {/* Segunda columna */}
            </div>
            <div className={`flex flex-col justify-center items-center`}>
              <div
                className={`flex flex-col items-center justify-center h-3/4 w-3/4 border-2 border-[#909090] rounded-xl ${color.secondary} shadow-md overflow-hidden`}
              >
                <img
                  src="https://img.freepik.com/foto-gratis/bollos-hamburguesa-semillas-sesamo-harina-mesa_140725-10881.jpg?w=740&t=st=1697284258~exp=1697284858~hmac=5781cd063eefdca4fb73d77ee0d3c4d66d70749534e7f34ab9f44578f5f93da3"
                  alt=""
                />
              </div>
            </div>
            {/* Tercer columna */}
            <div className={`flex flex-col justify-center items-center`}>
              <div
                className={`flex flex-col items-center justify-center h-3/4 w-3/4 border-2 border-[#909090] rounded-xl bg-[#922c29] shadow-md px-5`}
              >
                <h1 className={`pb-3 uppercase font-bold ${color.text01}`}>
                  Introduce your idea
                </h1>
                <p className={`pb-5 ${color.text02}`}>
                  Use this space to elaborate on your headline and connect with
                  your visitors.
                </p>
                <button
                  className={`${color.primary} ${color.text01} rounded-md px-5 py-2`}
                >
                  Action
                </button>
              </div>
            </div>
            {/* Cuarta columna */}
            <div className={`flex flex-col justify-center items-center`}>
              <div
                className={`flex flex-col items-center justify-center h-3/4 w-3/4 border-2 border-[#909090] rounded-xl ${color.secondary} shadow-md overflow-hidden`}
              >
                <img
                  src="https://img.freepik.com/foto-gratis/hamburguesas-ternera-cruda-hierbas-especias_114579-8674.jpg?size=626&ext=jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-2 ${color.primary} w-16`}></div>
      </div>
    </div>
  );
};

export default BasicHome02;
