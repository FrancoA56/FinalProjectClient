import jwt from "jwt-decode";

const decodeToken = (token) => {
 
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
    }
};

export default decodeToken;
