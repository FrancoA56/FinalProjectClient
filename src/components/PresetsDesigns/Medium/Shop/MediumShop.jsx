import React from "react";
import DarkMode from "../../../DarkMode/darkmode";

const MediumShop = () => {
  // Ejemplo de datos de Products
  const products = [
    {
      id: 1,
      nombre: "Product 1",
      precio: "$10.00",
      caracteristica: "Lorem ipsum dolor sit amet",
      imagen:
        "https://contents.mediadecathlon.com/p1734862/k$23ba6c8d8d0021b81fcef244aa3c4194/sq/Zapatillas+Trail+Running+Asics+Gel+Fujitrabuco+8+Hombre+Azul+Naranja.jpg",
    },
    {
      id: 2,
      nombre: "Product 2",
      precio: "$15.00",
      caracteristica: "Consectetur adipiscing elit",
      imagen:
        "https://www.squashsource.com/wp-content/uploads/2015/08/Asics-Gel-Fireblast-2-Men-Black-Green.jpg",
    },
    {
      id: 3,
      nombre: "Product 3",
      precio: "$10.00",
      caracteristica: "Lorem ipsum dolor sit amet",
      imagen:
        "https://i.pinimg.com/originals/f7/37/fe/f737fe0e0bed445fac37a60f3abae6ea.jpg",
    },
    {
      id: 4,
      nombre: "Product 4",
      precio: "$15.00",
      caracteristica: "Consectetur adipiscing elit",
      imagen:
        "https://th.bing.com/th/id/OIP.4r3Z1yo5_cV7909JyX7T0wHaHa?pid=ImgDet&w=700&h=700&rs=1",
    },
    {
      id: 5,
      nombre: "Product 5",
      precio: "$10.00",
      caracteristica: "Lorem ipsum dolor sit amet",
      imagen:
        "https://photos6.spartoo.gr/photos/235/23516662/23516662_1200_A.jpg",
    },
    {
      id: 6,
      nombre: "Product 6",
      precio: "$15.00",
      caracteristica: "Consectetur adipiscing elit",
      imagen:
        "https://d13xymm0hzzbsd.cloudfront.net/2/20151029/14461566429942.jpg",
    },
    {
      id: 7,
      nombre: "Product 7",
      precio: "$10.00",
      caracteristica: "Lorem ipsum dolor sit amet",
      imagen:
        "https://th.bing.com/th/id/OIP.yaBgc1bzoa1Ntez1HmZvZgHaHa?pid=ImgDet&w=800&h=800&rs=1",
    },
    {
      id: 8,
      nombre: "Product 8",
      precio: "$15.00",
      caracteristica: "Consectetur adipiscing elit",
      imagen:
        "https://th.bing.com/th/id/R.b0323a15781950f86e376707093189f8?rik=cSk3mIvd49CAnQ&riu=http%3a%2f%2fwww.deportesapalategui.com%2fmedia%2fcatalog%2fproduct%2fcache%2f1%2fimage%2f9df78eab33525d08d6e5fb8d27136e95%2ft%2f6%2ft624n_9007_f_de_althalf3_lr.jpg&ehk=Z4syquCHa539LpKqibTjm7B2T2SKkelS71%2bk%2f3oGPCM%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div className="bg-green-200 dark:bg-[#112213] p-4">
      <div className="bg-green-400 dark:bg-green-800 pt-4 px-4 pb-1 rounded shadow-md my-4 mx-8">
        {/* Barra de búsqueda */}
        <div className="flex items-center flex-wrap justify-between mb-4 ml-6 ">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full sm:w-1/2 px-3 py-2 rounded border bg-green-100 dark:text-gray-200 dark:bg-green-950 dark:border-green-950 mb-2 sm:mb-0"
          />
          <div className="pl-16">
            <DarkMode />
          </div>
          <div className="mr-6 mt-2 sm:mt-0 dark:text-gray-200">
            {/* Dropdowns de filtros */}
            <select className="px-3 py-2 rounded border w-60 mx-4 sm:w-1/4 bg-green-100 dark:bg-green-950 dark:border-green-950 mb-2 sm:mb-0">
              <option value="filtro1">Filter 1</option>
              <option value="filtro2">Filter 2</option>
              <option value="filtro3">Filter 3</option>
            </select>
            <select className="px-3 py-2 rounded border w-60 mx-4 sm:w-1/4 bg-green-100 dark:bg-green-950 dark:border-green-950 mb-2 sm:mb-0">
              <option value="filtro4">Filter 4</option>
              <option value="filtro5">Filter 5</option>
              <option value="filtro6">Filter 6</option>
            </select>
            <select className="px-3 py-2 rounded border w-60 mx-4 sm:w-1/4 bg-green-100 dark:bg-green-950 dark:border-green-950">
              <option value="filtro4">Filter 4</option>
              <option value="filtro5">Filter 5</option>
              <option value="filtro6">Filter 6</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-green-400  dark:bg-green-800 p-4 rounded shadow-md mx-8">
        {/* Listado de Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 p-4">
          {products.map((Product) => (
            <div
              key={Product.id}
              className="bg-green-100 dark:bg-green-950 dark:border-green-950 border rounded p-4 shadow-md flex flex-col mb-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={Product.imagen}
                  alt={Product.nombre}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="mt-4 flex-grow">
                <h2 className="text-lg font-semibold dark:text-gray-200">{Product.nombre}</h2>
                <p className="text-gray-600 dark:text-[#909090]">{Product.caracteristica}</p>
                <p className="text-lg font-semibold mt-2 dark:text-gray-200">{Product.precio}</p>
              </div>
              <div className="mt-4">
                <button className="bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded mr-2">
                  Add to cart
                </button>
                <button className="bg-gray-400 dark:bg-[#303030] text-white px-4 py-2 rounded">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediumShop;
