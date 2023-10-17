import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";



const PremiumShop1 = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    
      const setDarkTheme = () => {
        console.log("Setting dark theme");
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        setIsDarkMode(true);
      };
    
      const setLightTheme = () => {
        console.log("Setting light theme");
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        setIsDarkMode(false);
      };
    
      const onThemeSwitcherItemClick = (theme) => {
        if (theme === "dark") {
          setDarkTheme();
        } else {
          setLightTheme();
        }
      };
    
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [isDarkMode]);
  return (
    <div class="bg-[#b1c7c8] ">
        <div className="mb-2 ml-auto flex w-full h-20 items-center justify-end border border-transparent bg-[#879899] px-8 py-3 text-base font-medium uppercase text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
           <div className=" flex items-center justify-center flex-grow">
           <p className="text-lg font-bold uppercase text-white "style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Elle, Cooking & Design</p>
           <i class="ml-4 fa-solid fa-seedling"></i>
           </div>
        
        <div className="flex mr-8 items-center ">
         <input
        type="checkbox"
        className="mt-3 h-3.5 w-8 bg-gray-700 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-gray-100 dark:checked:after:bg-natural-300 dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
        id="flexSwitchCheckDefault01"
        checked={isDarkMode}
        onChange={() => onThemeSwitcherItemClick(isDarkMode ? 'light' : 'dark')}
      />
      {isDarkMode ? (
         <a
         id="theme-switcher-light"
         class=" w-auto items-center whitespace-nowrap bg-transparent px-3 py-2 mt-2 text-sm font-normal text-gray-700 hover:bg-transparent focus:bg-transparent focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-transparent focus:dark:bg-gray-600"
         href="#"
         data-theme="light"
         onClick={() => onThemeSwitcherItemClick("light")}
       >
         <div class="pointer-events-none">
           <div
             class="inline-block w-[24px] text-center"
             data-theme-icon="light"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               class="inline-block h-6 w-6 text-gray-700"
             >
               <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
             </svg>
           </div>
           <span data-theme-name="light"></span>
         </div>
       </a>
        
      ) : (
       
        <a
        id="theme-switcher-dark"
        class="w-auto whitespace-nowrap items-center bg-transparent px-3 py-2 mt-2 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
        href="#"
        data-theme="dark"
        onClick={() => onThemeSwitcherItemClick("dark")}
      >
        <div class="pointer-events-none">
          <div
            class="inline-block w-[24px] text-center"
            data-theme-icon="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="inline-block h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span data-theme-name="dark"></span>
        </div>
      </a>
      )}
    </div>

        </div>
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <div className="mb-6 ml-auto flex w-auto items-end justify-end rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium uppercase text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
          <nav
            class="relative flex w-full items-end justify-end bg-[#b1c7c8] shadow-md rounded-md  py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap"
            data-te-navbar-ref
          >
            <div class="px-6 ">
              <button
                class="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContentX"
                aria-controls="navbarSupportedContentX"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="[&>svg]:w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-8 w-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
              </button>
              <div
                class="!visible hidden flex-shrink-0 basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContentX"
                data-te-collapse-item
              >

                    <div>
                      <a
                        class="flex items-center whitespace-nowrap w-25 py-2 pr-2 mr-2 shadow-md  transition duration-150 ease-in-out hover:text-base font-medium uppercase text-white focus:text-base font-medium uppercase text-white dark:hover:text-white dark:focus:text-white lg:px-2"
                        href="#"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        type="button"
                        id="dropdownMenuButtonX"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false"
                        data-te-nav-link-ref
                      >
                        Color
                        <span class="ml-2 w-2 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div>
                      <a
                        class="flex items-center w-25 whitespace-nowrap py-2 pr-2 mr-2 shadow-md  transition duration-150 ease-in-out hover:text-base font-medium uppercase text-white focus:text-base font-medium uppercase text-white dark:hover:text-white dark:focus:text-white lg:px-2"
                        href="#"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        type="button"
                        id="dropdownMenuButtonX"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false"
                        data-te-nav-link-ref
                      >
                        Category
                        <span class="ml-2 w-2 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <a
                      class="block py-2 pr-2 ml-2 transition duration-150 ease-in-out hover:text-base font-medium uppercase text-white focus:text-base font-medium uppercase text-white dark:hover:text-white dark:focus:text-white lg:px-2"
                      href="#!"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <span className="[&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                      </span>
                    </a>
              </div>
            </div>
          </nav>
        </div>
        <h2 class="mb-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium uppercase text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
          Products
        </h2>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full bg-gray overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680628176-310VF17iNEL._SL500_.jpg?crop=1xw:0.999xh;center,top&resize=980:*"
                alt="Pava electrica"
                class="h-80 w-80  object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              Electric Kettle
            </h3>
            <p class="mt-1 text-base font-medium text-white">$68</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white hover:bg-[#879899] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680627559-31BVxOcjoL._SL500_.jpg?crop=1xw:0.999xh;center,top&resize=980:*"
                alt="Licuadora"
                class="h-80 w-80 object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              Blender
            </h3>
            <p class="mt-1 text-lg font-medium text-white">$55</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680627289-31NZqOA5MfL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*"
                alt="Tostadora"
                class="h-80 w-80 object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              Toaster
            </h3>
            <p class="mt-1 text-lg font-medium text-white">$80</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680627316-31D2ztGBTQL._SL500_.jpg?crop=1xw:0.999xh;center,top&resize=980:*"
                alt="Exprimidor"
                class="h-80 w-80 object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              White Juice Squeezer
            </h3>
            <p class="mt-1 text-lg font-medium text-white">$75</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>

          {/* <!-- More products... --> */}
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680634227-41MXiUC2rVL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                alt="Batidora Amasadora"
                class="h-90 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              Stand Mixer
            </h3>
            <p class="mt-1 text-lg font-medium text-white">$158</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680627385-41UMmpCnKeL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                alt="Máquina de café expresso"
                class="h-90 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              Espresso Machine
            </h3>
            <p class="mt-1 text-lg font-medium text-white">$155</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680627434-21NS0rQalYL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                alt="Heladera"
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              Refrigerator and Freezer
            </h3>
            <p class="mt-1 text-lg font-medium text-white">$210</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>
          <a href="#" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1680627499-410LAJF6VzL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                alt="Microondas"
                class="h-full w-full object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-base font-medium text-white shadow-md">
              Microwave
            </h3>
            <p class="mt-1 text-lg font-medium text-white">$175</p>
            <button
              type="submit"
              class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </a>
        </div>
        <div className="mb-6 mt-6 flex w-full items-center justify-center shadow-md rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium uppercase text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
          <nav aria-label="Page navigation">
            <ul class="list-style-none flex">
              <li>
                <a
                  class="relative block rounded bg-transparent shadow-md px-3 py-1.5  ml-2 mr-2 text-sm text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent shadow-md px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  class="relative block rounded bg-transparent shadow-md px-3 py-1.5  ml-2 mr-2 text-sm text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent shadow-md px-3 py-1.5  ml-2 mr-2 text-sm text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent shadow-md px-3 py-1.5  ml-2 mr-2 text-sm text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button
          type="submit"
          class="mt-6 ml-auto flex w-auto items-end justify-center rounded-md border border-transparent bg-[#879899] px-8 py-3 text-base font-medium uppercase text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Finish and Pay
        </button>
      </div>
    </div>
  );
};

export default PremiumShop1;