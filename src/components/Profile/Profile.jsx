import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { editUserRedux, logInUser } from "../../Redux/actions";
import decodeToken from "../loginComponents/decodeToken";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // traigo el usuario del estado global
  const user = useSelector((state) => state.user);
  const login = useSelector((state) => state.login);
  // console.log(user);
  const dispatch = useDispatch();
  const URL = process.env.REACT_APP_API;
  const navigate = useNavigate();

  useEffect(() => {
    if(login === false){
      navigate("/")
    }
  }, [login, navigate])
  
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
      showSuccessAlert("The image was uploaded to your profile");
      setuserLocal({ ...userLocal, logo: data.secure_url });
    } catch (error) {
      showErrorAlert("Error loading your image");
    }
  };

  // funcion edita la base de datos

  const editUser = async (userEdit) => {
    try {
      if (!userEdit.logo) {
        delete userEdit.logo;
      }
      // Edita los datos del usuario y rcibe el token actualizado
      const { data } = await axios.put(
        `${URL}/api/user/${user.email}`,
        userEdit
      );
      localStorage.setItem("token", data); // Almanecena el nuevo token en el localStorage

      const userDecode = decodeToken(data); // Decodifica el token

      dispatch(editUserRedux(userDecode)); // Guarda los datos del usuario actualizado en el estado global
      showSuccessAlert("Your profile data has been updated");
    } catch (error) {
      console.log(error.message);
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
      <div className="bg-gray-100 min-h-screen dark:bg-[#505050]">
        <div className="container mx-auto p-4">
          {/* Encabezado */}
          <h1 className="bg-[#303030] inline-block mb-4 w-full rounded 5ec3bf px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000]">
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
                  src={
                    user.logo
                      ? userLocal.logo || user.logo
                      : userLocal.logo ||
                        "https://res.cloudinary.com/codecrafttemplates/image/upload/v1697050849/codeCraft/logo_b_pstr1s.png"
                  }
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
            <div className="col-span-12 md:col-span-4 rounded bg-gray-300 dark:bg-[#303030]">
              <div className="flex items-center">
                <div>
                  <div className="block m-3 text-sm font-semibold uppercase leading-normal dark:text-[#707070]">
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
                        className="shadow appearance-none border rounded-md w-3/4 py-2 px-3 text-gray-700 dark:bg-[#505050] dark:text-[#909090] leading-normal focus:outline-none focus:shadow-outline first-letter:shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
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
                        title="ButtonUpload"
                        for="file"
                        class="inline-block mt-5 bg-[#505050] hover:bg-[#303030] w-3/4 rounded-md pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
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
                        className="indent-2 w-3/4 mt-5 rounded-md dark:bg-[#505050] dark:text-[#909090] leading-normal shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      ></textarea>
                      <p class="mt-1 text-sm leading-6 dark:text-[#909090] text-[#505050] mb-10">
                        Write a few sentences about your company.
                      </p>
                      {/* //////////////////////////// */}

                      {/* //////////////////////////// */}
                      {/* BOTON */}
                      <button
                        /* type="submit" */
                        class="mt-10 inline-block bg-logo w-3/4 dark:bg-[#3a8a87] rounded-md px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out dark:hover:bg-logo hover:bg-[#3a8a87] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
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
