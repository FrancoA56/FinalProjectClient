import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import { editUserRedux, logInUser } from "../../Redux/actions";
import decodeToken from "../loginComponents/decodeToken";
import Swal from "sweetalert2";

const Profile = () => {
  // traigo el usuario del estado global
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  const URL = process.env.REACT_APP_API;

  // construyo un estado local para pasarselo a la action de redux "editUserRedux()"
  const [userLocal, setuserLocal] = useState({
    email: user.email,
    name: user.name,
    logo: "",
    about: "",
  });

  // Funcion para que vaya cambiando el estado local
  const handleChange = (e) => {
    setuserLocal({
      ...userLocal,
      [e.target.name]: e.target.value,
    });
  };

  // Funcion que carga la imagen a cloudinary
  const uploadImage = async (files) => {
    const formData = new FormData();
    formData.append("file", files);
    // aca va el Upload presets: "codeCraftTemplates"
    formData.append("upload_preset", "codeCraftTemplates");
    // el link siempre es el mismo, solo se personaliza con el nombre de la nube, en este caso "codecrafttemplates"
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/codecrafttemplates/image/upload",
        formData
      );
      // data.secure_url me devuelve el url de la imagen el cloudinary
      // seteo el logo del estado local
      showSuccessAlert("Se subio la imagen a tu perfil");
      setuserLocal({ ...userLocal, logo: data.secure_url });
    } catch (error) {
      showErrorAlert("Error al cargar tu imagen");
    }
  };

  // funcion edita la base de datos
  const editUser = async (userEdit) => {
    try {
      if(!userEdit.logo) {delete userEdit.logo}
      const {data} = await axios.put(`${URL}/api/user/${user.email}`, userEdit); // Recibe el token actualizado

      localStorage.setItem("token", data); // Almanecena el nuevo token en el localStorage

      const userDecode = decodeToken(data); // Decodifica el token

      dispatch(editUserRedux(userDecode)); // Guarda los datos del usuario actualizado en el estado global
      showSuccessAlert("Se actualizaron los datos de tu perfil");
    } catch (error) {
      console.log(error.message)
      showErrorAlert("Error");
    }
  };
  // funcion que ejecuta todo
  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(userLocal);
    // logInUser(userLocal)
  };


   // --------------------------------------------------------------------------Alert-✅-----------
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
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  // --------------------------------------------------------------------------------⛔------------

  
  return (
    <>
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
              className="col-span-12 md:col-span-8 flex flex-col justify-start items-center rounded"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(105, 105, 105), black)",
              }}
            >
              {/* //////////////////////////// */}
              <label className="block mt-3 text-xl text-white font-medium uppercase leading-normal">
                   {user.name ? user.name : ""}
                  </label>
              {/* Aca aparece el logo */}
              <div className="w-3/4 h-3/4 flex items-center justify-center">
                <img
                  // className="max-w-full max-h-full rounded-md shadow"
                  className="h-72 object-cover rounded-md shadow"
                  src={user.logo ? userLocal.logo || user.logo : userLocal.logo || "https://res.cloudinary.com/codecrafttemplates/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1696687386/no_imagen_am0gxq.jpg"}
                  alt=""
                />
              </div>
              {/* //////////////////////////// */}
              {/* Aca aparece el about */}
              <div className="mb-5 flex items-center justify-center w-3/4 ">
                <p className="text-white text-justify">
                  {user.about ? user.about : "There is still no about to show"}
                </p>
              </div>
            </div>

            {/* Columna derecha */}
            <div
              className="col-span-12 md:col-span-4 rounded"
              style={{
                background:
                  "radial-gradient( 40rem circle at bottom, rgb(200, 200, 200), rgb(230, 230, 230)",
              }}
            >
              <div className="flex items-center">
                <div>
                  <div className="block m-3 text-sm font-medium uppercase leading-normal">
                    Edit Profile
                  </div>
                  <form>
                    <div className="mt-8 mb-9">
                      {/* //////////////////////////// */}
      
                      {/* input del nombre*/}
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={user.name ? user.name : "DEFAULT"}
                        value={userLocal.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded-md w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline first-letter:shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      />
                      {/* //////////////////////////// */}

                      {/* //////////////////////////// */}
                      {/* Input de la imagen */}
                      <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => uploadImage(e.target.files[0])}
                        className="w-3/4 my-4 invisible absolute left-0"
                      />
                      <label
                        title="Nahue"
                        for="file"
                        class="inline-block mt-5 bg-[#909090] hover:bg-[#303030] w-3/4 rounded-md pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      >
                        upload Image
                      </label>
                      {/* //////////////////////////// */}

                      {/* //////////////////////////// */}
                      {/* About */}
                      <textarea
                        name="about"
                        id="about"
                        value={userLocal.about}
                        onChange={handleChange}
                        cols="40"
                        rows="5"
                        placeholder="..."
                        className="indent-2 w-3/4 mt-5 rounded-md shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      ></textarea>
                      <p class="mt-1 text-sm leading-6 text-gray-600 mb-10">
                        Write a few sentences about your company.
                      </p>
                      {/* //////////////////////////// */}

                      {/* //////////////////////////// */}
                      {/* BOTON */}
                      <button
                        /* type="submit" */
                        class="mt-10 inline-block bg-logo w-3/4 rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        // data-te-ripple-init
                        // data-te-ripple-color="light"
                        onClick={handleSubmit}
                      >
                        Update
                      </button>
                      {/* //////////////////////////// */}
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
