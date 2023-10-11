import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

import { useRef } from "react";
import emailjs from "@emailjs/browser";


// Footer container
function Footer() {
    // ? FUNCIONES PARA USAR EMAIL JS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
if(formData.user_email && formData.message){
    emailjs
      .sendForm(
        "service_rjik02h",
        "template_w2je5xe",
        form.current,
        "ncTuTVkphxHhuJbUE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );}
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  //Función para manejar el cambio en los inputs del form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

/*   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 */
  //Función para manejar el envío del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user_email && formData.message) {
      console.log("Form Data:", formData);
      showSuccessAlert("Your form was submitted successfully!");
    } else {
      showErrorAlert(
        "You must fill in at least the email and a message to submit the form"
      );
    }
    setPopupOpen(false);
  };
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${message}`,
    });
  };

  return (
    <footer
      style={{
        background:
          "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
      }}
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left"
    >
      {/* Main content container */}
      <div className="mx-6 py-5 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase ">
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
            <p className="text-center font text-s leading-tight">
              This is a company dedicated to the development of templates for
              websites. You can choose from the options we offer or contact us
              to make modifications that suit your needs!
            </p>
          </div>

          {/* Social section */}
          <div className="flex justify-center flex-col">
            <h6 className="mb-0.3 flex jitems-center justify-center font-semibold uppercase">
              Social Media
            </h6>

            {/* Instagram section */}
            <p className="mr-2 mt-4 text-neutral-600 dark:text-neutral-200 flex items-center flex-col">
              <a
                href="https://www.instagram.com/code_crafted_templates/"
                target="_blank"
                rel="noreferrer"
                className="mb-4 flex items-center justify-center md:justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
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
            <p className="mr-8 mt-2 text-neutral-600 dark:text-neutral-200 flex items-center flex-col">
              <a
                href="https://twitter.com/CodeCraftedTemp"
                target="_blank"
                rel="noreferrer"
                className="mb-4 flex items-center justify-center md:justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Twitter
              </a>
            </p>

            {/* LinkedIn section */}
            <p className="mr-6 mt-1.5 text-neutral-600 dark:text-neutral-200 flex items-center flex-col">
              <a
                href="http://www.linkedin.com/in/code-crafted-templates"
                target="_blank"
                rel="noreferrer"
                className="mb-3 flex items-center justify-center md:justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-2 mb-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                LinkedIn
              </a>
            </p>
          </div>

          {/* Contact section */}
          <div>
            <h6 className=" flex items-center justify-center font-semibold uppercase">
              Contact
            </h6>
            <p className=" text-center font text-s leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                {/* Icon path */}
              </svg>
              Email: codeCraftedTemplates@gmail.com
            </p>
            <p className="text-center font text-s leading-tight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                {/* Icon path */}
              </svg>
              Phone: +54 xxxx xxxxxxx
            </p>

            {/* pop up form --> talk to us */}

            <div className="rounded cursor-pointer">
              <div className="flex items-center justify-center">
                <h2
                  className="mt-6 text-white text-center text-sm font-medium uppercase leading-normal bg-logo hover:bg-[#303030] py-2 px-4 rounded inline-block"
                  onClick={() => setPopupOpen(true)}
                >
                  Talk to us
                </h2>
              </div>
              {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
                  <div className="p-1 rounded-md">
                    <form
                      ref={form}
                      onSubmit={(e) => {
                        handleSubmit(e);
                        sendEmail(e);
                      }}
                    >
                      {/* ... Tu formulario aquí */}
                      <div class="isolate w-80 h-90 bg-gray-300 px-6 py-24 sm:py-3 lg:px-3">
                        <div
                          class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                          aria-hidden="true"
                        >
                          <div
                            class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w- -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-grey to-white opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                              "clip-path":
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                          ></div>
                        </div>
                        <div class="mx-auto max-w-2xl text-center">
                          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-sm font-medium uppercase leading-normal">
                            Talk to Us
                          </h2>
                          <p class="mt-2 text-sm font-medium uppercase leading-normal leading-8 text-gray-600">
                            You can send us your opinion or suggestion, It helps
                            us to improve:
                          </p>
                        </div>
                        <div
                          action="#"
                          method="POST"
                          class="mx-auto mt-16 max-w-xl sm:mt-20"
                        >
                          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                              <label
                                for="first-name"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                First name
                              </label>
                              <div class="mt-2.5">
                                <input
                                  type="text"
                                  name="user_name"
                                  id="name"
                                  autocomplete="given-name"
                                  onChange={handleChange}
                                  value={formData.user_name}
                                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                for="last-name"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Last name
                              </label>
                              <div class="mt-2.5">
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div class="sm:col-span-2">
                              <label
                                for="company"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Company
                              </label>
                              <div class="mt-2.5">
                                <input
                                  type="text"
                                  name="company"
                                  id="company"
                                  autocomplete="organization"
                                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div class="sm:col-span-2">
                              <label
                                for="email"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Email
                              </label>
                              <div class="mt-2.5">
                                <input
                                  type="email"
                                  name="user_email"
                                  id="email"
                                  autocomplete="email"
                                  onChange={handleChange}
                                  value={formData.user_email}
                                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div class="sm:col-span-2">
                              <label
                                for="message"
                                class="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Message
                              </label>
                              <div class="mt-2.5">
                                <textarea
                                  name="message"
                                  id="message"
                                  rows="4"
                                  onChange={handleChange}
                                  value={formData.message}
                                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                              </div>
                            </div>
                            <div class="flex gap-x-4 sm:col-span-2">
                              <div class="flex h-6 items-center"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="bg-gray-400 text-white text-sm font-medium uppercase leading-normal px-4 py-2 rounded"
                          onClick={() => setPopupOpen(false)}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          name="submit"
                          className="bg-logo text-white text-sm font-medium uppercase leading-normal px-4 py-2 ml-2 rounded"
                          value="Send"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-logo opacity-50 p-3 mb- text-center dark:bg-neutral-700">
        <span className="text-black">© 2023 Copyright: </span>
        <a
          className="font-semibold text-black dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          CodeCrafted Templates
        </a>
      </div>
    </footer>
  );
}

export default Footer;
