import "tailwindcss/tailwind.css";
import React from "react";

// Footer container
function Footer() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      {/* Main container div: holds the entire content of the footer */}
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Contact us on social networks:</span>
        </div>
        {/* Social network icons container */}
        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Icon path */}
            </svg>
          </a>
          {/* Add other social network icons similarly */}
        </div>
      </div>

      {/* Main content container */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Tailwind Elements section */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                {/* Icon path */}
              </svg>
              ABOUT US
            </h6>
            <p>
              This is a company dedicated to the development of templates for
              websites. You can choose from the options we offer or contact us
              to make modifications that suit your needs!
            </p>
          </div>

          {/* Products section */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">
              Social Media
            </h6>
            <p className="mb-4">
              <a href="#!" className="mb-4 flex items-center justify-center md:justify-center">
                Instagram
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="mb-4 flex items-center justify-center md:justify-center">
                Twitter
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="mb-4 flex items-center justify-center md:justify-center">
                LinkedIn
              </a>
            </p>
            {/* Add other product links similarly */}
          </div>

          {/* Useful links section */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">
              Links
            </h6>
            <p className="mb-4">
              <a href="#!" className="mb-4 flex items-center justify-center md:justify-center">
                Shop
              </a>
            </p>
            {/* Add other useful links similarly */}
          </div>

          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
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
            <p className="mb-4 flex items-center justify-center md:justify-start">
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
            {/* Add other contact information similarly */}
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          CodeCrafted Templates
        </a>
      </div>
    </footer>
  );
}

export default Footer;
