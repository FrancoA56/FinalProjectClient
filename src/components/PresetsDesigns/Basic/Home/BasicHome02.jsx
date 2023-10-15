import { useState } from "react";
import { useSelector } from "react-redux";

const BasicHome02 = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [color, setColor] = useState({
    primary: "bg-[#101010]",
    secondary: "[#505050]",
    text01: "text-[#922c29]",
    text02: "text-[#cacaca]",
    text03: "[#303030]",
  });

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
        className={`bg-${color.secondary} fixed h-16 max-h-16 w-screen z-50 overflow-hidden grid grid-cols-6 items-center shadow-md pr-5`}
      >
        <div
          className={`h-16 flex items-center justify-center py-1`}
        > 
          <img
            src={user.logo ? user.logo : "https://res.cloudinary.com/codecrafttemplates/image/upload/v1697050849/codeCraft/logo_c_uuyq2t.png"}
            alt="logo"
            className={`h-full`}
          />
        </div>
        <div className={`flex`}>
          <h1
            className={`pl-2 font-semibold text-title uppercase ${color.text02}`}
          >
            {user.name ? user.name : "your company name"}
          </h1>
        </div>
        <div className={`capitalize font-medium`}>
          <a href="#home">Home</a>
        </div>
        <div className={`capitalize font-medium`}>
          <a href="#elaboration">Elaboration</a>
        </div>
        <div className={`capitalize font-medium`}>
          <a href="#about">About</a>
        </div>
        <div className={`capitalize font-medium`}>
          <a href="#contact">Contact</a>
        </div>
      </div>
      {/* ********************************************** */}

      <div className={`grid grid-flow-col`}>
        <div className={`col-span-2 ${color.primary} w-16`}></div>
        <div className={`col-span-7`}>
          <div
            id="home"
            className={`${color.primary} h-16 mt-16 grid grid-cols-2`}
          ></div>
          {/* ************* TITLE *****************/}
          <div className="h-96 bg-[#000000a9]">
            <div
              className={`p-2 ${color.text02} h-full flex flex-col items-center justify-center`}
            >
              {" "}
              <h1
                className={`font-semibold text-7xl py-5 border-b-2 border-[#922c29]`}
              >
                Add Your Title
              </h1>
              <p className={`w-1/2`}>
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
                <h1 className={`pb-5 uppercase font-bold ${color.text02}`}>
                  Introduce your idea
                </h1>
                <p className={`pb-10 ${color.text03}`}>
                  Use this space to elaborate on your headline and connect with
                  your visitors.
                </p>
                <button
                  className={`${color.primary} ${color.text02} rounded-md px-5 py-2`}
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
                <h1 className={`pb-5 uppercase font-bold ${color.text02}`}>
                  Introduce your idea
                </h1>
                <p className={`pb-10 ${color.text03}`}>
                  Use this space to elaborate on your headline and connect with
                  your visitors.
                </p>
                <button
                  className={`${color.primary} ${color.text02} rounded-md px-5 py-2`}
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
          {/* ************* ABOUT *****************/}
          <div
            id="about"
            className={`${color.primary} h-16 flex items-end justify-center`}
          >
            {" "}
            <hr className="border border-[#922c29] w-11/12" />
          </div>

          <div
            className={`${color.primary} grid grid-cols-2 h-96 pt-10 overflow-hidden`}
          >
            <div className={`flex flex-col justify-center items-center`}>
              <div
                className={`flex flex-col items-end justify-center h-full w-3/4 rounded-sm overflow-hidden grayscale`}
              >
                <img
                  src="https://img.freepik.com/foto-gratis/chef-realiza-como-hacer-buger-adecuado-comida-deliciosa_482257-24283.jpg?size=626&ext=jpg"
                  alt=""
                  className="pb-5"
                />
              </div>
            </div>
            <div className={`flex flex-col items-start justify-start`}>
              <p className={`text-left w-3/4 h-3/4 ${color.text02}`}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias doloribus, reprehenderit repellat dignissimos magni
                expedita unde doloremque voluptatum culpa fugiat sequi error
                quidem fuga placeat. Et quisquam ab qui vitae. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Blanditiis beatae
                cum officiis perferendis cumque. Eveniet maxime architecto,
                aperiam id asperiores repellat culpa quas natus. Velit dolorum
                excepturi omnis doloremque molestiae. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Officiis dolorum reiciendis
                libero, porro id consectetur, expedita accusantium quo nulla
                placeat vitae. Alias repellendus pariatur laboriosam cumque
                quasi delectus nemo asperiores...
              </p>
            </div>
          </div>
          {/* ************* CONTACT *****************/}
          <div
            id="contact"
            className={`${color.primary} h-16 flex items-end justify-center`}
          >
            <hr className="border border-[#922c29] w-11/12" />
          </div>
          <div
            className={`h-32 flex flex-col items-center justify-center ${color.primary}`}
          >
            <h1
              className={`uppercase font-bold ${color.text02} pb-2 border-b border-[#922c29]`}
            >
              Contact us
            </h1>
            <div className={`flex pt-5`}>
              <a href="#" target="_blank">
                <i class={`text-3xl fa-brands ${color.text01} fa-facebook `} />
              </a>
              <a href="#" target="_blank">
                <i
                  class={`text-3xl fa-brands ${color.text01} fa-instagram ml-20`}
                />
              </a>
              <a href="#" target="_blank">
                <i
                  class={`text-3xl fa-brands ${color.text01} fa-whatsapp ml-20`}
                />
              </a>
              <a href="#" target="_blank">
                <i
                  class={`text-3xl fa-brands ${color.text01} fa-twitter ml-20`}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={`col-span-2 ${color.primary} w-16`}></div>
      </div>
    </div>
  );
};

export default BasicHome02;
