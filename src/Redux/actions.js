import {
  ADD_MODEL,
  REMOVE_MODEL,
  REMOVE_MODEL_DISABLE,
  ORDER_MODELS_NAME,
  ORDER_MODELS_OWNED,
  ORDER_MODELS_PRICE,
  ORDER_MODELS_RATING,
  ORDER_MODELS_RELEASED,
  FILTER_MODELS_BY_COLORS,
  FILTER_MODELS_BY_TYPES,
} from "./types";
import axios from "axios";

const URL = "http://localhost:3001/";

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
  return function (dispatch) {
    try {
      return dispatch({
        type: REMOVE_MODEL_DISABLE,
        payload: id,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
