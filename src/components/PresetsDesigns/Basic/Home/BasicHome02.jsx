import { useState } from "react";
import { useSelector } from "react-redux";

const BasicHome02 = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [color, setColor] = useState({
    primary: "bg-[#101010]",
    secondary: "bg-[#505050]",
    text01: "text-[#922c29]",
    text02: "text-[#cacaca]",
    text03: "text-[#303030]",
  });

  const handlerPrimaryClick = (value) => {
    setColor({...color, primary:value})
  }
  const handlerSecondaryClick = (value) => {
    setColor({...color, secondary:value})
  }
  const handlerText02Click = (value) => {
    setColor({...color, text02:value})
  }
  const handlerText03Click = (value) => {
    setColor({...color, text03:value})
  }

  return (
    <div
      class={`bg-fixed`}
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/hamburguesa-queso-gourmet-parrilla-sobre-mesa-rustica-madera-interior-generada-inteligencia-artificial_24911-96797.jpg?w=826')",
        backgroundSize: "cover",
      }}
    >

      {/* ******************** SET COLOR PRIMARY ****************** */}
      <div>
      <button onClick={()=>handlerPrimaryClick("bg-[#901010]")} className="w-5 h-5 rounded-md bg-[#901010]"/>
      <button onClick={()=>handlerPrimaryClick("bg-[#109010]")} className="w-5 h-5 rounded-md bg-[#109010]"/>
      <button onClick={()=>handlerPrimaryClick("bg-[#101090]")} className="w-5 h-5 rounded-md bg-[#101090]"/>
      <button onClick={()=>handlerPrimaryClick("bg-[#000000]")} className="w-5 h-5 rounded-md bg-[#000000]"/>
      <button onClick={()=>handlerPrimaryClick("bg-[#909010]")} className="w-5 h-5 rounded-md bg-[#909010]"/>
      </div>
      {/* ******************** SET COLOR SECONDARY ****************** */}
      <div>
      <button onClick={()=>handlerSecondaryClick("bg-[#901010]")} className="w-5 h-5 rounded-md bg-[#901010]"/>
      <button onClick={()=>handlerSecondaryClick("bg-[#109010]")} className="w-5 h-5 rounded-md bg-[#109010]"/>
      <button onClick={()=>handlerSecondaryClick("bg-[#101090]")} className="w-5 h-5 rounded-md bg-[#101090]"/>
      <button onClick={()=>handlerSecondaryClick("bg-[#000000]")} className="w-5 h-5 rounded-md bg-[#000000]"/>
      <button onClick={()=>handlerSecondaryClick("bg-[#9e5612]")} className="w-5 h-5 rounded-md bg-[#9e5612]"/>
      </div>
      {/* ******************** SET COLOR TEXT02 ****************** */}
      <div>
      <button onClick={()=>handlerText02Click("text-[#901010]")} className="w-5 h-5 rounded-md bg-[#901010]"/>
      <button onClick={()=>handlerText02Click("text-[#109010]")} className="w-5 h-5 rounded-md bg-[#109010]"/>
      <button onClick={()=>handlerText02Click("text-[#101090]")} className="w-5 h-5 rounded-md bg-[#101090]"/>
      <button onClick={()=>handlerText02Click("text-[#000000]")} className="w-5 h-5 rounded-md bg-[#000000]"/>
      <button onClick={()=>handlerText02Click("text-[#9e5612]")} className="w-5 h-5 rounded-md bg-[#9e5612]"/>
      </div>
      {/* ******************** SET COLOR TEXT03 ****************** */}
      <div>
      <button onClick={()=>handlerText03Click("text-[#901010]")} className="w-5 h-5 rounded-md bg-[#901010]"/>
      <button onClick={()=>handlerText03Click("text-[#109010]")} className="w-5 h-5 rounded-md bg-[#109010]"/>
      <button onClick={()=>handlerText03Click("text-[#101090]")} className="w-5 h-5 rounded-md bg-[#101090]"/>
      <button onClick={()=>handlerText03Click("text-[#000000]")} className="w-5 h-5 rounded-md bg-[#000000]"/>
      <button onClick={()=>handlerText03Click("text-[#9e5612]")} className="w-5 h-5 rounded-md bg-[#9e5612]"/>
      </div>
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
            className={`pl-2 font-semibold text-title uppercase ${color.text02}`}
          >
            {user.name ? user.name : "your company name"}
          </h1>
        </div>
        <div className={`${color.text02}`}>
          <a href="#home"><i class="fa-solid fa-house"/></a>
        </div>
        <div className={`${color.text02}`}>
          <a href="#elaboration"><i class="fa-solid fa-store"/></a>
        </div>
        <div className={`${color.text02}`}>
          <a href="#about"><i class="fa-solid fa-users"/></a>
        </div>
        <div className={`${color.text02}`}>
          <a href="#contact"><i class="fa-solid fa-address-card"/></a>
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
                <h1 className={`pb-3 uppercase font-bold ${color.text02}`}>
                  Introduce your idea
                </h1>
                <p className={`pb-5 ${color.text03}`}>
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
                <h1 className={`pb-3 uppercase font-bold ${color.text02}`}>
                  Introduce your idea
                </h1>
                <p className={`pb-5 ${color.text03}`}>
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
        </div>
        <div className={`col-span-2 ${color.primary} w-16`}></div>
      </div>
    </div>
  );
};

export default BasicHome02;
