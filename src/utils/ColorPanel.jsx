import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColors } from "../Redux/actions";

const ColorPanel = () => {
  const colores = useSelector((state) => state.colores);
  const dispatch = useDispatch();

  const [color, setColor] = useState({
    primary: "",
    secondary: "",
    text01: "",
    text02: "",
  });

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

  console.log("estado local", color);
  console.log("estado global", colores);
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
    <div className={`w-full flex flex-col items-center justify-center`}>
      {/* ******************** SET COLOR PRIMARY ****************** */}
      <div className="grid grid-cols-8">
        <div className="flex justify-end mr-2">
          <h2
            className={`font-semibold text-sm capitalize ${
              color.primary === "bg-black" || color.primary === "bg-stone-900"
                ? "text-[#909090]"
                : "text-[#101010]"
            }`}
          >
            BackGround 01
          </h2>
        </div>
        <div className="col-span-7 flex flex-row">
          {bgColors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerPrimaryClick(`${color}`)}
                  className={`w-8 h-4 ${color} border-t border-b border-[#505050] focus:border-double focus:border-logo`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* ******************** SET COLOR SECONDARY ****************** */}
      <div className="grid grid-cols-8">
        <div className="flex justify-end mr-2">
          <h2
            className={`font-semibold text-sm capitalize ${
              color.primary === "bg-black" || color.primary === "bg-stone-900"
                ? "text-[#909090]"
                : "text-[#101010]"
            }`}
          >
            BackGround 02
          </h2>
        </div>
        <div className="col-span-7 flex flex-row">
          {/* <h2>BackG Color 02</h2> */}
          {bgColors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerSecondaryClick(`${color}`)}
                  className={`w-8 h-4 ${color} border-t border-b border-[#505050] focus:border-double focus:border-logo`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* ******************** SET COLOR TEXT01 ****************** */}
      <div className="grid grid-cols-8">
        <div className="flex justify-end mr-2">
          <h2
            className={`font-semibold text-sm capitalize ${
              color.primary === "bg-black" || color.primary === "bg-stone-900"
                ? "text-[#909090]"
                : "text-[#101010]"
            }`}
          >
            Text 01
          </h2>
        </div>
        <div className="col-span-7 flex flex-row">
          {colors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerText01Click(`${color}`)}
                  className={`w-8 h-4 bg-${color
                    .split("text-")
                    .at(
                      -1
                    )}  border-t border-b border-[#505050] focus:border-double focus:border-logo`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* ******************** SET COLOR TEXT02 ****************** */}
      <div className="grid grid-cols-8">
        <div className="flex justify-end mr-2">
          <h2
            className={`font-semibold text-sm capitalize ${
              color.primary === "bg-black" || color.primary === "bg-stone-900"
                ? "text-[#909090]"
                : "text-[#101010]"
            }`}
          >
            Text 02
          </h2>
        </div>
        <div className="col-span-7 flex flex-row">
          {colors.map((color) => {
            return (
              <div>
                <button
                  onClick={() => handlerText02Click(`${color}`)}
                  className={`w-8 h-4 bg-${color
                    .split("text-")
                    .at(
                      -1
                    )}  border-t border-b border-[#505050] focus:border-double focus:border-logo`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorPanel;
