// LIBRERIAS
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

// COMPONENTES
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";

const PresetsDetail = () => {
  const URL = process.env.REACT_APP_API;
  const { id } = useParams();
  const [presets, setPresets] = useState({});

  useEffect(() => {
    async function fetchPreset() {
      try {
        const { data } = await axios.get(`${URL}/api/preset/${id}`);
        if (data.name) {
          setPresets(data);
        } else {
          window.alert("Unable to display detail at this time");
        }
      } catch (error) {
        console.log("Error de: " + error);
      }
    }
    fetchPreset();
  }, [id, URL]);
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
              Brief text explaining the preset
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="text-gray-400 font-medium uppercase leading-normal">
                  Type
                </dt>
                <dd className="mt-2 text-sm text-gray-500">{presets.type}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="text-gray-400 font-medium uppercase leading-normal">
                  Category
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {presets.category}{" "}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="text-gray-400 font-medium uppercase leading-normal">
                  Price
                </dt>
                <dd className="mt-2 text-sm text-gray-500">{presets.price}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="text-gray-400 font-medium uppercase leading-normal">
                  Default Color
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {presets.color}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="text-gray-400 font-medium uppercase leading-normalont-medium">
                  Released At
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {Date(presets.release)}
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PresetsDetail;
