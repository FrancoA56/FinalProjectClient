import {
  ADD_MODEL,
  ADD_MODELS,
  ADD_MODEL_CART,
  ADD_ALL_MODEL_CART,
  REMOVE_MODEL,
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

export const addModelToCart = (id) => {
  return async function (dispatch, getState) {
    try {
      const state = getState();
      const allreadyOnCart = state.cart.filter((c) => c.id === id);

      if (allreadyOnCart.length)
        return (
        Swal.fire({
          text: "This preset is allready on cart",
          title: "Warning",
          icon: "warning",
          confirmButtonColor: "rgb(94 195 191)",
        }));
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
      };

      const updatedCart = [...state.cart, preset]; // Agregar el nuevo elemento al carrito existente

      // Actualizar el estado con el nuevo carrito
      dispatch({
        type: ADD_MODEL_CART,
        payload: updatedCart,
      });

      // Guardar el carrito actualizado en el localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
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

export const removeModel = (id) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: REMOVE_MODEL,
        payload: id,
      });
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

export const removeModelFromCart = (id) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: REMOVE_MODEL_CART,
        payload: id,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

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
  return function (dispatch) {
    try {
      return dispatch({
        type: LOGIN_USER,
        payload: payload,
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
          return state.models.length * 10 + 30; // Por ejemplo, $10 por cada producto
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

