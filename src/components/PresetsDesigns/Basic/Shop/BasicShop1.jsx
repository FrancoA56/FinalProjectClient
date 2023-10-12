const BasicShop1 = () => {
  return (
    <div className="bg-[#d9d9d9] ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight  text-white not-italic text-xs font-medium leading-tight row-span-1 border  bg-gradient-to-r from-[#2f4c54] to-[#196e5a] border-none ">
          Minimalist Furniture
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2022/10/mesa-y-escritorio-de-oficina-4.9.2-muebles-minimalistas.jpg"
                alt="Escritorio Minimalista"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Desk
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Natural Wood</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$85</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>

          {/*Dining Chair*/}
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2023/10/zeta-chair-dining-chairs.jpg"
                alt="Silla Minimalista"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Dining Chair
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Toasted</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$120</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>

          {/*Dinning green chairs*/}

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2023/09/tendencias-de-decoracion-lampara-colgante-de-techo-unhai-3.0.jpg"
                alt="Sillas verde oliva"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Dining Chairs
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Olive</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$135</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>

          {/*Sofa*/}

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2023/09/mesas-de-centro.jpg"
                alt="Sillón"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Sofa
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Toasted</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$220</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>

          {/*Silla Escritorio*/}

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2023/07/field-desk-home-office.jpg"
                alt="Silla escritorio"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Desk Chair
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Toasted</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$150</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>

          {/*Sillón cuero negro*/}

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2023/06/decoracion-sustentable-alfombra-lines.jpg"
                alt="Silla escritorio"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Leather Sofa
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$350</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>

          {/*Alfombra*/}

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2023/04/alfombra-de-algodon-blanco-del-desierto-alfombra-de-salon.jpg"
                alt="Alfombra gris"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Carpet
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Gray</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$150</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>

          {/*Sillón mostaza*/}

          <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="https://www.ekohunters.com/wp-content/uploads/2023/02/arc-deco-style-2.jpg"
                alt="Sillón amarillo"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Corduroy Sofa
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Mustard</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$350</p>
            </div>
            <div className="bg-[#a6a6a6] border-[#737373]">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Add to cart
            </button>
            </div>
          </div>
  
        </div>
        <div className="flex justify-end">
          <div className="bg-gradient-to-r from-[#2f4c54] to-[#196e5a] flex justify-end p-2 mt-4">
            <button className=" text-white not-italic text-xs font-medium uppercase ">
              Finish and pay
            </button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default BasicShop1;
