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
    <div className="container mx-auto">
      {/* LA parte de adelante */}
      <div className="absolute bottom-2 w-full bg-[#303030] text-white dark:text-[#909090] rounded h-16 z-20 flex items-center justify-around">
        {/*****************  BACK ***************/}
        <a
          class="material-symbols-outlined cursor-pointer select-none hover:text-[#101010] "
          onClick={handleBackClick}
        >
          arrow_back
        </a>
        {/*****************  PRIMARY COLOR ***************/}
        <a
          class="material-symbols-outlined cursor-pointer select-none hover:text-[#101010] "
          onClick={handlerDropDownPc}
        >
          colors
        </a>
        {/*****************  SECONDARY COLOR ***************/}
        <a
          class="material-symbols-outlined cursor-pointer select-none hover:text-[#101010] "
          onClick={handlerDropDownSc}
        >
          colors{" "}
          <span className="text-xs absolute top-8 ml-1 font-sans inset-y-0">
            2
          </span>
        </a>
        {/*****************  TEXT01 COLOR ***************/}
        <a
          class="material-symbols-outlined cursor-pointer select-none hover:text-[#101010] "
          onClick={handlerDropDownT1}
        >
          format_color_text
        </a>
        {/*****************  TEXT02 COLOR ***************/}
        <a
          class="material-symbols-outlined cursor-pointer select-none hover:text-[#101010] "
          onClick={handlerDropDownT2}
        >
          format_color_text{" "}
          <span className="text-xs absolute rigth-96 top-8 ml-1 font-sans inset-y-0">
            2
          </span>
        </a>
        {/* ************* RESET *********************** */}

        <a
          onClick={() => handlerResetClick("")}
          class="material-symbols-outlined cursor-pointer select-none hover:text-[#101010]"
        >
          restart_alt
        </a>
      </div>
      {/* La parte de atras */}

      {/*****************  PRIMARY COLOR ***************/}
      <div className="absolute bottom-2 w-full h-16  rounded-t-md z-10">
        {dropDown.primayColor ? (
          <div className="absolute inset-0 flex justify-center items-center bg-[#505050c2] rounded-t-md transform xl:-translate-y-10 -translate-y-16 ease-in-out duration-300 flex-wrap pb-4 pt-2">
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
          <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden items-center justify-center rounded-t transform inset-0 z-0 translate-y-1 ease-in-out duration-300 opacity-0">
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
        {dropDown.secondaryColor ? (
          <div className="absolute inset-0 flex justify-center items-center bg-[#505050c2] rounded-t-md transform xl:-translate-y-10 -translate-y-16 ease-in-out duration-300 flex-wrap pb-4 pt-2">
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
          <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden items-center justify-center rounded-t transform inset-0 z-0 translate-y-1 ease-in-out duration-300 opacity-0">
            {bgColors.map((color) => {
              return (
                <div>
                  <button
                    onClick={() => handlerSecondaryClick(`${color}`)}
                    className={`w-5 h-5 hidden ${color}`}
                  />
                </div>
              );
            })}
          </div>
        )}
        {/*****************  TEXT COLOR 01 ***************/}
        {dropDown.textColor01 ? (
          <div className="absolute inset-0 flex justify-center items-center bg-[#505050c2] rounded-t-md transform xl:-translate-y-10 -translate-y-16 ease-in-out duration-300 flex-wrap pb-4 pt-2">
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
          <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden items-center justify-center rounded-t transform inset-0 z-0 translate-y-1 ease-in-out duration-300 opacity-0">
            {colors.map((color) => {
              return (
                <div>
                  <button
                    onClick={() => handlerText01Click(`${color}`)}
                    className={`w-5 h-5 hidden bg-${color
                      .split("text-")
                      .at(-1)}`}
                  />
                </div>
              );
            })}
          </div>
        )}
        {/*****************  TEXT COLOR 02 ***************/}
        {dropDown.textColor02 ? (
          <div className="absolute inset-0 flex justify-center items-center bg-[#505050c2] rounded-t-md transform xl:-translate-y-10 -translate-y-16 ease-in-out duration-300 flex-wrap pb-4 pt-2">
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
          <div className="absolute flex bg-[#505050c2] pt-2 overflow-hidden items-center justify-center rounded-t transform inset-0 z-0 translate-y-1 ease-in-out duration-300 opacity-0">
            {colors.map((color) => {
              return (
                <div>
                  <button
                    onClick={() => handlerText02Click(`${color}`)}
                    className={`w-5 h-5 hidden bg-${color
                      .split("text-")
                      .at(-1)}`}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPanel;
