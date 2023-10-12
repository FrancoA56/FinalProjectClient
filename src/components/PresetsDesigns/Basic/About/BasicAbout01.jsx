const Temp01Home = () => {
  return (
    <>
      {/* Brand Banner */}
      <div className="bg-gradient-to-b from-yellow-500  to-yellow-600 h-20 grid grid-cols-12 drop-shadow-[0px_3px_3px_rgb(0,0,0)]">
        <div className="col-span-8 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1696280878/Yourlogo_lmwudj.png"
            className="w-20"
            alt=""
          />
          <h3 className="text-titulo">Company's Brand</h3>
        </div>
      </div>

      {/* desde abajo del banner */}
      <div className="grid h-screen lg:grid-cols-12 md:grid-cols-2">
        {/* Lateral NavBar */}
        <div className="col-span-1 lg:w-3/4 h-full bg-gradient-to-r from-[#303030]  to-[#101010] flex lg:flex-col justify-around items-center md:w-screen md:flex-row">
          <a href="#">
            <i className="fa-solid fa-bars text-yellow-600"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-house text-yellow-600"></i>
          </a>
          <a href="#" className="text-yellow-600">
            About
          </a>
          <a href="#" className="text-yellow-600">
            Services
          </a>
          <a href="#" className="text-yellow-600">
            Contact
          </a>
          <a href="#">
            <i className="fa-solid fa-right-to-bracket text-yellow-600"></i>
          </a>
        </div>
        {/* main */}
        <div
          className="col-span-11
         flex flex-col items-center p-9 h-full"
        >
          {/* Encabezado */}
          <div className="grid w-3/4 grid-cols-3">
            {/* mitad izq */}
            <div className="col-span-2 flex flex-col ">
              <h3 className="items-start text-left text-titulo">About</h3>
              <p className="text-justify text-base my-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                ratione obcaecati dolor ad dolore. Necessitatibus eveniet
                repellat nemo consequatur aspernatur architecto molestias, quo,
                nobis voluptas saepe reprehenderit optio. Voluptatem, nulla?
              </p>
            </div>
            {/* derecha */}
            <div className="flex justify-end items-end">
              <button className="bg-gradient-to-b from-yellow-500  to-yellow-600 w-24 h-8 rounded-md drop-shadow-[0px_5px_4px_rgb(0,0,0)]">
                {" "}
                Go{" "}
              </button>
            </div>
          </div>
          {/* Imagen */}
          <div className="grid grid-cols-3 w-3/4 my-5">
            <div className="col-span-3">
              <img
                src="https://img.freepik.com/fotos-premium/equipo-ingenieros-mecanicos-profesionales-puertas-casco-seguridad-que-trabaja-fabrica-fabricacion-construccion_38052-3223.jpg?w=826"
                alt=""
                className="w-full drop-shadow-[0px_5px_4px_rgb(0,0,0)]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="grid grid-cols-3 h-28 bg-gradient-to-b from-[#dddddd] from-40% to-[#a8a8a8] absolute my-8 items-center">
        <div className="col-span-1 h-4/5  px-5 flex flex-col items-end">
          <h1 className="font-semibold text-[#606060]">CONTACT</h1>
          <a href="" className="text-xs text-[#808080]">
            Email: yourEmail@mail.com
          </a>
          <p className="text-xs text-[#808080]">Phone: +54 xxxx xxxxxx</p>
                  <p className="text-xs text-[#808080]">© 2023 Copyright: <strong>CodeCrafted Templates</strong> </p>
        </div>
        <div className="col-span-1 h-4/5  px-5 flex flex-col items-center">
          <h1 className="font-semibold text-[#606060]">LOREM</h1>
          <p className="text-justify text-xs text-[#808080]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            accusantium possimus debitis necessitatibus beatae aperiam atque,
            illo vel corrupti, natus explicabo incidunt consequatur error.
            Expedita fugiat accusamus aliquid ex earum.
          </p>
        </div>
        <div className="col-span-1 h-4/5  px-5 flex flex-col items-start">
          <h1 className="font-semibold text-[#606060]">SOCIAL MEDIA</h1>
          <a className="text-xs text-[#808080]" href="#">
            <i className="fa-brands fa-instagram mr-1"></i>
            Instagram
          </a>
          <a className="text-xs text-[#808080]" href="#">
            <i className="fa-brands fa-linkedin mr-1"></i>
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
};
export default Temp01Home;
