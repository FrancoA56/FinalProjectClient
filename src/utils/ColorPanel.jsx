import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColors } from "../Redux/actions";
import DarkMode from "../components/DarkMode/darkmode";

const ColorPanel = () => {
  const colores = useSelector((state) => state.colores);
  const dispatch = useDispatch();

  const [color, setColor] = useState({
    primary: "",
    secondary: "",
    text01: "",
    text02: "",
  });

  /* Armo para un dropdown  */
  const [dropDown, setDropDown] = useState({
    primayColor: false,
    secondaryColor: false,
    textColor01: false,
    textColor02: false,
  });

  /* click para el dropdown  */
  const handlerDropDownPc = (e) => {
    e.preventDefault();
    dropDown.primayColor && setDropDown({ primayColor: false });
    !dropDown.primayColor && setDropDown({ primayColor: true });
  };
  /* click para el dropdown  */
  const handlerDropDownSc = (e) => {
    e.preventDefault();
    dropDown.secondaryColor && setDropDown({ secondaryColor: false });
    !dropDown.secondaryColor && setDropDown({ secondaryColor: true });
  };
  /* click para el dropdown  */
  const handlerDropDownT1 = (e) => {
    e.preventDefault();
    dropDown.textColor01 && setDropDown({ textColor01: false });
    !dropDown.textColor01 && setDropDown({ textColor01: true });
  };
  /* click para el dropdown  */
  const handlerDropDownT2 = (e) => {
    e.preventDefault();
    dropDown.textColor02 && setDropDown({ textColor02: false });
    !dropDown.textColor02 && setDropDown({ textColor02: true });
  };

  const handlerPrimaryClick = (value) => {
    const updateColor = { ...color, primary: value };
    setColor(updateColor);
    dispatch(addColors(updateColor));
  };
  const handlerSecondaryClick = (value) => {
    const updateColor = { ...color, secondary: value };
    setColor(updateColor);
    dispatch(addColors(updateColor));
  };
  const handlerText01Click = (value) => {
    const updateColor = { ...color, text01: value };
    setColor(updateColor);
    dispatch(addColors(updateColor));
  };
  const handlerText02Click = (value) => {
    const updateColor = { ...color, text02: value };
    setColor(updateColor);
    dispatch(addColors(updateColor));
  };
  const handlerResetClick = (value) => {
    const updateColor = {
      ...color,
      primary: value,
      secondary: value,
      text01: value,
      text02: value,
    };
    setColor(updateColor);
    dispatch(addColors(updateColor));
  };

  const handleBackClick = (e) => {
    e.preventDefault;
    window.history.back();
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
    "text-white",
    "text-yellow-300",
    "text-yellow-500",
    "text-yellow-700",
    "text-yellow-900",
    "text-orange-100",
    "text-orange-300",
    "text-orange-500",
    "text-orange-900",
    "text-red-300",
    "text-red-500",
    "text-red-700",
    "text-red-900",
    "text-purple-300",
    "text-purple-500",
    "text-purple-700",
    "text-purple-900",
    "text-blue-300",
    "text-blue-500",
    "text-blue-700",
    "text-blue-900",
    "text-green-300",
    "text-green-500",
    "text-green-700",
    "text-green-900",
    "text-stone-300",
    "text-stone-500",
    "text-stone-700",
    "text-stone-900",
    "text-black",
  ];

  return (
    <div className={`grid grid-cols-8 text-white dark:text-[#909090] h-14 rounded-md `}>
      <div className="relative w-24 h-14 flex items-center justify-center z-20 bg-[#303030] rounded-s-md"></div>
      <div className="relative w-24 h-14 flex items-center justify-center z-20 bg-[#303030]">
        <span
          class="absolute material-symbols-outlined cursor-pointer select-none hover:text-[#101010] "
          onClick={handleBackClick}
        >
          arrow_back
        </span>
      </div>
      {/*****************  PRIMARY COLOR ***************/}
      <div className="relative w-24 h-14 flex items-center justify-center z-20 bg-[#303030]">
        <span
          onClick={handlerDropDownPc}
          class="absolute material-symbols-outlined cursor-pointer select-none hover:text-[#101010] "
        >
          colors
        </span>
      </div>
      {dropDown.primayColor ? (
        <div className="absolute flex bg-[#707070c2] pb-2 overflow-hidden px-80 items-center justify-center rounded-t-md transform inset-0 z-0 -translate-y-10 ease-in-out duration-300">
          {bgColors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerPrimaryClick(`${color}`)}
                  className={`w-5 h-5 focus:border focus:h-5 focus:pt-2 focus:mb-1 ${color}`}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden px-80 items-center justify-center rounded-t transform inset-0 z-0 translate-y-1 ease-in-out duration-300 opacity-0">
          {bgColors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerPrimaryClick(`${color}`)}
                  className={`w-5 h-5 hidden ${color}`}
                />
              </div>
            );
          })}
        </div>
      )}

      {/*****************  SECONDARY COLOR ***************/}
      <div className="relative w-24 h-full flex items-center justify-center z-20 bg-[#303030]">
        <span
          onClick={handlerDropDownSc}
          class="absolute material-symbols-outlined cursor-pointer select-none hover:text-[#101010]" 
        >
          colors<span className="text-xs absolute -bottom-0.5 -right-2 font-sans">2</span>
        </span>
      </div>
      {dropDown.secondaryColor ? (
        <div className="absolute flex bg-[#707070c2] pb-2 overflow-hidden px-80 items-center justify-center rounded-t-md transform inset-0 z-0 -translate-y-10 ease-in-out duration-300">
          {bgColors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerSecondaryClick(`${color}`)}
                  className={`w-5 h-5 focus:border focus:h-5 focus:pt-2 focus:mb-1 ${color}`}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden px-80 items-center justify-center rounded-t transform inset-0 z-0 translate-y-10 ease-in-out duration-300 opacity-0">
          {bgColors.map((color) => {
            return (
              <div className="transform translate-y-10 ease-in-out duration-300">
                {/* <div className="relative inset-0 transform translate-y-5 ease-in-out duration-300 opacity-0 "> */}
                <button
                  onClick={() => handlerSecondaryClick(`${color}`)}
                  className={`w-5 h-5 hidden ${color}`}
                />
              </div>
            );
          })}
        </div>
      )}
      {/*****************  TEXT01 COLOR ***************/}
      <div className="w-24 h-full flex items-center justify-center bg-[#303030] z-20">
        <span
          onClick={handlerDropDownT1}
          class="absolute material-symbols-outlined cursor-pointer select-none hover:text-[#101010]" 
        >
          format_color_text
        </span>
      </div>

      {dropDown.textColor01 ? (
        <div className="absolute flex bg-[#707070c2] pb-2 overflow-hidden px-80 items-center justify-center rounded-t-md transform inset-0 z-0 -translate-y-10 ease-in-out duration-300">
          {colors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerText01Click(`${color}`)}
                  className={`w-5 h-5 focus:border focus:h-5 focus:pt-2 focus:mb-1 bg-${color
                    .split("text-")
                    .at(-1)}`}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden px-80 items-center justify-center rounded-t transform inset-0 z-0 translate-y-10 ease-in-out duration-300 opacity-0">
          {colors.map((color) => {
            return (
              <div className="transform translate-y-10 ease-in-out duration-300">
                {/* <div className="relative inset-0 transform translate-y-5 ease-in-out duration-300 opacity-0 "> */}
                <button
                  onClick={() => handlerText01Click(`${color}`)}
                  className={`w-5 h-5 hidden ${color}`}
                />
              </div>
            );
          })}
        </div>
      )}

      {/*****************  TEXT02 COLOR ***************/}
      <div className="w-24 h-full flex items-center justify-center bg-[#303030] z-20">
        <a
          onClick={handlerDropDownT2}
          class="absolute material-symbols-outlined cursor-pointer select-none hover:text-[#101010]" 
        >
          format_color_text<span className="text-xs absolute -bottom-0.5 -right-2 font-sans">2</span>
        </a>
      </div>
      {dropDown.textColor02 ? (
        <div className="absolute flex bg-[#707070c2] pb-2 overflow-hidden px-80 items-center justify-center rounded-t-md transform inset-0 z-0 -translate-y-10 ease-in-out duration-300">
          {colors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerText02Click(`${color}`)}
                  className={`w-5 h-5 focus:border focus:h-5 focus:pt-2 focus:mb-1 bg-${color
                    .split("text-")
                    .at(-1)}`}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden px-80 items-center justify-center rounded-t transform inset-0 z-0 translate-y-10 ease-in-out duration-300 opacity-0">
          {colors.map((color) => {
            return (
              <div className="transform translate-y-10 ease-in-out duration-300">
                {/* <div className="relative inset-0 transform translate-y-5 ease-in-out duration-300 opacity-0 "> */}
                <button
                  onClick={() => handlerText02Click(`${color}`)}
                  className={`w-5 h-5 hidden ${color}`}
                />
              </div>
            );
          })}
        </div>
      )}
      {/* ************************************ */}
      <div className="relative w-24 h-14 flex items-center justify-center z-20 bg-[#303030]">
        <span
          onClick={() => handlerResetClick("")}
          class="absolute material-symbols-outlined cursor-pointer select-none hover:text-[#101010]" 
        >
          restart_alt
        </span>
      </div>
      <div className="relative w-24 h-14 flex items-center justify-center z-20 bg-[#303030] rounded-e-md">
        {/* <DarkMode/> */}
      </div>
    </div>
  );
};

export default ColorPanel;
