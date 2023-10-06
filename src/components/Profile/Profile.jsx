import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // estado local donde se aloja la imagen hasta q se ejecuta uploadImage
  const [imageSelected, setImageSelected] = useState();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    // aca va el Upload presets: "codeCraftTemplates"
    formData.append("upload_preset", "codeCraftTemplates");
    // el link siempre es el mismo, solo se personaliza con el nombre de la nube, en este caso "codecrafttemplates"
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/codecrafttemplates/image/upload",
      formData
    );
    // de la data me devuelve el url de la imagen el cloudinary
    //! dispatch(actionX(data.secure_url));
  };

  return (
    <>
      <Banner />
      <Nav />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          {/* Encabezado */}
          <h1
            className="inline-block mb-4 w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal
                     text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
            style={{ "background-color": "#303030" }}
          >
            Profile
          </h1>
          <div className="grid grid-cols-12 gap-4">
            {/* Columna izquierda */}
            <div
              className="col-span-12 md:col-span-8"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
              }}
            >
              <div className="mb-4">
                <img className="w-full" src={user.logo} alt="" />
              </div>
            </div>

            {/* Columna derecha */}
            <div
              className="col-span-12 md:col-span-4"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
              }}
            >
              <div className="flex items-center">
                <div>
                  <label className="block m-3 text-sm font-medium uppercase leading-normal">
                    Edit Profile
                  </label>
                  <form action={uploadImage}>
                    <div className="mt-8 mb-9">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={user.name}
                        placeholder={user.name}
                        // value={input.password}
                        // onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded-md w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline first-letter:shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      />
                      <input
                        type="file"
                        name="file"
                        id="file"
                        // value={input.password}
                        // onChange={(e) => handleChange(e)}
                        className="w-3/4 my-4  "
                      />

                      {/* /////////////////////////////// */}

                      {/* /////////////////////////////// */}

                      <textarea
                        name="about"
                        id="about"
                        cols="40"
                        rows="5"
                        placeholder="..."
                        className="indent-2 w-3/4 rounded-md shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      ></textarea>
                      <p class="mt-1 text-sm leading-6 text-gray-600 mb-10">
                        Write a few sentences about your company.
                      </p>

                      <button
                        type="submit"
                        class="inline-block mt-24 bg-[#5ec3bf] w-3/4 rounded-md pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={uploadImage}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

//! Modificar checkbox
{
  /* <div class="flex h-6 items-center">
<input
  id="candidates"
  name="candidates"
  type="checkbox"
  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
/>
</div> */
}

//! Agregar una foto
{
  /* <div class="col-span-full">
<label
  for="cover-photo"
  class="block text-sm font-medium leading-6 text-gray-900"
>
  Cover photo
</label>
<div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
  <div class="text-center">
    <svg
      class="mx-auto h-12 w-12 text-gray-300"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
        clip-rule="evenodd"
      />
    </svg>
    <div class="mt-4 flex text-sm leading-6 text-gray-600">
      <label
        for="file-upload"
        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
      >
        <span>Upload a file</span>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          class="sr-only"
        />
      </label>
      <p class="pl-1">or drag and drop</p>
    </div>
    <p class="text-xs leading-5 text-gray-600">
      PNG, JPG, GIF up to 10MB
    </p>
  </div>
</div>
</div> */
}
