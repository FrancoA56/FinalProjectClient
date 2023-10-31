import React from "react";
import "tailwindcss/tailwind.css";

const BasicHome1 = () => {
  return (
    <>
      <div className="grid h-screen bg-white">
        {/* BANNER --> esta vale 1 fila */}
        <div className="row-span-1 border  bg-gradient-to-r from-blue-900 to-blue-500 border-none ">
          <p className="item-center mt-3 ">
            {/* Company´s Name */}
            <strong className="leading-6 italic text-white font-bold not-italic text-s font-medium uppercase leading-tight">
              Company´s Name
            </strong>
            {/* Logo */}
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
            </svg>
          </p>
        </div>
        {/* esta vale 6 filas (creo q es el maximo) */}
        <div className="row-span-6 bg-transparent">
          {/* a su vez lo podemos dividir en mas filas o en columnas: lo dividi en 5 cols */}
          <div className="grid grid-cols-12 h-full">
            {" "}
            {/* si ponemos contenido aca, te tira lo demas para abajo */}
            {/* a cada uno de estos lo podemos declarar como flex para ordenarlo */}
            <div className="flex w-22  col-span-1 flex items-center justify-start bg-gradient-to-r from-blue-900 to-blue-500 border-none">
              <nav
                id="sidenav-4"
                className=""
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-mode="side"
                data-te-sidenav-slim="true"
                data-te-sidenav-content="#slim-content"
                data-te-sidenav-slim-collapsed="true"
              >
                {/*Toggler*/}
                <button
                  className="mr-1 mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  data-te-sidenav-toggle-ref
                  data-te-target="#sidenav-4"
                  aria-controls="#sidenav-4"
                  aria-haspopup="true"
                >
                  <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <button
                  className="mt-10 mb-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  aria-haspopup="true"
                  id="slim-toggler"
                >
                  Shop
                </button>

                <ul
                  className="relative m-0 list-none px-[0.2rem]"
                  data-te-sidenav-menu-ref
                >
                  <li className="relative">
                    <a
                      className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-white-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-white-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                      data-te-sidenav-link-ref
                    >
                      <span className="mr-4 [&>svg]:h-4 [&>svg]:w-12 [&>svg]:text-white dark:[&>svg]:text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                      </span>

                      <span
                        className="absolute right-0 ml-auto mr-10 transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-white dark:[&>svg]:text-gray-300"
                        data-te-sidenav-rotate-icon-ref
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-white outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                      data-te-sidenav-link-ref
                    >
                      <span className="mr-4 [&>svg]:h-4 [&>svg]:w-12 [&>svg]:text-white dark:[&>svg]:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>

                      <span
                        className="absolute right-0 ml-auto mr-10 transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-dark dark:[&>svg]:text-gray-300"
                        data-te-sidenav-rotate-icon-ref
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-2 "></div>
            <div className="col-span-7 mt-11  border-none">
              <img
                src="https://img.freepik.com/foto-gratis/persona-vista-superior-escribiendo-computadora-portatil-espacio-copia_23-2148708035.jpg?w=1380&t=st=1696630798~exp=1696631398~hmac=3c9b2cd020bbbb3d79455fc29dbd293c32e1b0e6ec628e75895c9d913dd8f255"
                alt="Computer Image"
                className="relative ml-auto w-65 item-center rounded-lg "
              />
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
        {/* esta vale 6 filas (si se elimina este, todos los demas ajustan tamaño y se vuelven mas grandes)*/}

        {/*FOOTER --> esta vale 1 fila */}
        <div className="row-span-1  bg-gradient-to-r from-blue-900 to-blue-500 border-none">
          <div className="mx-6 py-5 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              <div className="">
                <h6 className="mb-4 text-center items-center justify-center text-white text-s font-medium uppercase leading-tight md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-1 w-4"
                  >
                    {/* Icon path */}
                  </svg>
                  ABOUT US
                </h6>
                <p className=" text-center text-white font text-s font-medium leading-tight">
                  Write here about your company.-
                </p>
              </div>

              {/* Social section */}
              <div className="flex justify-center flex-col">
                <h6 className="mb-0.3 flex justify-center text-white font text-s leading-tight md:justify-center">
                  SOCIAL MEDIA
                </h6>

                {/* Instagram section */}
                <p className="mr-2 mt-4 text-neutral-100 dark:text-neutral-200 flex items-center flex-col">
                  <a
                    href="https://www.instagram.com/code_crafted_templates/"
                    className="mb-4 flex items-center justify-center md:justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                </p>

                {/* Twitter section */}
                <p className="mr-8 mt-2 text-neutral-100 dark:text-neutral-200 flex items-center flex-col">
                  <a
                    href="https://twitter.com/CodeCraftedTemp"
                    className="mb-4 flex items-center justify-center md:justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </a>
                </p>
              </div>

              {/* Contact section */}
              <div>
                <h6 className="mb-2  flex  font-semibold text-white font text-s font-medium leading-tight md:justify-center">
                  CONTACT
                </h6>
                <p className="mb-4 items-center text-center justify-center font-semibold text-white font text-s font-medium leading-tight md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    {/* Icon path */}
                  </svg>
                  Email: yourEmail@gmail.com
                </p>
                <p className="mb-4 text-center items-center font-semibold text-white font text-s font-medium leading-tight justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                  >
                    {/* Icon path */}
                  </svg>
                  Phone: xxx xxxx xxxxxxx
                </p>
                {/* Add other contact information similarly */}
              </div>
            </div>
          </div>
        </div>
        {/* Se pueden seguir agregando la cantidad de filas que uno quiera y se van ajustando el tamaño de todas automaticamente por la propiedad h-scren en el principal*/}
      </div>
    </>
  );
};

export default BasicHome1;
