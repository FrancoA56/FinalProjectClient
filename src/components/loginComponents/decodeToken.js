import jwt from "jwt-decode";

const decodeToken = (token) => {
  try {
    const decodedToken = jwt(token);
    if (decodedToken) {
      const { email, name, logo, about } = decodedToken;
      const user = {
        email,
        name,
        logo,
        about,
      };
      return user;
    }else throw new Error ("Invalid token")
  } catch (error) {
    window.alert(error.message)
  }
};

export default decodeToken;
