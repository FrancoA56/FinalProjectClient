const Banner = () => {
  return (
    // Banner, tamaño y color
    <div
      className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      style={{
        background:
          "radial-gradient(20rem circle at bottom, rgb(105, 105, 105), black)",
      }}
    >

      {/* Centrado del contenido */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        
        {/* Imagen logo */}
        <img
          src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1697045466/codeCraft/grid_landscape_csxysv.png"
          alt="Logo"
          width={"30px"}
        />  
        {/* Texto */}
        <p className="text-sm leading-6 italic text-gray-400">
          {/* Titulo */}
          <strong className="font-bold not-italic text-white">
            CodeCraft Templates
          </strong>
          {/* Circulito separador */}
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          The final project
        </p>
      </div>
      <div className="flex flex-1 justify-end"></div>
    </div>
  );
};

export default Banner;
