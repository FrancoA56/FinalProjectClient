const Banner = () => {
  return (
    // Banner, tamaño y color
    <div
      class="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      style={{
        background:
          "radial-gradient(20rem circle at bottom, rgb(105, 105, 105), black)",
      }}
    >

      {/* Centrado del contenido */}
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        
        {/* Imagen logo */}
        <img
          src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1695951292/logos/iso_wfaz4p.png"
          alt="Logo"
          width={"30px"}
        />  
        {/* Texto */}
        <p class="text-sm leading-6 italic text-gray-400">
          {/* Titulo */}
          <strong class="font-bold not-italic text-white">
            CodeCraft Templates
          </strong>
          {/* Circulito separador */}
          <svg
            viewBox="0 0 2 2"
            class="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          The final project
        </p>
      </div>
      <div class="flex flex-1 justify-end"></div>
    </div>
  );
};

export default Banner;
