import { useState } from "react";
import DarkMode from "../../../DarkMode/darkmode";

const PremiumCart01 = () => {
  const [hoveredCoords, setHoveredCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (isHovered) {
      const boundingRect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - boundingRect.left) / boundingRect.width) * 100;
      const y = ((e.clientY - boundingRect.top) / boundingRect.height) * 100;
      setHoveredCoords({ x, y });
    }
  };

  return (
    <div className="grid h-screen">
      <div className="bg-gray-100 dark:bg-[#404040]">
        <div className="border bg-black h-12 flex items-center justify-between">
          <div class="flex items-center">
            <img
              src="data:image/png;base64,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"
              alt="Nike Logo"
              class="h-10 w-10 bg-transparent ml-4"
            />
          </div>
          <div className="flex items-center mr-6 relative">
            <DarkMode />
            <div className="text-right ">
              {/* Cart Icon */}
              <span className="relative inline-block mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <span className="absolute -mt-4 ml-0.5 bg-transparent rounded-full text-[#ed5b18] px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none">
                  2
                </span>
              </span>
            </div>
            <div>
              <p className="text-[#ed5b18] inline-block items-center ml-10">
                JOIN US
              </p>
            </div>
            <div>
              <p className="text-[#ed5b18] inline-block items-center ml-6">
                LOGIN
              </p>
            </div>
          </div>
        </div>
        <div className="border h-12 flex items-center justify-between bg-transparent h-12 ">
          <div>
            <button className="text-gray-500 ml-4 shadow-md items-center h-8 w-auto p-2 dark:text-white">
              <i class="fa-solid fa-arrow-down fa-rotate-90 mr-2 text-[#ed5b18]"></i>
              Continue Shopping
            </button>
          </div>
          <div className="flex">
            <div>
              <button className="text-gray-500 ml-4 mr-8 items-center text-right h-8 w-auto p-2 dark:text-white">
                Men
              </button>
            </div>
            <div>
              <button className="text-gray-500 ml-4 mr-8 items-center text-right h-8 w-auto p-2 dark:text-white">
                Woman
              </button>
            </div>
            <div>
              <button className="text-gray-500 ml-4 mr-8 items-center text-right h-8 w-auto p-2 dark:text-white">
                Kids
              </button>
            </div>
            <div>
              <button className="text-gray-500 ml-4 mr-8 items-center text-right h-8 w-auto p-2 dark:text-white">
                Accessories
              </button>
            </div>
            <div>
              <button className="text-gray-500 ml-4 mr-8 items-center text-right h-8 w-auto p-2 dark:text-white">
                Sale
              </button>
            </div>
          </div>

          <div>
            <button className="text-gray-500 ml-4 mr-8 underline items-center h-8 w-auto p-2 dark:text-white">
              Do you need help?
            </button>
          </div>
        </div>
        <div className="container mx-auto p-4 px-36 grid grid-cols-12 gap-4">
          {/* Columna izquierda con el h1 y detalle de productos */}
          <div className="col-span-12 md:col-span-8 bg-gray-100 dark:bg-[#404040]">
            <h1 className="bg-gray-200 text-[#ed5b18] inline-block mb-4 w-full rounded px-7 pb-2.5 pt-3 text-sm font-semibold uppercase leading-normal shadow-[0_4px_9px_-4px_#000000] dark:bg-[#292929] ">
              GET FREE SHIPPING WITH NIKE+ ON EVERY ORDER, EVERY TIME.
            </h1>
            <div className="bg-gray-200 text-black inline-block mb-4 w-full  rounded px-7 pb-2.5 pt-3 text-sm font-semibold uppercase leading-normal shadow-[0_4px_9px_-4px_#000000] dark:bg-[#292929] dark:text-white">
              <h1 className="text-left justify-start">YOUR CART (2)</h1>
            </div>

            {/* Nuevo div con el contenido del detalle de productos */}
            <div className="bg-gray-200 p-4 rounded shadow-md h-screen dark:bg-[#292929] dark:text-white ">
              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li class="flex py-6">
                      <div
                        className="relative group overflow-hidden rounded-lg bg-gray-100"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => {
                          setIsHovered(false);
                          setHoveredCoords({ x: 0, y: 0 });
                        }}
                        onMouseMove={handleMouseMove}
                        style={{
                          cursor: isHovered ? "pointer" : "auto",
                        }}
                      >
                        {" "}
                        <img
                          src="data:image/jpeg;base64,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"
                          alt="Nike snikers."
                          className={`w-full h-auto ${
                            isHovered ? "transform scale-150" : ""
                          }`}
                          style={{
                            transformOrigin: `${hoveredCoords.x}% ${hoveredCoords.y}%`,
                          }}
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                            <h3>
                              <a href="#">Nike Air Max 2090</a>
                            </h3>
                            <p class="ml-4">$90.00</p>
                          </div>
                          <p class="mt-1 text-sm text-left text-gray-500">
                            White/Red/Black
                          </p>
                          <p class="mt-1 text-sm text-left text-gray-500">
                            Size: USA 8
                          </p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Qty 1</p>

                          <div class="flex">
                            <button
                              type="button"
                              class="font-medium text-[#ed5b18]  hover:text-gray-500 dark:text-[#ed5b18]"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <span className="mt-8 block border-t border-white"></span>
                      </div>
                    </li>
                    <li class="flex py-6">
                      <div
                        className="relative group overflow-hidden rounded-lg bg-gray-100"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => {
                          setIsHovered(false);
                          setHoveredCoords({ x: 0, y: 0 });
                        }}
                        onMouseMove={handleMouseMove}
                        style={{
                          cursor: isHovered ? "pointer" : "auto",
                        }}
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZmdhvYa_J1Goqolnw7kUgx6bNdQGOLXkYw&usqp=CAU"
                          alt="Nike orange snikers"
                          className={`w-full h-auto ${
                            isHovered ? "transform scale-150" : ""
                          }`}
                          style={{
                            transformOrigin: `${hoveredCoords.x}% ${hoveredCoords.y}%`,
                          }}
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                            <h3>
                              <a href="#">Nike Air Max Alpha Trainer 5</a>
                            </h3>
                            <p class="ml-4">$115.00</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500 text-left">
                            Cobblestone/Smooth Pewter/White/Light Crimson
                          </p>
                          <p class="mt-1 text-sm text-left text-gray-500">
                            Size: USA 9
                          </p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Qty 1</p>

                          <div class="flex">
                            <button
                              type="button"
                              class="font-medium text-[#ed5b18]  hover:text-gray-500 dark:text-[#ed5b18]"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <span className="mt-8 block border-t border-white"></span>
                      </div>
                    </li>
                    <span className=" block border-t border-white"></span>

                    {/*<!-- More products... --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha con fondo negro */}
          <div className="col-span-12 md:col-span-4 bg-black h-auto rounded">
            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium uppercase text-white">
                <p>Shopping cart</p>
              </div>
              <span className="mt-4 block border-t border-gray-700"></span>
              <div>
                <label
                  id="listbox-label"
                  class="flex items-center mt-4 text-sm text-left font-medium uppercase leading-6 text-white"
                >
                  <p>Do you have a promo code? </p>

                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAErCAMAAAB9xjhEAAABAlBMVEUAAAAAAAP/gRMAAgAAAAYAAAkEAAAAAgQDAQAIAAADBAQABQwABQgAAA38gRf8ghMPAAAbAAAXAAD6YQT7aBD9dhH8ehb/awsSAAD/ew7+cw0JAwhNNDUzIygwEQtULSlpQ0hIHhiVWkxOIRaEQyqnWjimWz50PTAuExM8EQXHaU9tLBxKFwt/NBipUifMZjTdaDe1TywmAAC+WzPQYDMvAAAjCQtoMCKgSijpYSf5YyXjXS2fQSRTGQpbKR2ORinLUy57MR+5TCNlJw/pXh5zNyD4XBv/VAbdVx1WEAj9XwDdZiPyZhr5ZBfyXSuHMBapWCmNQh20SyeFMhXPVSO5SyciScvjAAAEOElEQVR4nO3Ye1fiRhgG8BkyuUxIAMlNkq2txW5LAe+yxnW9RnRjsttS+v2/St8Ebfdoj0qV0D+e31HP4QBnHuedeWeAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA3ozBDq2YkQ3vVQIZhvFWSp4fhTMr5hzJM+mOW/6HUygeLZUYRe/ednGsgoQoudE3jgh6sff/DO8kXHpSLOlv/sS3mGkiTRNg2a3c3fnr/8y8ymu/9/wVXee/XfkufayDdEpy1BsPNre2d/grniqYtOKhCv7t7+wemxV/08uL1FImz0YfD/fjo4/GnFlfVKFr0GlUMRWg7ySEznxlHKZiqiIoHayen+0nuHJ2dH0jBOdM0bdG73ogsthFn58++UMrItqncXFvf2JkmeTqOLy5HkummsuCIM2bE+rGTfGLPdWxF4UJtrV9tTr+Mx9fX45vjz221XqdZriQn09XRfu7EA9rH/1Y8zg1afLperN9iUSZ57lynTnI2XFNtS5OarCYmBW0dZk4a91Tx6Cml6JIiiiLqmaOT063brMiYXufJxeUqrcxKzqK/8e62GwRU+sd7Xhd2XQjVjrqne9tx7qSO66Tp+OPxQLK6eOWZO7/NPPDCbEjb/+EMUddRV9evJrdZ7jhO4Oa0gb6cfT0QXJqG1CoMyiOddW8Dr+a7eyuWyanP6DptbNo2VnkyXlGnzHKXpjwIgzSlmvdXmWoJ+uGLb0j/EFGd/ZaFvu+H2SGzTKqmFkXc0um53f7xxW0ZMvQ6HS8MnJxqXlm0h0FF79bxG82GFyaHo6LW1CoZX+lubG4neTGPYRGSUjr5dNhjvG5V0zQfBWXDzKWgzYbvZdPfT3q7a90Pw8l2fDR2wzD0fN/reAGtznhyOWKWRR2gsnb0LR6xTTfwa81mreEHQZYkcZJQucuppJTE8zw3o5q3aEEoGtNfdB94c7rOttzQb9RIhxZqUKKMntepNRq1Tpi5VPM/DhjXlaXU/I7JVved0K/d68xQRuIXGyhNJp/b3K6b5lKDKkp7mt4FbdwpZrJW88uY2c1kwFVamppZZTN6jO7oNKOz2WzSjmqUIYucXpg6R2XN6aAsIlZ8Cj2gK2ziBLM1Ogs6m1o/dPKY7u22qi93Ju/V6YqXuN59UCp4h/aUR7395nigsSgyjP9HUDtSV7aygLYPTWSz2ZmtTKr5cJfZQqPuX1zylp2SKPTxo3c2dgLPLza55xUnUPxnv8WEThf3im7EL8QHZ0dliw+K+xFdjgZS0Iej5TT2p+ii3b+4SehQuplOztekVOv2kg7Kp0lhC7nbGwx6B6tctVWr+LDJl3RUPumbOpcZF//NzOtU9HXcKylLPckBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbtL/B0bGs9xLk3AAAAAElFTkSuQmCC"
                    alt="Nike Logo"
                    class="h-20 w-7 bg-transparent ml-2"
                  />
                </label>
                <div class="relative">
                  <button
                    type="button"
                    class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                  >
                    <span class="flex items-center">
                      <span class="ml-1 block truncate uppercase text-gray-300">
                        Promo Code
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <span className="mt-6 block border-t border-gray-700"></span>

              <div class="flex text-base font-medium text-white items-center justify-between">
                <div class="flex items-center">
                  <p>SUBTOTAL</p>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAErCAMAAAB9xjhEAAABAlBMVEUAAAAAAAP/gRMAAgAAAAYAAAkEAAAAAgQDAQAIAAADBAQABQwABQgAAA38gRf8ghMPAAAbAAAXAAD6YQT7aBD9dhH8ehb/awsSAAD/ew7+cw0JAwhNNDUzIygwEQtULSlpQ0hIHhiVWkxOIRaEQyqnWjimWz50PTAuExM8EQXHaU9tLBxKFwt/NBipUifMZjTdaDe1TywmAAC+WzPQYDMvAAAjCQtoMCKgSijpYSf5YyXjXS2fQSRTGQpbKR2ORinLUy57MR+5TCNlJw/pXh5zNyD4XBv/VAbdVx1WEAj9XwDdZiPyZhr5ZBfyXSuHMBapWCmNQh20SyeFMhXPVSO5SyciScvjAAAEOElEQVR4nO3Ye1fiRhgG8BkyuUxIAMlNkq2txW5LAe+yxnW9RnRjsttS+v2/St8Ebfdoj0qV0D+e31HP4QBnHuedeWeAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA3ozBDq2YkQ3vVQIZhvFWSp4fhTMr5hzJM+mOW/6HUygeLZUYRe/ednGsgoQoudE3jgh6sff/DO8kXHpSLOlv/sS3mGkiTRNg2a3c3fnr/8y8ymu/9/wVXee/XfkufayDdEpy1BsPNre2d/grniqYtOKhCv7t7+wemxV/08uL1FImz0YfD/fjo4/GnFlfVKFr0GlUMRWg7ySEznxlHKZiqiIoHayen+0nuHJ2dH0jBOdM0bdG73ogsthFn58++UMrItqncXFvf2JkmeTqOLy5HkummsuCIM2bE+rGTfGLPdWxF4UJtrV9tTr+Mx9fX45vjz221XqdZriQn09XRfu7EA9rH/1Y8zg1afLperN9iUSZ57lynTnI2XFNtS5OarCYmBW0dZk4a91Tx6Cml6JIiiiLqmaOT063brMiYXufJxeUqrcxKzqK/8e62GwRU+sd7Xhd2XQjVjrqne9tx7qSO66Tp+OPxQLK6eOWZO7/NPPDCbEjb/+EMUddRV9evJrdZ7jhO4Oa0gb6cfT0QXJqG1CoMyiOddW8Dr+a7eyuWyanP6DptbNo2VnkyXlGnzHKXpjwIgzSlmvdXmWoJ+uGLb0j/EFGd/ZaFvu+H2SGzTKqmFkXc0um53f7xxW0ZMvQ6HS8MnJxqXlm0h0FF79bxG82GFyaHo6LW1CoZX+lubG4neTGPYRGSUjr5dNhjvG5V0zQfBWXDzKWgzYbvZdPfT3q7a90Pw8l2fDR2wzD0fN/reAGtznhyOWKWRR2gsnb0LR6xTTfwa81mreEHQZYkcZJQucuppJTE8zw3o5q3aEEoGtNfdB94c7rOttzQb9RIhxZqUKKMntepNRq1Tpi5VPM/DhjXlaXU/I7JVved0K/d68xQRuIXGyhNJp/b3K6b5lKDKkp7mt4FbdwpZrJW88uY2c1kwFVamppZZTN6jO7oNKOz2WzSjmqUIYucXpg6R2XN6aAsIlZ8Cj2gK2ziBLM1Ogs6m1o/dPKY7u22qi93Ju/V6YqXuN59UCp4h/aUR7395nigsSgyjP9HUDtSV7aygLYPTWSz2ZmtTKr5cJfZQqPuX1zylp2SKPTxo3c2dgLPLza55xUnUPxnv8WEThf3im7EL8QHZ0dliw+K+xFdjgZS0Iej5TT2p+ii3b+4SehQuplOztekVOv2kg7Kp0lhC7nbGwx6B6tctVWr+LDJl3RUPumbOpcZF//NzOtU9HXcKylLPckBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbtL/B0bGs9xLk3AAAAAElFTkSuQmCC"
                    alt="Nike Logo"
                    class="h-20 w-7 bg-transparent ml-2"
                  />
                </div>
                <p className="flex items-center text-right">$205.00</p>
              </div>
              <span className="mt-6 block border-t border-gray-700"></span>
              <div class="mt-6 flex justify-between text-base uppercase font-medium text-white">
                <p>Shipping Cost</p>
                <p>$0.00</p>
              </div>
              <div class="mt-2 flex justify-between text-base font-medium text-gray-500">
                <p class="mt-0.5 text-sm text-gray-500">Tax</p>
                <p>$ _.__</p>
              </div>

              <span className="mt-6 block border-t border-gray-700"></span>

              <div class="mt-6 flex justify-between text-base font-medium text-white">
                <p>TOTAL</p>
                <p>$205.00</p>
              </div>
              <span className="mt-6 block border-t border-gray-700"></span>

              <div class="mt-6">
                <a
                  href="#"
                  class="flex items-center justify-center rounded-md border border-transparent bg-[#ed5b18] px-6 py-3 text-sm font-medium text-white uppercase shadow-sm"
                >
                  <i class="fa-brands fa-google mr-2"
                  style={{
                    "font-size": "20px",
                  }}
                  ></i>
                  PAY
                </a>
              </div>
              <div class="mt-2 flex justify-center text-center text-sm text-gray-500">
                <p>or</p>
              </div>
                <div class="mt-2">
                  <a
                    href="#"
                    class="flex items-center justify-center rounded-md border border-transparent bg-[#162966] px-6 py-3 text-sm text-white uppercase shadow-sm"
                  >
                         <i
                        class="fa-brands fa-paypal text-[#019cda] mr-2 "
                        style={{
                          "font-size": "24px",
                        }}
                      ></i>
                      Paypal
                 
                  </a>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCart01;
