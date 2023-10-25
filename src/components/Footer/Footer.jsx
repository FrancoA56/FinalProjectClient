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
    if (formData.user_email && formData.message) {
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
        );
    }
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
    <footer className="bg-gray-300 text-center text-neutral-600 dark:bg-[#303030] dark:text-[#cfcece] text-sm lg:text-left">
      {/* Main content container */}
      <div
        className="mx-6 py-3 text-center md:text-left"
      >
        <div className="grid-1 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col items-center">
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
            <p className="text-left pl-3">
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
            <p className="mr-2 mt-4 text-neutral-600 dark:text-[#cfcece] flex items-center flex-col">
              <a
                href="https://www.instagram.com/code_crafted_templates/"
                target="_blank"
                rel="noreferrer"
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
            <p className="mr-8 mt-2 text-neutral-600 dark:text-[#cfcece] flex items-center flex-col">
              <a
                href="https://twitter.com/CodeCraftedTemp"
                target="_blank"
                rel="noreferrer"
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

            {/* LinkedIn section */}
            <p className="mr-6 mt-1.5 text-neutral-600 dark:text-[#cfcece] flex items-center flex-col">
              <a
                href="http://www.linkedin.com/in/code-crafted-templates"
                target="_blank"
                rel="noreferrer"
                className="mb-3 flex items-center justify-center md:justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 mb-1"
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

            <div className="rounded">
              <div className="flex items-center justify-center">
                <button
                  className="mt-6 text-white text-center text-sm font-medium uppercase leading-normal bg-logo hover:bg-[#3a8a87] dark:bg-[#3a8a87] dark:hover:bg-logo py-2 px-4 rounded-md inline-block"
                  onClick={() => setPopupOpen(true)}
                >
                  Talk to us
                </button>
              </div>
              {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
                  <form
                    className="mt-1"
                    ref={form}
                    onSubmit={(e) => {
                      handleSubmit(e);
                      sendEmail(e);
                    }}
                  >
                    {/* ... Tu formulario aquí */}
                    <div className="isolate w-full h-2/3 bg-gray-300 dark:bg-[#303030] rounded-md px-6 sm:py-3 lg:px-3">
                      {/* Creo q le da animacion y el tamaño */}
                      <div
                        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        aria-hidden="true"
                      ></div>
                      {/* Encabezado */}
                      <div className="mx-auto flex flex-col items-center justify-center min-w-xl max-w-xl border-b border-[#303030] dark:border-[#909090]">
                        <h2 className="text-3xl font-bold tracking-tight text-[#303030] dark:text-[#909090] sm:text-4xl  uppercase leading-normal">
                          Contact us
                        </h2>
                        <p className="mt-2 text-sm font-medium text-[#505050] dark:text-[#707070] pb-3">
                          Send us your opinion or suggestion, it helps us
                          improve
                        </p>
                      </div>
                      {/* Formulario */}
                      <div
                        action="#"
                        method="POST"
                        className="mx-auto max-w-xl mt-5"
                      >
                        {/* Formulario container */}
                        <div className="grid md:grid-rows-5"></div>
                        {/* Nombre y apellido */}
                        <div className="grid md:grid-cols-2 grid-cols-1">
                          {/* Nombre */}
                          <div className=" flex flex-col items-start pl-5 pr-1 py-0.5">
                            <label
                              for="first-name"
                              className="text-sm font-semibold text-[#303030] dark:text-[#909090] px-2"
                            >
                              {" "}
                              First Name
                            </label>
                            <input
                              name="user_name"
                              id="name"
                              autocomplete="given-name"
                              // autocomplete="off"
                              type="text"
                              onChange={handleChange}
                              value={formData.user_name}
                              required
                              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                              
                            />
                          </div>
                          {/* Apellido */}
                          <div className="flex flex-col items-start pr-5 pl-1 py-0.5">
                            <label
                              for="last-name"
                              className="text-sm font-semibold text-[#303030] dark:text-[#909090] px-2"
                            >
                              {" "}
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              id="lastname"
                              autocomplete="family-name"
                              // autocomplete="off"
                              onChange={handleChange}
                              required
                              // value={formData.lastname}
                              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                            />
                          </div>
                        </div>
                        {/* name (company name)*/}
                        <div className=" flex flex-col items-start px-5 py-0.5">
                          <label
                            for="name"
                            className="text-sm font-semibold text-[#303030] dark:text-[#909090] px-2"
                          >
                            {" "}
                            Company
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autocomplete="organization"
                            // autocomplete="off"
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                          />
                        </div>
                        {/* email */}
                        <div className=" flex flex-col items-start px-5 py-0.5">
                          <label
                            for="email"
                            className="text-sm font-semibold text-[#303030] dark:text-[#909090] px-2"
                          >
                            {" "}
                            Email
                          </label>
                          <input
                            type="email"
                            name="user_email"
                            id="email"
                            autocomplete="email"
                            // autocomplete="off"
                            onChange={handleChange}
                            required
                            value={formData.user_email}
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                          />
                        </div>
                        {/* message */}
                        <div className=" flex flex-col items-start px-5 py-0.5">
                          <label
                            for="message"
                            className="text-sm font-semibold text-[#303030] dark:text-[#909090] px-2"
                          >
                            {" "}
                            Message
                          </label>
                          <textarea
                            name="message"
                            id="message"
                            rows="4"
                            onChange={handleChange}
                            required
                            value={formData.message}
                            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                          />
                        </div>
                        {/* Botones */}
                        <div className="flex flex-col justify-center items-center mt-5 md:px-4 md:flex-row md:justify-center">
                          <button
                            type="submit"
                            name="submit"
                            value="Send"
                            className="h-10 w-11/12 mt-2 mb-2 bg-logo dark:bg-[#3a8a87] rounded-md md:px-2 md:w-2/3 md:m-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          >
                            Send
                          </button>
                          <button
                            onClick={() => setPopupOpen(false)}
                            className="mt-2 mb-2 h-10 w-11/12 inline-block bg-[#505050] md:w-2/3 rounded-md md:px-2 md:m-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          >
                            close
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-[#303030] opacity-50 p-3 text-center dark:bg-[#202020] ">
        <span className="text-[#ffffff] dark:text-white">
          © 2023 Copyright:{" "}
        </span>
        <span
          className="font text-[#ffffff] dark:text-white"
        >
          CodeCrafted Templates
        </span>
      </div>
    </footer>
  );
}

export default Footer;
