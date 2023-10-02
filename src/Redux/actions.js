import {
  ADD_MODEL,
  ADD_MODELS,
  ADD_MODEL_CART,
  REMOVE_MODEL,
  REMOVE_MODEL_DISABLE,
  REMOVE_MODEL_CART,
  REMOVE_ALL_MODEL_CART,
  ORDER_MODELS_NAME_ASCENDANT,
  ORDER_MODELS_NAME_DESCENDANT,
  ORDER_MODELS_OWNED,
  ORDER_MODELS_PRICE_ASCENDANT,
  ORDER_MODELS_PRICE_DESCENDANT,
  ORDER_MODELS_RATING,
  ORDER_MODELS_RELEASED,
  FILTER_MODELS_BY_COLORS,
  FILTER_MODELS_BY_TYPES,
  UNDO_EMPTY_CART,
  LOGIN_USER,
  LOGOUT_USER,
} from "./types";
import axios from "axios";

const URL = "http://localhost:3001/";


//////////////////////////////////////////
// Agregado
export const removeUser = (name) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: REMOVE_USER,
        payload: name
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
//////////////////////////////////////////

export const addModel = (model) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: ADD_MODEL,
        payload: model,
      });
    } catch (error) {
      window.alert(error.message);
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
      window.alert(error.message);
    }
  };
};

export const addModelToCart = (id) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: ADD_MODEL_CART,
        payload: id,
      });
    } catch (error) {
      window.alert(error.message);
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
      window.alert(error.message);
    }
  };
};

export const removeModelDisable = (id) => {
  return async function (dispatch) {
    try {
      /* cambiar nombre de la ruta para la desabilitacion del modelo */
      await axios.put(`${URL}disableModel/:${id}`);
      return dispatch({
        type: REMOVE_MODEL_DISABLE,
        payload: id,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const removeModelFromCart = (id) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: REMOVE_MODEL_CART,
        payload: id,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const removeAllModelCart = () => {
  return function (dispatch) {
    try {
      return dispatch({
        type: REMOVE_ALL_MODEL_CART,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};


export const undoRemoveAllModelCart = () => {
  return function (dispatch) {
    try {
      return dispatch({
        type: UNDO_EMPTY_CART,
      });
    } catch (error) {
      window.alert(error.message);
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
      window.alert(error.message);
    }
  };
};

export const logOutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
