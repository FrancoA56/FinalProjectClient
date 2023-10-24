import people from "./people";
import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import "./about.module.css";

const AboutPageComponent = () => {
  return (
    <div>
      <Banner />
      <Nav />
      <div className="bg-gray-100 dark:bg-[#505050]">
        <div className="container mx-auto p-4">
          <h1 className="bg-[#303030] inline-block mb-4 w-full rounded px-7 pb-2.5 pt-3 text-sm font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000]">
            The team
          </h1>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 rounded-md h-screen grid grid-rows-4 bg-gray-300 dark:bg-[#303030] flex justify-center items-center">
              <div
                className="h-3/4 mx-6 text-neutral-500 px-4 py-8 transition duration-200 hover:text-neutral-700 hover:ease-in-out 
                focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200
                 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 
                 dark:[&.active]:text-neutral-400"
              >
                At CodeCraft, our success is based on the commitment and
                experience of our talented team of developers. Each member of
                our team brings a passion for technology, exceptional skill, and
                a shared vision to create innovate and engage web solutions.
                <br />
                <br />
                Meet our talented team of developers, who are dedicated to drive
                innovation and excellence in every project. We are here to
                provide you with the technological solutions you need to succeed
                in the digital world.
              </div>
            </div>
            <div className="scroll-container flex col-span-12 md:col-span-8 h-screen rounded-md overflow-hidden"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
                }}>

           
            <ul
              role="list"
              className="grid gap-4 sm:gap-6 sm:grid-cols-4 xl:col-span-2 mt-11 ml-12 items-center "
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex flex-col items-center mb-8 mx-1"
                  style={{ flexBasis: "50%", maxWidth: "250px" }}>
                    <div className="flex items-center">
                    <img
                      className="h-28 w-28 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />

                    </div>

                    <div className="col-span-3">
                      <h3 className="rounded px-4 pb-1 pt-4 text-sm font-medium uppercase leading-normal text-white">
                        {person.name}
                      </h3>
                      <p className="text-sm font leading-6 text-gray-400 mb-2">
                        {person.role}
                      </p>
                    {/* </div> */}

                    <div className="flex items-center">
                      {/* LinkedIn section */}
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 ml-11 mr-2 mb-1 text-logo"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>

                      {/* GitHub section */}

                      <a href={person.github} target="_blank" rel="noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="bg-logo rounded-full h-6 w-6 ml-2 mb-1 "
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 30 30"
                        >
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                      </a>
                    </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPageComponent;
