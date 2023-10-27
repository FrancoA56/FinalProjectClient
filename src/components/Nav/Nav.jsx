import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, NavLink, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "tailwindcss/tailwind.css";
import { logOutUser, addAllModelsToCart } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import DarkMode from "../DarkMode/darkmode";

function Nav() {
  // Traemos el estado Global "user"
  const user = useSelector((state) => state.user);

  // Traemos el estado Global "cart"
  const cart = useSelector((state) => state.cart);

  // Calcular la cantidad de productos en el carrito
  const cartItemCount = cart.length;

  // Lo usamos para saber el path
  const location = useLocation();

  // traemos para hacer el logout
  const dispatch = useDispatch();

  // Hook para ir al home
  const navigate = useNavigate();

  const { logout, isAuthenticated } = useAuth0();

  // useEffect para cargar el cart del localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch(addAllModelsToCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);
  // Funcion para cerrar sesion

  const handleLogOut = (e) => {
    const actualLocation = window.location.href;
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You are about to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(94 195 191)",
      cancelButtonColor: "#303030",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (isAuthenticated)
        logout({ logoutParams: { returnTo: actualLocation } });
      if (result.isConfirmed) {
        dispatch(logOutUser(user.name));
      }
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-md shadow-black/10 dark:bg-[#303030] dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 max-h-16 pl-10">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="lg:hidden mb-2"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="[&>svg]:w-7 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div
            className={`absolute z-[1000] top-10 float-left m-0 ${
              isOpen ? "block" : "hidden"
            } min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block`}
          >
            <a
              href="/"
              className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            >
              Home
            </a>
            <a
              href="/shop"
              className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            >
              Shop
            </a>
            <a
              href="/about"
              className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            >
              Team
            </a>
            {user.email === "codecraftedtemplates@gmail.com" && (
              <a
                href="https://final-proyect-admin.vercel.app/"
                className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                target="_blank"
              >
                Admin Panel
              </a>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------------------------------------------------           */}

        <div
          className="hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto mb-2"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <a
            className="mb-4 ml-2 mr-5  flex items-center text-neutral-900 hover:text-neutral-900
            focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 
            lg:mb-0 lg:"
            href="#!"
          >
            <img
              src="https://res.cloudinary.com/codecrafttemplates/image/upload/v1697045466/codeCraft/grid_landscape_csxysv.png"
              style={{ height: "25px", width: "25px" }}
              alt="Logo"
              loading="lazy"
            />
          </a>
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          >
            {location.pathname !== "/" && (
              <li className="mb-4  lg:mb-0 w-16" data-te-nav-item-ref>
                <NavLink // Usa NavLink en lugar de <a>
                  to="/" // Especifica la ruta en el atributo "to"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out 
                  focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200
                   dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 
                   dark:[&.active]:text-neutral-400"
                  data-te-nav-link-ref
                >
                  Home
                  {/* <i class="fa-solid fa-house"></i> */}
                </NavLink>
              </li>
            )}

            {location.pathname !== "/shop" && (
              <li className="block mb-4  lg:mb-0 w-16" data-te-nav-item-ref>
                <NavLink // Usa NavLink en lugar de <a>
                  to="/shop" // Especifica la ruta en el atributo "to"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out 
                focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200
                 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 
                 dark:[&.active]:text-neutral-400"
                  data-te-nav-link-ref
                >
                  Shop
                  {/* <i class="fa-solid fa-shop"></i> */}
                </NavLink>
              </li>
            )}

            {/* Projects link */}
            {location.pathname !== "/about" && (
              <li className="mb-4 lg:mb-0 w-16" data-te-nav-item-ref>
                <NavLink // Usa NavLink en lugar de <a>
                  to="/about" // Especifica la ruta en el atributo "to"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out
                focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200
                 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 
                 dark:[&.active]:text-neutral-400"
                  data-te-nav-link-ref
                >
                  Team
                  {/* <i class="fa-solid fa-users"></i> */}
                </NavLink>
              </li>
            )}
            <li>
              {user.email === "codecraftedtemplates@gmail.com" && (
                <a
                  href="https://final-proyect-admin.vercel.app/"
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out
              focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200
               dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 
               dark:[&.active]:text-neutral-400"
                  target="_blank"
                >
                  Admin Panel
                </a>
              )}
            </li>
          </ul>
        </div>

        <div className="relative md:bottom-1 md:right-0 sm:right-20 sm:bottom-0.5">
          <DarkMode />
        </div>
        {/* Right elements */}
        <div className="relative flex items-center justify-around mb-2">
          {/* Cart Icon */}
          <NavLink
            to="/cart"
            className="mr-12 text-neutral-600 transition duration-2.0 hover:text-neutral-700 hover:ease-in-out 
            focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 
            dark:hover:text-neutral-30 dark:focus:text-neutral-300 [&.active]:text-black/90 
            dark:[&.active]:text-neutral-400"
            //href="/cart"
          >
            {/* <i class="fa-solid fa-cart-shopping"></i> */}
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
            {cartItemCount > 0 && (
              <span className="absolute bottom-3 left-3.5 rounded-full bg-logo px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-black">
                {cartItemCount}
              </span>
            )}
          </NavLink>

          {/* Second dropdown container */}
          <div className="relative" data-te-dropdown-alignment="end">
            {/* Second dropdown trigger --> User profile */}
            {user.name ? (
              <>
                {" "}
                <div
                  className="hidden-arrow mr-12 flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none dark:text-white"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  {" "}
                  {user.name}{" "}
                </div>
              </>
            ) : (
              <>
                {" "}
                <div
                  className="hidden-arrow mr-12 flex  items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  {/* User avatar */}
                  <i class="fa-solid fa-user h-5 w-5 text-neutral-600 hover:text-neutral-700 dark:text-white"></i>
                </div>
              </>
            )}

            {/* Second dropdown menu */}
            <ul
              className={`absolute z-[1000] float-right right-11  m-0 ${
                isDropdownOpen ? "block" : "hidden"
              } min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block`}
              aria-labelledby="dropdownMenuButton1"
            >
              {/* Second dropdown menu items */}
              {user.name ? (
                <>
                  <li>
                    <NavLink
                      className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/profile"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/purchases"
                    >
                      Purchases
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="block cursor-pointer text-left w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      href="/register"
                      data-te-dropdown-item-ref
                    >
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
