const Banner = () => {
  return (
    // color centro
    <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      {/* ajuste de tamaño */}
      <div
        class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        {/* color en degrade del centro hacia la izq */}
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#5ec3bf] to-[#000000] opacity-90"></div>
      </div>
      {/* ajuste de tamaño */}
      <div
        class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
        >
        {/* color en degrade del centro hacia la der */}
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#000000] to-[#5ec3bf] opacity-90"></div>
      </div>
      {/* Centrado del contenido */}
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        {/* Imagen logo */}
        <img
          src="https://res.cloudinary.com/dxrjxvxc1/image/upload/v1695951292/logos/iso_wfaz4p.png"
          alt=""
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
