import {
  ADD_MODEL,
  ADD_MODELS,
  ADD_MODEL_CART,
  ADD_ALL_MODEL_CART,
  ADD_COLOR,
  REMOVE_MODEL_DISABLE,
  REMOVE_MODEL_CART,
  ORDER_MODELS_NAME_ASCENDANT,
  ORDER_MODELS_NAME_DESCENDANT,
  ORDER_MODELS_OWNED,
  ORDER_MODELS_PRICE_ASCENDANT,
  ORDER_MODELS_PRICE_DESCENDANT,
  ORDER_MODELS_RATING,
  ORDER_MODELS_RELEASED,
  FILTER_MODELS_BY_COLORS,
  FILTER_MODELS_BY_TYPES,
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_PRESETS,
  EDIT_USER,
  WITH_DEPLOYMENT,
  LOGIN_TRUE,
  DEPLOYMENT_COST,
} from "./types";
import axios from "axios";
// import { localStorageStore } from "react-admin";
import Swal from "sweetalert2";

const URL = process.env.REACT_APP_API;
// --------------------------------------------------------------------------Alert-⛔-----------
const showErrorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    confirmButtonColor: "rgb(94 195 191)",
    text: `${message}`,
  });
};
// --------------------------------------------------------------------------------⛔------------
export const addModel = (model) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: ADD_MODEL,
        payload: model,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};
////////////////////////////////////////////////
export const addColors = (color) => {
  console.log("action--->", color);
  return function (dispatch) {
    try {
      return dispatch({
        type: ADD_COLOR,
        payload: color,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};
////////////////////////////////////////////////

export const addAllModels = (id) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: ADD_MODELS,
        payload: id,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

export const addAllModelsToCart = (localStorage) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: ADD_ALL_MODEL_CART,
        payload: localStorage,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

export const addModelToCart = (id) => {
  return async function (dispatch, getState) {
    try {
      const state = getState();
      const allreadyOnCart = state.cart.filter((c) => c.id === id);

      if (allreadyOnCart.length)
        return Swal.fire({
          text: "This preset is allready on cart",
          title: "Warning",
          icon: "warning",
          confirmButtonColor: "rgb(94 195 191)",
        });

      const { data } = await axios.get(`${URL}/api/preset/${id}`);
      const preset = {
        id: data.id,
        name: data.name,
        category: data.category,
        price: data.price,
        color: data.color,
        type: data.type,
        rating: data.ratingAverage,
        released: data.released,
        images: data.images,
        url: data.url,
        releasedAt: data.releasedAt,
      };

      // Actualizar el estado con el nuevo carrito

      //si esta logeado el usuario se guarda en su base de datos el carrito relacionado al usuario
      if (state.login) {
        const userAndIds = {
          email: state.user.email,
          products: [id],
        };
        const response = await axios.post(`${URL}/api/shop/order`, userAndIds);
        if (response.statusText === "Created") {
          dispatch({
            type: ADD_MODEL_CART,
            payload: preset,
          });
        }
      } else {
        // si no esta logeado se guarda el carrito actualizado en el localStorage y en redux
        const updatedCart = [...state.cart, preset];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        dispatch({
          type: ADD_MODEL_CART,
          payload: preset,
        });
      }
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

export const removeModelFromCart = (id) => {
  return async function (dispatch, getState) {
    try {
      const state = getState();
      const filteredCart = state.cart.filter((c) => c.id !== id);

      //si esta logeado el usuario se guarda en su base de datos el carrito relacionado al usuario
      if (state.login) {
        const { data } = await axios.delete(
          `${URL}/api/shop/order?id=${id}&email=${state.user.email}`
        );
        if (data.isSuccess) {
          dispatch({
            type: REMOVE_MODEL_CART,
            payload: filteredCart,
          });
        }
      } else {
        // si no esta logeado se guarda el carrito actualizado en el localStorage
        localStorage.setItem("cart", JSON.stringify(filteredCart));
        dispatch({
          type: REMOVE_MODEL_CART,
          payload: filteredCart,
        });
      }
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

export const removeModelDisable = (id) => {
  return async function (dispatch) {
    try {
      /* cambiar nombre de la ruta para la desabilitacion del modelo */
      await axios.put(`${URL}/disableModel/:${id}`);
      return dispatch({
        type: REMOVE_MODEL_DISABLE,
        payload: id,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

//////////////////////////////////////////////////////////////////////
// Action creada para el put, le paso la data del usuario
export const editUserRedux = (userData) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: EDIT_USER,
        payload: userData,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};
//////////////////////////////////////////////////////////////////////

export const orderByNameAscendant = (name) => {
  return {
    type: ORDER_MODELS_NAME_ASCENDANT,
    payload: name,
  };
};
export const orderByNameDescendant = (name) => {
  return {
    type: ORDER_MODELS_NAME_DESCENDANT,
    payload: name,
  };
};
export const orderByRating = (rating) => {
  return {
    type: ORDER_MODELS_RATING,
    payload: rating,
  };
};
export const orderBySales = (owned) => {
  return {
    type: ORDER_MODELS_OWNED,
    payload: owned,
  };
};
export const orderByReleased = (released) => {
  return {
    type: ORDER_MODELS_RELEASED,
    payload: released,
  };
};
export const orderByPriceAscendant = (price) => {
  return {
    type: ORDER_MODELS_PRICE_ASCENDANT,
    payload: price,
  };
};
export const orderByPriceDescendant = (price) => {
  return {
    type: ORDER_MODELS_PRICE_DESCENDANT,
    payload: price,
  };
};
export const filterByType = (type) => {
  return {
    type: FILTER_MODELS_BY_TYPES,
    payload: type,
  };
};
export const filterByColor = (color) => {
  return {
    type: FILTER_MODELS_BY_COLORS,
    payload: color,
  };
};

export const logInUser = (payload) => {
  return async function (dispatch) {
    try {
      //actualizamos redux con el usuario
      dispatch({
        type: LOGIN_USER,
        payload: payload,
      });
      //nos traemos el cart del local storage, lo grabamos en la bdd y checkeamos que no hay nada anterior en la bdd
      const localStorageCart = localStorage.getItem("cart");
      if (localStorageCart) {
        const parsedCart = JSON.parse(localStorageCart);
        const idsCartLocalStorage = parsedCart.map((m) => m.id);
        const userAndIds = {
          email: payload.email,
          products: idsCartLocalStorage,
        };
        const responsePostLocalStorage = await axios.post(
          `${URL}/api/shop/order`,
          userAndIds
        );
        const responsePostLocalStorageData = responsePostLocalStorage.data.data;
        if (responsePostLocalStorageData.length) {
          localStorage.removeItem("cart");
          const responseGetBDD = await axios.get(
            `${URL}/api/shop/order?email=${payload.email}`
          );
          // si hay algo anterior en la bdd nos traemos toda la info y la sobreescribimos
          if (responseGetBDD.data.length > idsCartLocalStorage.length) {
            const responseGetAllBDD = await axios.get(
              `${URL}/api/preset?ids=${responseGetBDD.data}`
            );
            dispatch({
              type: ADD_ALL_MODEL_CART,
              payload: responseGetAllBDD.data,
            });
            return Swal.fire({
              text: "Your cart has been updated and merged with your account's items.",
              title: "Login",
              icon: "info",
              confirmButtonColor: "rgb(94 195 191)",
            });
            // si no hay nada que actualizar la bdd esta actualizada y le informamos al usuario q se logeo correctamente
          } else {
            return Swal.fire({
              text: "You have successfully logged in",
              title: "Login",
              icon: "success",
              confirmButtonColor: "rgb(94 195 191)",
            });
          }
        }
      }
      // si no habia carrito se busca si el usuario tiene carrito en la bdd y si es correcto se guarda en redux
      const responseGetAllDataBase = await axios.get(
        `${URL}/api/shop/order?email=${payload.email}`
      );
      console.log("responseGetAllDataBase", responseGetAllDataBase.data);

      if (responseGetAllDataBase.data.length) {
        const responseGetAllInfoPresets = await axios.get(
          `${URL}/api/preset?ids=${responseGetAllDataBase.data}`
        );
        console.log(
          "responseGetAllInfoPresets",
          responseGetAllInfoPresets.data
        );

        dispatch({
          type: ADD_ALL_MODEL_CART,
          payload: responseGetAllInfoPresets.data,
        });
        return Swal.fire({
          text: "Your cart has been updated with your account's items.",
          title: "Login",
          icon: "info",
          confirmButtonColor: "rgb(94 195 191)",
        });
      }
      return Swal.fire({
        text: "You have successfully logged in",
        title: "Login",
        icon: "success",
        confirmButtonColor: "rgb(94 195 191)",
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

export const logOutUser = () => {
  // ----------------------------------------------------------------
  return function (dispatch) {
    localStorage.removeItem("token"); // Eliminar del localStorage

    dispatch({
      type: LOGOUT_USER,
    });

    dispatch({
      type: ADD_ALL_MODEL_CART,
      payload: [],
    });
    // -----------------------------------------------------------------
    // return {
    //   type: LOGOUT_USER,
  };
};
export const logInSet = (payload) => {
  return function (dispatch) {
    dispatch({
      type: LOGIN_TRUE,
      payload: payload,
    });
  };
};

export const createPresets = () => {
  return {
    type: CREATE_PRESETS,
  };
};

export const withDeployment = (value) => {
  if (value === "true") value = true;
  if (value === "false") value = false;
  return {
    type: WITH_DEPLOYMENT,
    payload: value,
  };
};

export const deploymentCost = (value) => {
  return async function (dispatch, getState) {
    try {
      if (value === "true") value = true;
      if (value === "false") value = false;
      const state = getState();
      if (value) {
        const calculateDeployCost = () => {
          // Lógica para calcular el costo de despliegue
          return state.models.length * 15 + 50; // Por ejemplo, $10 por cada producto
        };
        value = calculateDeployCost();
      } else value = 0;
      return dispatch({
        type: DEPLOYMENT_COST,
        payload: value,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
